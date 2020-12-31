import React from 'react';

import './Button.css';

const button = (props) => (
    <button
        className="Button"
        style={{color:props.btnType==="Danger"?"red":"green"}}
        onClick={props.clicked}>{props.children}</button>
);

export default button;