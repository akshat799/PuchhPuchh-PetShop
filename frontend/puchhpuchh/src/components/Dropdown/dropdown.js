import React from "react";
import "./dropdown.css";

function Dropdown(props) {
  return (
    <div className="dropdown-container">
      <div className="option-1">
        <button style={{ color: props.color }}>{props.menu.title}</button>
        <div className="list">
          {props.menu.options.map((option) => {
            return (
              <p className="menu-options" onClick={option.onPress}>
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
