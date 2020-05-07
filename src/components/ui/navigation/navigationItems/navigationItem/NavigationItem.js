import React from "react";
import './NavigationItem.css'
import { Link } from 'react-router-dom'
const navigationItem = (props) => {
    return (
        <li><Link to={props.Link}>{props.children}</Link></li>
    )
};
export default navigationItem