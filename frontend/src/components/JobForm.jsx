import React from "react";


const JobForm = ()=>{
    <form className="jobform-form" action="" method="POST">
        <div className="jobform-div-container">
            <label htmlFor="workplace">Workplace</label>
            <input className="jobform-input" name="workplace" type="text" />
            <label htmlFor="workplace">Wage</label>
            <input className="jobform-input"  type="number" />
            <button className = "jobform-button" type="submit" />
        </div>
    </form>
}

export default  JobForm;