import React, { useState } from "react";

function Toggle() {
  const [isOn, SetIsOn] = useState(false);
  function handleClick() {
    SetIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "blue"
  return <button style={{ background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
