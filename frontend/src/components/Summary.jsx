import React from "react";
import "./Summary.css"
const Summary = ({date, moneyAmount})=>{
    return(

        <div className="summary-div">
            <h5 className="summary-h5">You will receive aproximately</h5>
            <p className="summary-money-amount">$.{moneyAmount}</p>
            <p className="summary-date">on {date}</p>
        </div>

    )
}

export default Summary;