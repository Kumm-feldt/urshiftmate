import React, { useEffect, useState, useContext } from "react";
import Table from "./Table";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import { AuthContext } from "../AuthContext";
import * as api from "../api.js";
import { ThreeDot } from "react-loading-indicators";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function toggleBar(e) {
  document.querySelectorAll(".dashboard-toggle").forEach(btn =>
    btn.classList.remove("toggle-active")
  );

  document.querySelectorAll(".table-holder").forEach(btn =>
    btn.classList.remove("table-inactive")
  );

  let detailedTable = document.getElementById("table-details");
  let summaryTable = document.getElementById("table-summary");

  if (e.target.id == "table-details-btn") {
    summaryTable.classList.add("table-inactive");
  } else if (e.target.id == "table-summary-btn") {
    detailedTable.classList.add("table-inactive");
  }

  e.target.classList.add("toggle-active");
}

const mapStatusToMsg = (e) => {
  if (!e || typeof e !== "object")
    return "Something went wrong. Please try again later.";
  if (e.status === 401) return "Please connect your Google account to continue.";
  if (e.status === 400)
    return "Missing or invalid parameters. Please try again.";
  if (e.status === 404)
    return "No events found for the selected dates.";
  if (e.status === 0)
    return "You're offline or the server is unreachable.";
  return e.message || "Something went wrong. Please try again later.";
};

function formatPhrase(phrase, values) {
  return phrase.replace(/\{(\w+)\}/g, (_, key) => {
    return values[key] !== undefined ? values[key] : `{${key}}`;
  });
}

const HEADER = ["Job", "Wage", "Hours Worked", "Total"];
const HEADERDETAILED = ["Job", "Date", "Start Time", "End Time", "Hours Worked"];

