import React from "react";
import './NavigationItems.css'
import NavigationItem from "./navigationItem/NavigationItem";
const navigationItems=(props)=>{
    return(
            <ul className="list">
                <NavigationItem>Home</NavigationItem>
                <NavigationItem>OrderNow</NavigationItem>
            </ul>
    )
};
export default navigationItems;