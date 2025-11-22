const { google } = require("googleapis");
const { getRefreshToken } = require("./userController");
const { builtinModules } = require("module");
const { Workplace } = require("../models/Workplace");
const { User } = require("../models/User");
const moment = require("moment-timezone");
const {HttpError, DateHelper} = require("../utils/utils")

require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);
const DEFAULT_TIMEZONE = "America/Chicago";


// ############################ Service Layer ##############################
class CalendarService {

  // Returns active calendars from DB
  static async getActiveCalendars(googleId) {
    const user = await User.findOne({ googleId }).select("calendars -_id");
    return user?.calendars || [];
  }

  // Returns boolean value if calendar is active
  static async isCalendarActive(googleId, summary, isPrimary) {
    const user = await this.getActiveCalendars(googleId);

    return user.calendars.some(cal =>
      cal.calendarName === summary || (isPrimary && cal.calendarName === "Primary")
    );
  }

  // Returns a list of objects of the users calendars and its information
  static async getGoogleCalendarList(googleId) {
    const refreshToken = await getRefreshToken(googleId);
    if (!refreshToken) {
      throw new HttpError(401, "No refresh token found. Please re-authenticate.");
    }

    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const response = await calendar.calendarList.list();
    if (!response.data.items || response.data.items.length === 0) {
      return [];
    }

    const calendarList = [];
    for (const cal of response.data.items) {
      const isActive = await this.isCalendarActive(googleId, cal.summary, cal.primary);
      calendarList.push({
        calendarId: cal.id,
        calendarSummary: cal.summary,
        primary: cal.primary || false,
        activeCalendar: isActive
      });
    }

    return calendarList;
  }

  // Returns a list of all the events from the active calendars from a certain date range
  static async getEvents(googleId, startDate, endDate, timezone = DEFAULT_TIMEZONE) {
    const refreshToken = await getRefreshToken(googleId);
    if (!refreshToken) {
      throw new HttpError(401, "No refresh token found. Please re-authenticate.");
    }

    const activeCalendars = await this.getActiveCalendars(googleId);

    if (activeCalendars.length === 0) {
      return [];
    }

    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const allEvents = [];
  const startISO = DateHelper.startOfDayLocal(startDate, timezone).toISOString();
  const endISO = DateHelper.endOfDayLocal(endDate, timezone).toISOString();


    for (const cal of activeCalendars) {
      const response = await calendar.events.list({
        calendarId: cal.calendarId,
        timeMin: startISO,
        timeMax: endISO,
        singleEvents: true,
        orderBy: "startTime",
      });
      allEvents.push(...response.data.items);
    }

    return allEvents;
  }

  // Validates if it is first week vs. second week and according to it it will call getEvents 
  // to get the events of one week (either first or second week)
  static async getWeekEvents(googleId, dates, week, timezone = DEFAULT_TIMEZONE) {
    const isFirstWeek = week === "first";
    const startDate = isFirstWeek ? dates.weekOneStart : dates.weekTwoStart;
    const endDate = isFirstWeek ? dates.weekOneEnd : dates.weekTwoEnd;

    return this.getEvents(googleId, startDate, endDate, timezone);
  }

  // #### ADD CALENDAR ####
  static async addCalendar(googleId, calendarId, calendarName) {
    const result = await User.updateOne(
      { googleId },
      { $push: { calendars: { calendarId, calendarName: calendarName.trim() } } }
    );

    if (result.matchedCount === 0) {
      throw new HttpError(404, "User not found");
    }

    return { added: true };
  }

  // #### DELETE CALENDAR ####
  static async deleteCalendar(googleId, calendarId, isPrimary) {
    let calendarToDelete = calendarId;

    // Handle primary calendar logic
    if (isPrimary && calendarId !== "Primary") {
      const user = await User.findOne({ googleId });
      if (user) {
        const hasMatch = user.calendars.some(cal => cal.calendarName === "Primary");
        if (hasMatch) {
          calendarToDelete = "Primary";
        }
      }
    }

    const result = await User.updateOne(
      { googleId },
      { $pull: { calendars: { calendarId: calendarToDelete.trim() } } }
    );

    if (result.matchedCount === 0) {
      throw new HttpError(404, "User not found");
    }

    if (result.modifiedCount === 0) {
      return { removed: false, message: "Calendar not found in list" };
    }

    return { removed: true };
  }
}

