import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from "react";
import {Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./dropdown.css";


function Dropdown_account(props) {

    let history = useHistory();
    let dispatch = useDispatch();

    const menu = {
            options: [
                {
                    name: "Profile",
                    onPress: () => {
                        console.log("It's working");
                    },
                },
                {
                    name: "Settings",
                    onPress: () => {
                        console.log("Settings pressed");
                    },
                },
                {
                    name: "Log Out",
                    onPress: () =>{

                        dispatch({type: 'LOGOUT'});

                        history.push('/');

                    },
                },
            ],
        };

    return (
        <div className="dropdown-container">
            <div className="option-1">
                <button style={{ color: "aliceblue" }}>
                    <div className="account-wrap">
                        <AccountCircleIcon style={{ marginLeft: "90px" , fontSize: 30 , marginBottom: "5px" }}/>
                        <Typography variant="h6" style={{color: "aliceblue"}}>{props.name}</Typography> 
                    </div>
                </button>
            <div className="list">
                {menu.options.map((option) => {
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

export default Dropdown_account;