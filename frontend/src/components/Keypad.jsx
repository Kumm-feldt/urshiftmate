import React from "react";

const Keypad = ({ onKeyPress }) => {
  const keys = ["1","2","3","4","5","6","7","8","9","0","Delete","Enter"];

  return ( 
  <div> 
    <input className="number-input" type="number" />

    <div className="input-div grid grid-cols-3 gap-2 w-40">

      {keys.map((key) => (
        <button
          key={key}
          className="key"
          onClick={() => onKeyPress(key)}
        >
          {key}
        </button>
      ))}
    </div>
   </div>

  );
};

export default Keypad;
