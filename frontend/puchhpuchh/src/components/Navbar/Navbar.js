import React from "react";
import LOGO from "../homePage/mainlogo.png";
// import "../../index.css";
import Dropdown from "../Dropdown/dropdown";
import "./navbar.css";
import Search from "../../Search/search";
import product_category, { filter } from "../Dropdown/filtering_options";
import account from "../Dropdown/account_option";
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';



const testDropdown = {
  title: "Appointment",
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
          <Dropdown menu={product_category} color='aliceblue'/>
        </div>
        <div className="dropdown-home">
          <Dropdown menu={testDropdown} color='aliceblue'/>
        </div>
        <div className="search-home">
          <Search title="Search..." color="aliceblue" font="bold" background="aliceblue" margin="-30px" width = "250px"/>
        </div>
        <div className="dropdown-home_2">
          <FilterListIcon style={{color: "aliceblue" , marginTop:"5px"}} />
          <Dropdown menu={filter} color='aliceblue'/>
        </div>
        <div className="dropdown-home_2">
          <Dropdown menu={account} color='aliceblue'/>
        </div>
      </div>
    </nav>
  );
}
