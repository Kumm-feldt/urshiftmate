import React from "react";
import "./Summary.css";
import  BarChart  from "./BarChart";


const Summary = ({date, moneyAmount, preTaxMoneyAmount, prev})=>{
    return(

        <div className="summary-div">
            <div className="summary-div-left">
                <h5 className="summary-h5">You will receive aproximately</h5>
                <p className="summary-money-amount">${moneyAmount}</p>
                <p className="summary-pretax-money-amount">${preTaxMoneyAmount} (before taxes)</p>
                <p className="summary-date">on {date}</p>
            </div>
            <div className="summary-chart-container">
                <BarChart prev={prev} curr={moneyAmount}></BarChart>
            </div>
            
        </div>

    )
}

export default Summary;