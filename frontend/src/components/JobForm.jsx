import React from "react";
import { useState } from "react";
import "./JobForm.css"

const JobForm = ()=>{
    const[workplace, setWorkplace] = useState("");
    const[wage, setWage] = useState(0);
    const[collegeJob, setCollegeJob] = useState(false);


    function handleWork(evt){
        setWorkplace(evt.target.value);
    }
    function handleWage(evt){
        setWage(evt.target.value);
    }
    function handleCollege(evt){
        setCollegeJob(evt.target.value);
    }


return(
    <div className="jobform-div-container">
        <form className="jobform-form" action="" method="POST">
            
                    <label >Workplace</label>
                    <input className="jobform-input" name="workplace" type="text" value={workplace} onChange={handleWork}/>
                    <label>Wage</label>
                    <input className="jobform-input"  type="number" value={wage} onChange={handleWage}/>
                    <label>Is College Job?</label>
                    <input type="checkbox" value={collegeJob} onChange={handleCollege} />

                    <button className = "jobform-button" type="submit" />
        
            </form>
    </div>
)
    
}

export default  JobForm;