class UserService {
  static async getUserInfo(googleId) {
    const user = await User.findOne({ googleId });
    return user ? { name: user.name, googleId: user.googleId } : null;
  }
    static async getUserTimezone(googleId) {
    //const user = await User.findOne({ googleId }).select("timezone -_id");
    return DEFAULT_TIMEZONE;
  }
}

// ############################ Business Logic ##############################
class EventProcessor {
  // From a list of events [from the active calendars] it filters the ones with the keyword shift. 
  // Then returns a list of events with its information from each shift.
  // ->>>>>>>>>>>> Wouldnt it be better to filter it before?
  static async processShiftEvents(googleId, events, timezone = DEFAULT_TIMEZONE) {
    const user = await User.findOne({ googleId });
    if (!user) {
      return [];
    }

    const jobs = await Workplace.find({ userId: user._id });
    if (jobs.length === 0) {
      return [];
    }

    const processedEvents = [];

    for (const event of events) {
      if (!event.summary || !event.summary.toLowerCase().includes("shift")) {
        continue;
      }

      for (const job of jobs) {
        if (event.summary.toLowerCase().includes(job.workplace.toLowerCase())) {
          const startMoment = moment.tz(event.start.dateTime, timezone);
          const endMoment = moment.tz(event.end.dateTime, timezone);
          const totalHours = endMoment.diff(startMoment, 'hours', true);
          const totalWage = totalHours * job.hourlyRate;

          processedEvents.push({
            workplace: job.workplace,
            wage: job.hourlyRate,
            date: DateHelper.formatDateRange(event.start.dateTime, event.end.dateTime, timezone),
            startTime: startMoment.format('hh:mm A'),
            endTime: endMoment.format('hh:mm A'),
            totalWage: Math.round(totalWage * 100) / 100,
            totalHours: Math.round(totalHours * 100) / 100
          });
        }
      }
    }

    return processedEvents;
  }

  // Paycheck summary biweekly
  static calculatePaycheckSummary(events) {
    return events.reduce((acc, event) => ({
      totalWage: acc.totalWage + event.totalWage,
      totalHours: acc.totalHours + event.totalHours,
      taxedPaycheck: acc.taxedPaycheck + event.totalWage
    }), { totalWage: 0, totalHours: 0, taxedPaycheck: 0 });
  }

  // returns a list of summaries with information per shift biweekly
   static summarizeByWorkplace(events) {
    const summary = {};

    for (const event of events) {
      const key = event.workplace.toLowerCase();
      if (!summary[key]) {
        summary[key] = {
          workplace: event.workplace,
          wage: event.wage,
          totalWage: 0,
          totalHours: 0
        };
      }

      summary[key].totalWage += event.totalWage;
      summary[key].totalHours += event.totalHours;
    }

    return Object.values(summary);
  }
}

class PaycheckCalculator {
 static calculate(summaryEvents, dates, username, taxPercent = 10.05) {
    let totalPaycheck = 0;
    let totalHours = 0;

    for (const weekEvents of summaryEvents) {
      if (weekEvents) {
        for (const event of weekEvents) {
          totalPaycheck += event.totalWage;
          totalHours += event.totalHours;
        }
      }
    }

    const gross = totalPaycheck;
    const net = gross * (1 - taxPercent / 100);

    return {
      username,
      paycheck: gross.toFixed(2),
      taxedPaycheck: net.toFixed(2),
      totalHours: Math.round(totalHours * 100) / 100,
      checkDay: dates.checkDay,
      startWeekOne: dates.weekOneStart,
      endWeekOne: dates.weekOneEnd,
      startWeekTwo: dates.weekTwoStart,
      endWeekTwo: dates.weekTwoEnd,
    };
  }
}

