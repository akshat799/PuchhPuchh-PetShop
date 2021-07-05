import React, { useState } from "react";
import "./dropdown.css";

function Dropdown(props) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    let currVal = !selected;
    setSelected(currVal);
  };

  console.log("PRINTING PROPS:", props.menu.title);
  return (
    /*    <div className="custom-dropdown">
      <div className="main-container">
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
    </div> */
    <div className="dropdown-container">
      <div className="option-1">
        <button>{props.menu.title}</button>
        <div className="list">
          {/* <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span> */}
          {props.menu.options.map((option) => {
            return <p onClick={option.onPress}>{option.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
