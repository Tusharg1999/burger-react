import React from "react";
import './Controls.css'
const controls=(props)=>{
    return(
      <div className="controlContainer">
          <div><p>{props.label}</p></div>
          <div>
              <button onClick={props.addIngredient}><p>+</p></button>
              <button onClick={props.removeIngredient}><p>-</p></button>
          </div>
      </div>
    )
};

export default controls;