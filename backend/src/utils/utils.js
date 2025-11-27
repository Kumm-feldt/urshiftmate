const moment = require("moment-timezone");
const dateFile = require("./dates.json");

const DEFAULT_TIMEZONE = "America/Chicago";

class DateHelper {
  static getDates(ind = 0, timezone = DEFAULT_TIMEZONE) {
    const index = Number(ind);
    const now = new Date();
    const today = this.startOfDayLocal(now, timezone);

    for (let i = 0; i < dateFile.length; i++) {
      const from = this.startOfDayLocal(new Date(dateFile[i].weekOneStart), timezone);
      const to = this.endOfDayLocal(new Date(dateFile[i].weekTwoEnd), timezone);

      if (today >= from && today <= to) {
        const next = dateFile[i + index];
        if (!next) return null;

        return {
          weekOneStart: next.weekOneStart,
          weekOneEnd: next.weekOneEnd,
          weekTwoStart: next.weekTwoStart,
          weekTwoEnd: next.weekTwoEnd,
          checkDay: this.convertDateOnlyToTimezone(next.checkDate, timezone),
        };
      }
    }
    return null;
  }

  static startOfDayLocal(d, timezone = DEFAULT_TIMEZONE) {
    return moment.tz(d, timezone).startOf("day");
  }

  static endOfDayLocal(d, timezone = DEFAULT_TIMEZONE) {
    return moment.tz(d, timezone).endOf("day");
  }

  static convertDateOnlyToTimezone(dateOnlyString, timezone = DEFAULT_TIMEZONE) {
    return moment.tz(dateOnlyString + "T00:00:00", timezone).toISOString();
  }

  static formatDateRange(startDateTime, endDateTime, timezone = DEFAULT_TIMEZONE) {
    const startDate = moment.tz(startDateTime, timezone);
    const endDate = moment.tz(endDateTime, timezone);

    const startStr = startDate.format("M/D/YYYY");
    const endStr = endDate.format("M/D/YYYY");

    return startStr === endStr ? startStr : `${startStr} - ${endStr}`;
  }
}

class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'HttpError';
    Error.captureStackTrace(this, this.constructor);
  }
  
  static badRequest(message = "Bad Request") {
    return new HttpError(400, message);
  }
  
  static unauthorized(message = "Unauthorized") {
    return new HttpError(401, message);
  }
  
  static notFound(message = "Not Found") {
    return new HttpError(404, message);
  }
  
  static internal(message = "Internal Server Error") {
    return new HttpError(500, message);
  }
}

module.exports = { HttpError, DateHelper, DEFAULT_TIMEZONE };