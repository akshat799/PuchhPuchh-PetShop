import React, { useState } from "react";
import "./dropdown.css";

function Dropdown() {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    let currVal = !selected;
    setSelected(currVal);
  };
  
  return (
    <div className="custom-dropdown">
      <div className="container">
        <p className="parent" onClick={toggleSelected}>
          Dropdown Here
        </p>
        <div
          className="dropdown-elements"
          style={{ visibility: selected ? "visible" : "hidden" }}
        >
          <p>First</p>
          <p>Second</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
