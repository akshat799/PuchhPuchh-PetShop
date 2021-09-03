import React, { useEffect, useState } from "react";
import "./dropdown.css";

function Dropdown(props) {

  const [titles,setTitles] = useState(props.menu.title);

  const handleChange = (name) => {
    setTitles(name);
  }

  
  return (
    <div className="dropdown-container">
      <div className="option-1">
        <button style={{ color: props.color }}>{titles}</button>
        <div className="list">
          {props.menu.options.map((option) => {
            return (
              <p className="menu-options" onClick={() =>{handleChange(option.name)}}>
                {option.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
