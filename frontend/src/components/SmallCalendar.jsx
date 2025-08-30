import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import styles
import "./SmallCalendar.css"
export default function SmallCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "10px", 
      borderRadius: "8px", 
      width: "fit-content" 
    }}>
      <Calendar
        onChange={setDate}
        value={date}
        calendarType="gregory"
      />
      <p style={{ marginTop: "10px" }}>
        Selected date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
}
