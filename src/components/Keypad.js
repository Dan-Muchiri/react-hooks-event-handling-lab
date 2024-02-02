// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handlePassword() {
    console.log('Entering password...');
  }

  return (
    <div>
      <input onChange={handlePassword} type="password" placeholder="Enter password" />
      <button>ME</button>
    </div>
  );
}

export default Keypad;
