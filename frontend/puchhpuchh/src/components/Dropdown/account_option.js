import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from "react";


const account = {
    title: <AccountCircleIcon style={{ marginLeft: "90px" , fontSize: 30 , marginBottom: "5px" }}/>,
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
    ],
};

export default account;