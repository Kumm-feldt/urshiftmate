import React from "react";
import { useEffect, useState } from "react";
import * as api from "../api.js"
import "./CalendarList.css"


export default function CalendarElement({calendarData}){
    const [active, setActive] = useState(false)
    const [calendar, setCalendar] = useState(null)
    const [primary, setPrimary] = useState(false)
    const [calendarId, setCalendarId] = useState(null)



    // function to activate or not the calendar
    async function toggleCalendar(){
        await api.toggleCalendar(calendarId, calendar, active, primary);
        setActive(!active)
    }

    useEffect(()=>{
        setActive(calendarData.activeCalendar)
        setCalendar(calendarData.calendarSummary)
        setPrimary(calendarData.primary)
        setCalendarId(calendarData.calendarId)
    },[])


    return(
        <>
             <li onClick={toggleCalendar}>
                    <div className={active? "cal-li active-cal":"cal-li"}>
                    {calendarData.calendarSummary}
                    </div>
                </li>
        </>
    )

}