const Dashboard = ({ showSidebar = true }) => {
  const { auth } = useContext(AuthContext);

  const [detEventsWeekOne, setDetailedEventsWeekOne] = useState([]);
  const [detEventsWeekTwo, setDetailedEventsWeekTwo] = useState([]);
  const [summEventsWeekOne, setSummarizedEventsWeekOne] = useState([]);
  const [summEventsWeekTwo, setSummarizedEventsWeekTwo] = useState([]);
  const [paycheckSummary, setPaycheckSummary] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [phrase, setPhrase] = useState("");
  const [calendarIndex, setCalendarIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [calendarExists, setCalendarExists] = useState(false);

  const [prevWeekPayment, setPrevWeekPayment] = useState(0);

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const existsCal = async () => {
    try {
      const exists = await api.calendarExists();
      setCalendarExists(exists);
      return exists;
    } catch (e) {
      console.error("Error checking calendar existence:", e);
      // If user is unauthorized or not found, clear auth and redirect
      if (e.status === 401 || e.status === 404) {
        localStorage.removeItem('authToken');
        window.location.replace("/login");
        return false;
      }
      return false;
    }
  };

  const fetchData = async (index) => {
    setLoading(true);
    setErrorMsg("");

    try {
      const [
        detailedData,
        summarizedData,
        userOverview,
        prevPaymentData
      ] = await Promise.all([
        api.fetchDetailedEvents(index),
        api.fetchSummarizedEvents(index),
        api.fetchUserSummary(index),
        api.fetchPaymentPerWeek(calendarIndex - 1)
      ]);

      setDetailedEventsWeekOne(detailedData.weekOne || []);
      setDetailedEventsWeekTwo(detailedData.weekTwo || []);
      setPaycheckSummary(summarizedData.summary || null);
      setSummarizedEventsWeekOne(summarizedData.weekOne?.summary || []);
      setSummarizedEventsWeekTwo(summarizedData.weekTwo?.summary || []);
      setUserInfo(userOverview || []);

      if (prevPaymentData) {
        setPrevWeekPayment(prevPaymentData.summary.taxedPaycheck || 0);
      } else {
        setPrevWeekPayment(0);
      }

    } catch (e) {
      setErrorMsg(mapStatusToMsg(e));
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    let alive = true;

    (async () => {
      if (!auth.isAuthenticated) {
        if (!alive) return;
        window.location.replace("/login");
        return;
      }

      const exists = await existsCal();
      if (!alive) return;

      if (exists) {
        await fetchData(calendarIndex);
      } else {
        setDetailedEventsWeekOne([]);
        setDetailedEventsWeekTwo([]);
        setSummarizedEventsWeekOne([]);
        setSummarizedEventsWeekTwo([]);
        setPaycheckSummary(null);
        setUserInfo(null);
      }
      setLoading(false);
    })();

    return () => { alive = false; };
  }, []);

  // Checks the payment summary for personalized message
  useEffect(() => {
    if (!paycheckSummary) return;

    (async () => {
      try {
        const type =
          paycheckSummary.taxedPaycheck < 100 ? "negative" : "positive";

        const randomPhraseData = await api.randomPhrase(type);

        if (randomPhraseData?.phrase) {
          setPhrase(randomPhraseData.phrase);
        }
      } catch (e) {
        console.error("Error fetching random phrase:", e);
      }
    })();
  }, [paycheckSummary]);

  useEffect(() => {
    if (calendarIndex === 0 && !userInfo) return;

    (async () => {
      const exists = await existsCal();
      if (exists) await fetchData(calendarIndex);
    })();
  }, [calendarIndex]);


  if (loading)
    return (
      <div className="loading">
        <ThreeDot color="#070c22ff" size="medium" text="" textColor="" />
      </div>
    );

  // Creates personalizad phrase
  let formattedPhrase;
  if (userInfo) {
    formattedPhrase = formatPhrase(phrase, {
      name: userInfo?.username || "sir",
      hours: paycheckSummary?.totalHours || 0,
      payDate: userInfo?.checkDay || Date.now(),
      earnings: `$${paycheckSummary?.taxedPaycheck}` || 0,
      goalHours: 40
    });
  }


  return (
    <div>
      {showSidebar && <Sidebar />}

      {!calendarExists ? (
        // Show this when no calendar exists
        <div className="dashboard-div-container">
          <div className="div-message-container">
            <div className="no-calendar-message">
              <h2>No Calendar Found</h2>
              <p>Please set up your calendars in Settings to get started.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="dashboard-div-container">
          <h1 className="h1-title-table">{formattedPhrase}</h1>

          <div className="summary-container">
            <svg
              onClick={() => setCalendarIndex(calendarIndex - 1)}
              className="w-[44px] h-[44px] text-gray-800 arrow-i"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>

            <Summary
              prev={prevWeekPayment}
              date={userInfo.checkDay || '2/2/2026'}
              moneyAmount={paycheckSummary.paycheck}
              preTaxMoneyAmount={paycheckSummary.taxedPaycheck}
            />

            <svg
              onClick={() => setCalendarIndex(calendarIndex + 1)}
              className="w-[44px] h-[44px] text-gray-800 arrow-i"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </div>

          <div className="buttons-dashboard">
            <button
              onClick={() => setCalendarIndex(0)}
              className="current-btn"
            >
              Current
            </button>

            <div>
              <button className="current-btn" onClick={reactToPrintFn}>
                <i className="bi bi-printer-fill"></i>
              </button>
            </div>
          </div>

          <div className="dashboard-middle">
            <div className="dashboard-toggle-bar">
              <div
                id="table-details-btn"
                className="dashboard-toggle d-t-details"
                onClick={toggleBar}
              >
                Details
              </div>

              <div
                id="table-summary-btn"
                className="dashboard-toggle d-t-summary toggle-active"
                onClick={toggleBar}
              >
                Summary
              </div>
            </div>

            <div id="table-summary" className="table-holder">
              <h2 className="h2-title-table">
                Hours from {userInfo?.weekOne?.start} to {userInfo?.weekOne?.end}
              </h2>
              <Table
                columns={HEADER}
                data={summEventsWeekOne}
                renderType="Summary"
              />

              <h2 className="h2-title-table">
                Hours from {userInfo?.weekTwo?.start} to {userInfo?.weekTwo?.end}
              </h2>
              <Table
                columns={HEADER}
                data={summEventsWeekTwo}
                renderType="Summary"
              />
            </div>

            <div
              ref={contentRef}
              id="table-details"
              className="print-area table-holder table-inactive"
            >
              <div className="print-header">
                <p className="title-header">
                  Summary of Hours - UrShiftmate.com
                </p>

                <table className="header-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date Range</th>
                      <th>Expected Amount</th>
                      <th>Paydate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{userInfo.username}</td>
                      <td>
                        {userInfo?.weekOne?.start} - {userInfo?.weekTwo?.end}
                      </td>
                      <td>${paycheckSummary.taxedPaycheck}</td>
                      <td>{userInfo.checkDay}</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  *The paycheck amounts shown are estimates based on the user’s
                  input and personal calendar data. <br />
                  This tool is intended for personal reference only and does not
                  reflect official payroll records or guarantees of actual
                  compensation.
                </p>
              </div>

              <h2 className="h2-title-table">
                Hours from {userInfo?.weekOne?.start} to {userInfo?.weekOne?.end}
              </h2>
              <Table
                columns={HEADERDETAILED}
                data={detEventsWeekOne}
                renderType="Detailed"
              />

              <h2 className="h2-title-table">
                Hours from {userInfo?.weekTwo?.start} to {userInfo?.weekTwo?.end}
              </h2>
              <Table
                columns={HEADERDETAILED}
                data={detEventsWeekTwo}
                renderType="Detailed"
              />
            </div>
          </div>
        </div>)}
    </div>
  );
};

export default Dashboard;
