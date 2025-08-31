import React from "react";
import { useEffect, useState } from "react";
import * as api from "../api.js"
import "./CalendarList.css"
import CalendarElement from "./CalendarElement.jsx";


function render (allCalendars){

    let calendarList = [];
    let activeCalList = [];


    for(let i = 0; i < allCalendars.length; i++){
      
        calendarList.unshift( 
                <CalendarElement key={`${i}-cal`}calendarData={allCalendars[i]}></CalendarElement>
                )
        
    }

    calendarList.unshift(...activeCalList)
    return calendarList;


}




function CalendarList ({calendarList}){
    let calendarListOne;
    let calendarListTwo;
    let longCalendars = false;


    if(!calendarList || calendarList.length == 0){
        return <p>No calendars</p>
    }

    if(calendarList.length > 5){
        const middleIndex = Math.ceil(calendarList.length / 2)
        calendarListOne = calendarList.slice(0, middleIndex)
        calendarListTwo = calendarList.slice(middleIndex)
        longCalendars = true;
    }

    
    if(longCalendars){
        let listOne = render(calendarListOne);
        let listTwo = render(calendarListTwo)
         return(
        <>      
        <h2 className="h2-title">Google Calendar</h2> 
        <div className="flex-row-calendars">
         <ul>
            {listOne}
        </ul>
         <ul>
            {listTwo}
        </ul>
        </div>
        </>
    )
    }

    let list = render(calendarList)

    return(
        <>      
        <h2 className="h2-title">Google Calendar</h2> 
         <ul>
            {list}
        </ul>
        </>

    )
}

export default CalendarList;