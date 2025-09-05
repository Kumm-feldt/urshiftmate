import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const SidebarChildren = ({elements, icons, routes, onLinkClick})=>{
    return elements.map((element, index)=>(
        <li key={index}>
            {icons[index]}
            <Link to={routes[index]} onClick={onLinkClick}>
                <span className="ms-3">{element}</span>
            </Link>
        </li>
    ))
}


 export default SidebarChildren;