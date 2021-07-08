import React from "react";
import LOGO from "../homePage/mainlogo.png";
// import "../../index.css";
import Dropdown from "../Dropdown/dropdown";
import "./navbar.css";

const testDropdown = {
  title: "Test",
  options: [
    {
      name: "First Option",
      onPress: function(){
        console.log("first option pressed");
      },
    },
    {
      name: "Second Option",
      onPress: () => {
        console.log("second option pressed");
      },
    },
    {
      name: "Third Option",
      onPress: () => {
        console.log("third option pressed");
      },
    },
  ],
};

export default function Navbar() {
  return (
    <nav className="navigation-bar">
      <div className="Logo-container">
        <img src={LOGO} alt="PucchPucch" className="Logo" width='100px' height='auto'/>
      </div>
      <div className="nav-options">
        <a className="home">Home</a>
        <div className="dropdown-home">
          <Dropdown menu={testDropdown} color='aliceblue'/>
        </div>
        <div className="dropdown-home">
          <Dropdown menu={testDropdown} color='aliceblue'/>
        </div>
      </div>
    </nav>
  );
}
