import React from "react";
import './NavigationItems.css'
import NavigationItem from "./navigationItem/NavigationItem";
const navigationItems = (props) => {
    return (
        <ul className="list">
            <NavigationItem Link="/">Home</NavigationItem>
            <NavigationItem Link="/checkout">OrderNow</NavigationItem>
        </ul>
    )
};
export default navigationItems;