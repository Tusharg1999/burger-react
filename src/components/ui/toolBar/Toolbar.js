import React from "react";
import './Toolbar.css'
import Logo from "../logo/Logo";
import NavigationItems from "../navigation/navigationItems/NavigationItems";
import { Link } from "react-router-dom";
const toolbar = (props) => {
    return (
        <div className="toolbarContainer">
            <Link to="/"><Logo /></Link>
            <div className="listContainer">
                <NavigationItems />
            </div>
        </div>
    )
}
export default toolbar