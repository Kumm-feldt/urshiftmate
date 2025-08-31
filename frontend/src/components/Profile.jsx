import React from "react";
import Sidebar from "./Sidebar";

export default function Profile(){
    return(
           <div>
            <Sidebar></Sidebar> 
    <div className="flex-1 flex flex-col items-center justify-center h-screen text-center p-6">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpiNTI3djE3dnc3dmdhMTd6cjRqcnV4bTMyOHJyeWtsN3FraWw0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbAFrrDVGAvZu/giphy.gif"
          alt="Working on it"
          className="w-64 h-64 mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">We’re still working on this page!</h1>
        <p className="text-lg text-gray-600">
          Check back soon — new features are on the way 🚀
        </p>
      </div>
           </div>
    )
}