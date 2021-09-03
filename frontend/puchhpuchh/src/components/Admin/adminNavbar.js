import React , { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import LOGO from "../homePage/mainlogo.png"
import './adminNavbar.css';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';

export default function AdminNavbar() {
    const [click , setClick] = useState(false);

    let dispatch = useDispatch();
    let history = useHistory();

    const handleClick = () =>{
        setClick((prevClick) => !prevClick);
    };

    const logOut = () => {
        dispatch({type: 'LOGOUT'});
        history.push('/auth');
    }

    return (
        <div>
            <nav className="AdminNavbarItems">
                <h1 className="Adminnavbar-logo" >Puchh Puchh<img src={LOGO} className="admin-logo"/></h1>
                <div className="menu-icon" onClick={handleClick}>
                    {
                        click ? (
                            <IconButton aria-label="triplebar">
                                <CloseIcon style={{color:'aliceblue'}} />
                            </IconButton>
                        ) : (
                            <IconButton aria-label="iconx">
                                <MenuIcon style={{color:'aliceblue'}} />
                            </IconButton>
                        )
                    }
                </div>
                <ul className={click ? 'adminnav-menu active' : 'adminnav-menu'}>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index} style={{padding:"10px"}}>
                                { (index === 4) ? (
                                    <Link onClick ={logOut} className={item.cName}>
                                        {item.title}
                                    </Link>
                                    ) : (
                                        <Link to={item.url} className={item.cName} >
                                            {item.title}
                                        </Link>
                                    )
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
