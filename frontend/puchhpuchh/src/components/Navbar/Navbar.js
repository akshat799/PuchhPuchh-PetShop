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
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    //     <div className="container-fluid">
    //       {/* <div className="container"> */}
    //       <a className="navbar-brand" href="#">
    //         <img src={LOGO} alt="PucchPucch" className="logo" />
    //       </a>
    //       {/* </div> */}
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <Dropdown />
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               id="navbarDropdown"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Dropdown
    //             </a>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Action
    //                 </a>
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Another action
    //                 </a>
    //               </li>
    //               <li>
    //                 <hr className="dropdown-divider" />
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Something else here
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //         <form className="d-flex" id="search">
    //           <input
    //             className="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           ></input>
    //           <button className="btn btn-outline-dark" type="submit">
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav className="navigation-bar">
      <div className="Logo-container">
        <img src={LOGO} alt="PucchPucch" className="Logo" />
      </div>
      <div className="nav-options">
        <a className="home">Home</a>
        <div className="dropdown-home">
          <Dropdown menu={testDropdown} />
        </div>
        {/* <div className="dropdown-home">
          <Dropdown />
        </div> */}
      </div>
    </nav>
  );
}
