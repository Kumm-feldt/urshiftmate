import React, { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import { localizer } from "../calendarSetup";

export default function MyCalendar() {
  const [events, setEvents] = useState([
    {
      title: "John's Shift",
      start: new Date(2025, 8, 12, 9, 0),  // Sept 12, 2025, 9:00 AM
      end: new Date(2025, 8, 12, 17, 0),   // Sept 12, 2025, 5:00 PM
    },
    {
      title: "Maria Clocked In",
      start: new Date(2025, 8, 12, 10, 30),
      end: new Date(2025, 8, 12, 14, 15),
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
