import React, { useEffect, useState } from "react";
import Table from  "./Table"
import "./Dashboard.css"
import "./Sidebar"
import Sidebar from "./Sidebar";
import Summary from "./Summary"

import * as api from "../api.js"

function toggleBar(e) {
  document.querySelectorAll(".dashboard-toggle").forEach(btn =>
    btn.classList.remove("toggle-active")
  );

  document.querySelectorAll(".table-holder").forEach(btn=>
    btn.classList.remove("table-inactive")
  )


  let detailedTable = document.getElementById("table-details");
  let summaryTable = document.getElementById("table-summary");

  if(e.target.id == "table-details-btn"){
    summaryTable.classList.add("table-inactive");
  }else if(e.target.id == "table-summary-btn"){
    detailedTable.classList.add("table-inactive");
  }

  e.target.classList.add("toggle-active");

}





const Dashboard = () => {
  const [detEvents, setDetailedEvents] = useState([]);
  const [summEvents, setSummarizedEvents] = useState([]);
  const [userInfo, setUserInfo] = useState();

 // const [earnings, setEarnings] = useState(0);
  const [workplaces, setWorkplaces] = useState([]);
  const [newWorkplace, setNewWorkplace] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  useEffect(
    () => {
    api.fetchDetailedEvents()
    .then(setDetailedEvents);

    api.fetchSummarizedEvents()
    .then(setSummarizedEvents);

    api.fetchUserSummary()
    .then(setUserInfo);

  }, []);

  if (!userInfo) return <div>Loading...</div>;



const header = ["Job", "Wage", "Hours Worked", "Total"];
const headerDetailed = ["Job", "Wage", "Start Time","End Time",  "Hours Worked"];

const clientName = userInfo.username || "";

const moneyAmount = userInfo.paycheck || 0;
const totalHoursWorked = userInfo.totalHours || 0;
const checkDay = userInfo.checkDay || 0;

const fromDate = userInfo.from || 0;
const toDate = userInfo.to || 0;


const quote = "Great Week! ";


  return (
    <div>
          <Sidebar></Sidebar>
          {/* Google Calendar Events */}

          <div className="dashboard-div-container">
                <h1 className="h1-title-table">Hello {clientName}, {quote}! 👋 </h1>


              <Summary date={checkDay} moneyAmount={moneyAmount}></Summary>

              {/* ################ TOGGLE BAR ####################### */}

              <div className="dashboard-middle">
                    <div className="dashboard-toggle-bar">
                      <div id="table-details-btn" className="dashboard-toggle d-t-details" onClick={toggleBar} >Details</div>
                      <div id="table-summary-btn" className="dashboard-toggle d-t-summary toggle-active" onClick={toggleBar}>Summary</div>
                    </div>

                  
                    <div id="table-summary" className="table-holder">
                      <h2 className="h2-title-table">Hours from {fromDate} to {toDate} </h2>
                       <Table columns={header} data={summEvents} renderType={"Summary"}></Table>
                    </div>

                    <div id="table-details" className="table-holder table-inactive ">
                    <h2 className="h2-title-table">Hours from {fromDate} to {toDate} </h2>

                      <Table columns={headerDetailed} data={detEvents} renderType={"Detailed"}></Table>
                    </div>
            </div>
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
