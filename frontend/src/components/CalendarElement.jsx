import React from "react";
import { useEffect, useState } from "react";
import * as api from "../api.js"
import "./CalendarList.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notifyAdd(objectAdded) {
    toast.success(`${objectAdded} added correctly.`);
}

function notifyErrorAdded(objectAdded) {
    toast.error(`ERROR: ${objectAdded} not added correctly.`);
}

function notifyDeleted(objectAdded) {
    toast.error(`${objectAdded} deleted correctly.`);
}


export default function CalendarElement({ calendarData}){
    const [active, setActive] = useState(false)
    const [calendar, setCalendar] = useState(null)
    const [primary, setPrimary] = useState(false)
    const [calendarId, setCalendarId] = useState(null)
    // function to activate or not the calendar
    async function handleToggleCalendar(){
        await api.toggleCalendar(calendarId, calendar, active, primary);
        if(active){
            notifyDeleted("Calendar")
        }else{
            notifyAdd("Calendar")
        }
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
        
             <li onClick={handleToggleCalendar}>
                    <div className={active? "cal-li active-cal":"cal-li"}>
                    {calendarData.calendarSummary}
                    </div>
                </li>
        </>
    )

}