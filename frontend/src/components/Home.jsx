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
        </>
    )
}

export default Home;