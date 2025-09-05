import React from "react";
import { useState } from "react";
import "./JobForm.css"

const JobForm = ({onSubmitHandler}) =>{
    const[workplace, setWorkplace] = useState("");
    const[wage, setWage] = useState("");
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

    async function submitHandler(evt){
        evt.preventDefault();
        if(onSubmitHandler){
            try{
                onSubmitHandler(workplace, wage)
                setWage('');
                setWorkplace('');
            }catch(err){
                console.log("ERROR", err)
            }
        }
    }
    


return(
    <div className="jobform-div-container">
      
        <form className="jobform-form" action="" method="POST" onSubmit={submitHandler}>
            <div className="title-wrapper">
            <h2 className="h2-title">Add a job</h2>
            </div>
            <div className="div-wrapper">
                    <div className="div-form i-workplace">
                        <input className="jobform-input " name="workplace" type="text" value={workplace} onChange={handleWork}/>
               
                    </div>
                    <div className="div-form i-wage">
                        <input className="jobform-input "  type="number" value={wage} onChange={handleWage} placeholder="$"/>
                    
                    </div>
            <button className="jobform-button" type="submit">ADD</button>
                    
            </div>
        
            </form>
    </div>
)
    
}

export default  JobForm;