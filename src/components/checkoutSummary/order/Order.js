import React from "react";
import './Order.css'
const order=(props)=>{
    return(
      <div className="orderContainer">
          <h3>Please enter some information for order placement</h3>
          <form className="orderForm">
              <input type="text" placeholder="Name"/>
          </form>
      </div>
    );
};

export default order;