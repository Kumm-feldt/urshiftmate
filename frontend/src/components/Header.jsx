import racoon from "../assets/ico.png" 
import { Link } from "react-router-dom";

const Header = ()=>{
return(
    <div className="header-flex">
        <div className="image-container-flex">
            <img src={racoon} alt="logo" />
            <h3 className="header-title">UrshiftMate</h3>
        </div>
        <div className="flex-container">
            <div className="left-h-container container-policy">
                <a href="/policy">Policy</a>
            </div>
            <div className="left-h-container">
                <Link to="/login">

                <button className="button-54" role="button">Login</button>
                </Link>
            </div>

        </div>
        
    </div>
)
}

export default Header;