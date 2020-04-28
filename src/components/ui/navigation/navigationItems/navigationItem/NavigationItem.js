import React from "react";
import './NavigationItem.css'
const navigationItem=(props)=>{
    return(
        <li><a href="/">{props.children}</a></li>
    )
};
export default navigationItem