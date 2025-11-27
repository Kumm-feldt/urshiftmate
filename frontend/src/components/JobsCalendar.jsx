import React, { useEffect, useState } from "react";
import Table from  "./Table"
import "./Sidebar"

import Sidebar from "./Sidebar";
import Summary from "./Summary"

import * as api from "../api.js"
import JobForm from "./JobForm.jsx";

import "./JobsCalendar.css"
import SmallCalendar from "./SmallCalendar.jsx";
import CalendarList from "./CalendarList.jsx";




const JobSection = () =>{
   const header = ["Worplace", "Wage", ""]

    const [jobsData, setJobsData] = useState([]);
    const [calendarList, setCalendar] =useState([]);

      useEffect(
        () => {

        api.fetchWorkplaces()
        .then(setJobsData)
        
        api.fetchCalendars()
        .then(setCalendar)

        
      }, []);


   async function createJob(workplace, hourlyRate){
    if(workplace && hourlyRate){
        try{
            await api.insertWorkplace(workplace, hourlyRate)
            // Refetch all jobs to get the complete data
            const updatedJobs = await api.fetchWorkplaces();
            setJobsData(updatedJobs);
        }catch(err){
            console.log("ERROR", err)
        }
    }
}
        async function deleteJob(workplaceId){
            if(workplaceId){
                try{
                    await api.deleteWorkplace(workplaceId);
  
                    setJobsData(prevJobs => prevJobs.filter(job => job.workplaceId !== workplaceId));
                }catch(err){
                    console.log("ERROR: ", err)
                }
            }
        }

    return(
        <div className="flex-row">
            <div className="grid-layout">

                <div className="grid-first-col sidebar">
                    <Sidebar></Sidebar>

                </div>




                <div className="grid-header">
                    <h1 className="h1-title-table ">You have the control to decide your future. </h1>
                </div>




                <div className="grid-second-col main-1">

                    <div className="flex-col-wrapper">
                        <div className="dashboard-div-container">
                            <JobForm onSubmitHandler={createJob}></JobForm>
                        </div>
                    </div>
                 </div>
                <div className="table-container grid-jobs" >
                        <h2 className="h2-title-t">Current Jobs</h2>
                        <Table columns={header} data={jobsData} renderType={"Jobs"} onSubmitHandler={deleteJob}></Table>
                </div>
                  <div className="dashboard-div-container main-2">
                    <h2 className="h2-title-t">Available Calendars</h2>
                    <CalendarList calendarList={calendarList.calendars}></CalendarList>
                </div> 
             
               
            </div>
        </div>
    )
}

export default JobSection;