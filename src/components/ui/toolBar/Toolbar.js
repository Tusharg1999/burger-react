import React from "react";
import './Toolbar.css'
import Logo from "../logo/Logo";
import NavigationItems from "../navigation/navigationItems/NavigationItems";
const toolbar=(props)=>{
    return(
        <div className="toolbarContainer">
            <h1>Menu</h1>
            <Logo/>
            <div className="listContainer">
                <NavigationItems/>
            </div>
        </div>
    )
}
export default toolbar