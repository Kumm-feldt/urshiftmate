import Header from "./Header";
import "./Home.css"
import calendar from "../assets/calendar.png"
import { Link } from "react-router-dom";
import stepOne from "../assets/step1.png"
import stepThree from "../assets/step3.png"
import stepFour from "../assets/step4.png"




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
                            <h2 className="headline">Step One</h2>
                            <span>
                                Add an event to your Google Calendar with the keyword <b>"Shift"</b>.  
                                Example: <i>Shift Library</i>.
                            </span>
                            <img className='step-img' src={stepOne} alt="" />
                            </li>
                            <li className="item">
                            <h2 className="headline">Step Two</h2>
                            <span>
                                Sign in to UrShiftMate using your Google account.
                            </span>

                            </li>
                            <li className="item">
                            <h2 className="headline">Step Three</h2>
                            <span>
                                In <b>Jobs & Calendar</b>, add your workplace name and hourly wage.
                            </span>
                            <img className='step-img' src={stepThree} alt="" />

                            </li>
                            <li className="item">
                            <h2 className="headline">Step Four</h2>
                            <span>
                                Go to your <b>Dashboard</b> to view your expected paycheck.
                            </span>
                            <img className='step-img' src={stepFour} alt="" />

                            </li>

                    </ul>
                    
                </div>
            </div>  
        </>
    )
}

export default Home;