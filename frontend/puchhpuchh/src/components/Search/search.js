import React , { useState } from 'react';
import "./search.css";
import SearchIcon from '@material-ui/icons/Search';
export default function Search(props) {
    return (
        <div className="search-container">
            <form className="form_search">
                <SearchIcon style={{position: "absolute" , color: props.color }}/>
                <input type="search" placeholder={props.title} className="input_search"  style= {{marginTop: props.margin, 
                    width: props.width,
                    position: "relative",
                    paddingLeft: "25px"
                    }} />
            </form>
        </div>
    )
}
