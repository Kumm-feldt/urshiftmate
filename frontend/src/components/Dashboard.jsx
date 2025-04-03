import React, { useEffect, useState } from "react";
import Table from  "./Table"

const Dashboard = () => {
  const [events, setEvents] = useState([]);
 // const [earnings, setEarnings] = useState(0);
  const [workplaces, setWorkplaces] = useState([]);
  const [newWorkplace, setNewWorkplace] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  useEffect(() => {
    fetchEvents();
    //fetchEarnings();
    //fetchWorkplaces();
  }, []);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/google/events", {
        credentials: "include",
      });
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };


const header = ["Job", "Wage", "Hours Worked", "Total"];

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Earnings Display 
      <h2>Total Earnings: ${earnings}</h2>
      */}

      {/* Workplace List */}
      <h3>Your Workplaces</h3>
      {/*
      <ul>
        {workplaces.map((workplace, index) => (
          <li key={index}>{workplace.workplace} - ${workplace.hourlyRate}/hr</li>
        ))}
      </ul>*/}

      {/* Add New Workplace 
      <h3>Add Workplace</h3>
      <input
        type="text"
        placeholder="Workplace Name"
        value={newWorkplace}
        onChange={(e) => setNewWorkplace(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hourly Rate"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(e.target.value)}
      />
      <button onClick={handleAddWorkplace}>Add Workplace</button>
*/}
      {/* Google Calendar Events */}
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.summary} - {new Date(event.start.dateTime).toLocaleString()}</li>
        ))}
      </ul>

      <button onClick={() => {
        fetch("http://localhost:8000/auth/logout", { method: "POST", credentials: "include" });
        window.location.href = "/login";
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
