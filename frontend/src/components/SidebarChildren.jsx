import React from "react";

const SidebarChildren = ({elements, icons})=>{

    
      return  elements.map((element, index)=>(
            <li key={index}>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                {icons[index]}
                <span className="ms-3">{element}</span>
                </a>
            </li>
        ))
       
    
   

}

 export default SidebarChildren;