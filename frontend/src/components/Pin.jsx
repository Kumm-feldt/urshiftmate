import React from "react"
import Keypad from "./Keypad"


const Pin = () =>{
    return(
        <>
            <div className="pin-wrapper">
                <div className="pin-div">
                    <div className="input-div">
                    <Keypad onKeyPress={(value) => console.log("Pressed:", value)} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pin;