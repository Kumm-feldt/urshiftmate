import MyCalendar from "./ScheduleSetup";
import "./ScheduleSetup.css"


const DemoSchedule = ()=>{
  return(
    <div className="scheduleSetupContainer">
      <button className="uploadCalendarButton">Upload Calendar</button>
      <div className="scheduleWrapper">
          <MyCalendar></MyCalendar>
        </div>
    </div>
  
  );
}



export default DemoSchedule;
