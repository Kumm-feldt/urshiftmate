import React, { useEffect, useState } from "react";
import Table from  "./Table"
import "./Dashboard.css"
import "./Sidebar"
import Sidebar from "./Sidebar";
import Summary from "./Summary"

import * as api from "../api.js"
import { ThreeDot } from "react-loading-indicators";

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

function formatPhrase(phrase, values) {
  return phrase.replace(/\{(\w+)\}/g, (_, key) => {
    return values[key] !== undefined ? values[key] : `{${key}}`;
  });
}


const Dashboard = ({showSidebar = true}) => {
  const [detEvents, setDetailedEvents] = useState([]);
  const [summEvents, setSummarizedEvents] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [phrase, setPhrase] = useState("");
  const [type, setType] = useState("");
  const [calendarIndex, setCalendarIndex] = useState(0)
  const [loading, setLoading] = useState(true); // <- drives the spinner

  const header = ["Job", "Wage", "Hours Worked", "Total"];
  const headerDetailed = ["Job", "Date", "Start Time","End Time",  "Hours Worked"];


  // Function to fetch all data
  const fetchData = async (index) => {
    setLoading(true);
    try {
      const [detailed, summarized, user] = await Promise.all([
        api.fetchDetailedEvents(index),
        api.fetchSummarizedEvents(index),
        api.fetchUserSummary(index)
      ]);
      
      setDetailedEvents(detailed || []);
      setUserInfo(user || null);
      await setSummarizedEventsHelper(summarized || [], user);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch on component mount
  useEffect(() => {
    let alive = true;

    (async () => {
      // 1) auth gate
      const auth = await api.ensureAuth();

      if (!auth.isAuthenticated) {
        if (!alive) return;
        console.log("bro not authentificated")
        //window.location.replace("/login");
        //return;
      }
      // 2) fetch in parallel
      if(alive){
        await fetchData(calendarIndex)
      }

    })();

    return () => { alive = false; }; // prevent state updates after unmount
  }, []);

  // Watch for calendarIndex changes and refetch data
  useEffect(()=>{
    if(calendarIndex != 0 || userInfo){
      fetchData(calendarIndex)
    }
  }, [calendarIndex])


  // Show loading on initial load only
  if (loading && !userInfo) return <div className="loading"><ThreeDot color="#070c22ff" size="medium" text="" textColor="" /></div>;
  if (!userInfo && !loading) return null; // defensive; we redirect if unauth



const moneyAmount = (userInfo.paycheck || 0).toFixed(2);
const checkDay = userInfo.checkDay || 0;

const startWeekOne = userInfo.startWeekOne || 0;
const endWeekOne = userInfo.endWeekOne || 0;
const startWeekTwo = userInfo.startWeekTwo || 0;
const endWeekTwo = userInfo.endWeekTwo || 0;
const taxedPaycheck = userInfo.taxedPaycheck || 0;


    async function setSummarizedEventsHelper(data, user){
        let amount = Number(user?.paycheck || 0);
        console.log("Amount: ", amount)
        const localType = amount < 100 ? "negative" : "positive";

        setType(localType)
        setSummarizedEvents(data)

        try {
          // call backend to get a phrase
          const res = await api.randomPhrase(localType);
          if (res && res.phrase) {
            setPhrase(res.phrase);   // update state
          }
        } catch (err) {
          console.error("Error fetching random phrase:", err);
        }
  }



const formattedPhrase = formatPhrase(phrase, {
  name: userInfo?.username,
  hours: userInfo?.totalHours,
  payDate: userInfo?.taxedPaycheck, 
  earnings: `$${userInfo?.paycheck}`,
  goalHours: 40
});


  return (
    <div>
      {showSidebar && <Sidebar></Sidebar>}
          {/* Google Calendar Events */}

          <div className="dashboard-div-container">
              <h1 className="h1-title-table">{formattedPhrase} </h1>
              <div className="summary-container">

              <svg onClick={() => {
            setCalendarIndex(calendarIndex-1)
          }} className="w-[44px] h-[44px] text-gray-800 arrow-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
              </svg>
              <Summary date={checkDay} moneyAmount={taxedPaycheck}></Summary>
              <svg onClick={() => {
            setCalendarIndex(calendarIndex+1)
          }} className="w-[44px] h-[44px] text-gray-800 arrow-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>



              </div>

              {/* ################ TOGGLE BAR ####################### */}
              <div className="dashboard-middle">
                    <div className="dashboard-toggle-bar">
                      <div id="table-details-btn" className="dashboard-toggle d-t-details" onClick={toggleBar} >Details</div>
                      <div id="table-summary-btn" className="dashboard-toggle d-t-summary toggle-active" onClick={toggleBar}>Summary</div>
                    </div>

                  
                    <div id="table-summary" className="table-holder">
                      <h2 className="h2-title-table">Hours from {startWeekOne} to {endWeekOne} </h2>
                       <Table columns={header} data={summEvents.first} renderType={"Summary"}></Table>
                 
                        <h2 className="h2-title-table">Hours from {startWeekTwo} to {endWeekTwo} </h2>
                       <Table columns={header} data={summEvents.second} renderType={"Summary"}></Table>
                    </div>

                    <div id="table-details" className="table-holder table-inactive ">
                      <h2 className="h2-title-table">Hours from {startWeekOne} to {endWeekOne} </h2>
                      <Table columns={headerDetailed} data={detEvents.first} renderType={"Detailed"}></Table>

                      <h2 className="h2-title-table">Hours from {startWeekTwo} to {endWeekTwo} </h2>
                      <Table columns={headerDetailed} data={detEvents.second} renderType={"Detailed"}></Table>
                    </div>
            </div>
          </div>




    </div>
  );
};


export default Dashboard;
