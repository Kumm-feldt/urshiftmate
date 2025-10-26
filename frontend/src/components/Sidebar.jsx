import React, { useState } from "react"
import SidebarChildren from "./SidebarChildren"
import "./Sidebar.css"
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import JobsCalendar from "./JobsCalendar";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom"; // Make sure to import Link
import racoon from "../assets/ico2.png" 


const sidebarElements = ["Dashboard", "Settings", "Jobs & Calendar", "Instructions"];

const icons = [
<i className="bi bi-speedometer2"></i>,
<i className="bi bi-gear"></i>,
<i className="bi bi-calendar-week"></i> ,
<i class="bi bi-info-circle"></i>
];

const routes = ["/dashboard", "/settings", "/jobs",  "/instructions","/profile"];

const bottomRoutes = [ "/profile"];
const bottomIcons = [<i className="bi bi-person-circle"></i>, <i className="bi bi-box-arrow-right"></i>]
const bottomSideElements = [ "Profile"];

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
});

const formattedDate = formatter.format(date);

const Sidebar = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return(
        <div>
            {/* Mobile burger button */}
            <button 
                onClick={toggleSidebar}
                type="button" 
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {/* Mobile overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <aside 
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 sidebar-div sidebar-wrapper">
                    <div className="icons-top">
                            <Link to="/">
                                <div className="logo-div" >
                                    <h2 className="h2-title-sidebar bebas-neue-regular ">U R S H I F T M A T E</h2>
                                    <img width="48px" height="48px" src={racoon} alt="log" className="logo-racoon-sidebar" />
                                </div>
                            </Link>


                        <h2 className="h2-title-sidebar">{formattedDate}</h2>
                       
                        <ul className="space-y-2 font-medium icons-top-ul">
                            <SidebarChildren 
                                elements={sidebarElements} 
                                icons={icons} 
                                routes={routes}
                                onLinkClick={closeSidebar}
                            />
                        </ul>
                    </div>

                    <div className="icons-bottom">
                        <ul className="space-y-2 font-medium icons-bottom-ul">
                            <SidebarChildren 
                                elements={bottomSideElements} 
                                icons={bottomIcons} 
                                routes={bottomRoutes}
                                onLinkClick={closeSidebar}
                            />
                            <LogoutButton />
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
}

 export default Sidebar;