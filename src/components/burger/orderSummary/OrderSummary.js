import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../ui/button/Button";

const orderSummary=(props)=>{
    const summary=Object.keys(props.ingredientsList)
        .map((key)=>{
            return <li key={key}>{key} : {props.ingredientsList[key]}</li>
        });
    return(
      <Aux>
          <h3>Your Order : {props.total}$</h3>
          <p>A delicious burger with the following ingredients:</p>
          <ul>
              {summary}
          </ul>
          <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
          <p>Continue to Checkout?</p>
          <Button btnType="Danger" clicked={props.PurchaseCancel}>CANCEL</Button>
          <Button  clicked={props.PurchaseContinue}>CONTINUE</Button>
      </Aux>
    )
};
export default orderSummary;