// ############################ Controller Layer ##############################
class PaycheckController {
  static async getPaycheckSummary(req, res) {
    const { googleId } = req.userInfo;
    const index = req.query.index || 0;

    const dates = DateHelper.getDates(index);
    if (!dates) {
      throw new HttpError(404, "No valid dates found for the given index");
    }

    const user = await UserService.getUserInfo(googleId);
    const timezone = await UserService.getUserTimezone(googleId);

    // Fetch events for both weeks in parallel
    const [firstWeekEvents, secondWeekEvents] = await Promise.all([
      CalendarService.getWeekEvents(googleId, dates, "first", timezone),
      CalendarService.getWeekEvents(googleId, dates, "second", timezone)
    ]);

    // Process events for both weeks in parallel
    const [firstWeekProcessed, secondWeekProcessed] = await Promise.all([
      EventProcessor.processShiftEvents(googleId, firstWeekEvents, timezone),
      EventProcessor.processShiftEvents(googleId, secondWeekEvents, timezone)
    ]);

    // Create summaries
    const firstWeekSummary = EventProcessor.summarizeByWorkplace(firstWeekProcessed);
    const secondWeekSummary = EventProcessor.summarizeByWorkplace(secondWeekProcessed);

    const paycheckSummary = PaycheckCalculator.calculate(
      [firstWeekSummary, secondWeekSummary],
      dates,
      user?.name || ''
    );

    res.json({
      summary: paycheckSummary,
      weekOne: {
        summary: firstWeekSummary,
        details: firstWeekProcessed
      },
      weekTwo: {
        summary: secondWeekSummary,
        details: secondWeekProcessed
      }
    });
  }
static async getPaycheckDetails(req, res) {
    const { googleId } = req.userInfo;
    const index = req.query.index || 0;

    const dates = DateHelper.getDates(index);
    if (!dates) {
      throw new HttpError(404, "No valid dates found for the given index");
    }

    const timezone = await UserService.getUserTimezone(googleId);

    // Gets a list of all the events events 
    const [firstWeekEvents, secondWeekEvents] = await Promise.all([
      CalendarService.getWeekEvents(googleId, dates, "first", timezone),
      CalendarService.getWeekEvents(googleId, dates, "second", timezone)
    ]);

    // Process only the events with the keyword "Shift" and the jobs in the db
    const [firstWeekProcessed, secondWeekProcessed] = await Promise.all([
      EventProcessor.processShiftEvents(googleId, firstWeekEvents, timezone),
      EventProcessor.processShiftEvents(googleId, secondWeekEvents, timezone)
    ]);

    res.json({
      weekOne: firstWeekProcessed,
      weekTwo: secondWeekProcessed
    });
  }

   static async getPaycheckOverview(req, res) {
    const { googleId } = req.userInfo;
    const index = req.query.index || 0;

    const dates = DateHelper.getDates(index);
    if (!dates) {
      throw new HttpError(404, "No valid dates found for the given index");
    }

    const user = await UserService.getUserInfo(googleId);

    res.json({
      username: user?.name || '',
      checkDay: dates.checkDay,
      weekOne: {
        start: dates.weekOneStart,
        end: dates.weekOneEnd
      },
      weekTwo: {
        start: dates.weekTwoStart,
        end: dates.weekTwoEnd
      }
    });
  }
}

class CalendarController {
  static async list(req, res) {
    const { googleId } = req.userInfo;
    const calendars = await CalendarService.getGoogleCalendarList(googleId);
    res.json({ calendars });
  }

  static async listActive(req, res) {
    const { googleId } = req.userInfo;
    const calendars = await CalendarService.getActiveCalendars(googleId);
    res.json({ calendars });
  }

  static async add(req, res) {
    const { googleId } = req.userInfo;
    const { calendarId, summary } = req.body;

    if (!calendarId || !summary) {
      throw new HttpError(400, "calendarId and summary are required");
    }

    const result = await CalendarService.addCalendar(googleId, calendarId, summary);
    res.json(result);
  }

  static async remove(req, res) {
    const { googleId } = req.userInfo;
    const { calendarId, primary } = req.body;

    if (!calendarId) {
      throw new HttpError(400, "calendarId is required");
    }

    const result = await CalendarService.deleteCalendar(googleId, calendarId, primary);
    res.json(result);
  }

  static async checkExists(req, res) {
    const { googleId } = req.userInfo;
    const activeCalendars = await CalendarService.getActiveCalendars(googleId);
    res.json({ exists: activeCalendars.length > 0 });
  }

}

module.exports = {
  // Controllers
  PaycheckController,
  CalendarController,  
  // Services (for backward compatibility or testing)
  CalendarService,
  UserService,
  EventProcessor,
  PaycheckCalculator
};