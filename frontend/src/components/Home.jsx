import Header from "./Header";
import "./Home.css"
import calendar from "../assets/calendar.png"
import { Link } from "react-router-dom";


const Home = () =>{
    return(
        <>
        <Header></Header>
        <div className="main-container">
            <div className="blue-container">
                <div className="hero-container">
                    <h1 class="hero-title">Track Your Hours. Simplify Your Payroll.</h1>
                    <p class="hero-subtitle">
                    Seamlessly connect your Google Calendar to calculate total work hours and generate accurate paycheck totals — all in one place.
                    </p>
                    
                    <div className="hero-button-start">
                        <Link to="/login">
                            <button className="button-54" role="button">Get Started</button>
                        </Link>
                    </div>

                </div>
            </div>
            <img  className="cal-image" src={calendar} alt="" />

     
            </div>
            <div className="instructions-wrapper">
                <div className="list-div">
                    <ul>
                        <li className="item">
                               <h2 className="headline">Number One</h2>
                             <span>Add an Event with the Keyword "Shift" in your Google Calendar ie. "Shift [workplace]" </span>
                        </li>
                        <li className="item">
                             <h2 className="headline">Number Two</h2>
                             <span>Sign In/Login to UrShiftMate with your google account.</span>
                        </li>
                        <li className="item">
                        <h2 className="headline">Number Three</h2>
                             <span>Add your workplace name and hourly wage to our database</span>
                        </li>
                    </ul>
                    
                </div>
            </div>  
        </>
    )
}

export default Home;