import React, { useEffect, useState } from "react";
import Table from  "./Table"
import "./Dashboard.css"
import "./Sidebar"
import Sidebar from "./Sidebar";
import Summary from "./Summary"

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
const clientName = "Anthony";
const quote = "Great Week! ";


  return (
    <div>
      <Sidebar></Sidebar>
      {/* Google Calendar Events */}

      <div className="dashboard-div-container">
      <h1>Hello {clientName}, {quote}! 👋</h1>

     <Summary date={"March 17"} moneyAmount={"321.21"}></Summary>

      <div className="table-holder">
        <h2 className="h2-title-table">Hours from Feb 12 to March 1</h2>
      <Table columns={header} data={summEvents} renderType={"Summary"}></Table>
      </div>
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
