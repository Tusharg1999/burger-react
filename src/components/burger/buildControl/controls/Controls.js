import React from "react";
import './Controls.css'
const controls=(props)=>{
    return(
      <div className="controlContainer">
          <div>{props.label}</div>
          <div>
              <button onClick={props.addIngredient}>+</button>
              <button onClick={props.removeIngredient}>-</button>
          </div>
      </div>
    )
};

export default controls;