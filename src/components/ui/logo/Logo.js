import React from "react";
import Logo from '../../../assets/logo/burger-logo.png'
import './Logo.css';
const logo=(props)=>{
    return(
        <div className="logoContainer">
            <img src={Logo} alt="BurgerApp"/>
        </div>
    )
};

export default logo;