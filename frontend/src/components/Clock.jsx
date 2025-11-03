import React from "react"
import "./Clock.css"
import Pin from "./Pin"
import DemoSchedule from "./DemoSchedule"
const Clock = () =>{
    return(
        <>
        <div className="clock-wrapper">
            <div className="clock-in-div">
                <div className="clock-in-circle">
                    CLOCK IN
                </div>
            </div>

            <div className="clock-out-div">
                <div className="clock-out-circle">
                    CLOCK OUT
                </div>
            </div>


        </div>
        {/*
         <Pin></Pin>
        <div className="mycalendar-wrapper">
            <div className="mycalendar-div">    <MyCalendar></MyCalendar></div>
        </div>
        */}
       
        </>

    )
}

export default Clock;