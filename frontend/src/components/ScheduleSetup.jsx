import React, { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import { localizer } from "../calendarSetup";

export default function MyCalendar() {
const [events, setEvents] = useState([
  {
    title: "John's Shift",
    start: new Date(2025, 10, 1, 9, 0),   // November 1, 2025
    end: new Date(2025, 10, 1, 17, 0),    // same day, 5:00 PM
  },
  {
    title: "Maria Josue",
    start: new Date(2025, 10, 1, 8, 0), // November 31 doesn't exist — change to 30
    end: new Date(2025, 10, 1, 9, 0),
  },
]);

  return (
    <div style={{ height: "90vh", padding: "1rem" }}>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
}
