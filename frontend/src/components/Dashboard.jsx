import React, { useEffect, useState } from "react";
import Table from  "./Table"
import "./Dashboard.css"

const Dashboard = () => {
  const [detEvents, setDetailedEvents] = useState([]);
  const [summEvents, setSummarizedEvents] = useState([]);

 // const [earnings, setEarnings] = useState(0);
  const [workplaces, setWorkplaces] = useState([]);
  const [newWorkplace, setNewWorkplace] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  useEffect(() => {
    fetchDetailedEvents();
    fetchSummarizedEvents();
    //fetchWorkplaces();
  }, []);

  // Fetch events from backend
  const fetchDetailedEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/google/detailedEvents", {
        credentials: "include",
      });
      const data = await response.json();
      setDetailedEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };


 const fetchSummarizedEvents = async () => {
  try {
    const response = await fetch("http://localhost:8000/google/summaryEvents", {
      credentials: "include",
    });
    const data = await response.json();
    setSummarizedEvents(data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

  


const header = ["Job", "Wage", "Hours Worked", "Total"];
const headerDetailed = ["Job", "Wage", "Start Time","End Time",  "Hours Worked"];


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
      <div className="dashboard-div-container">
      <Table columns={header} data={summEvents} renderType={"Summary"}></Table>
      <Table columns={headerDetailed} data={detEvents} renderType={"Detailed"}></Table>

      </div>
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
