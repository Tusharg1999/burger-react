import React from "react";
import Burger from '../burger/Burger'
import './CheckoutSummary.css'
import Button from "../ui/button/Button";
import Order from "./order/Order";
import Modal from "../ui/modal/Modal"
const checkoutSummary = props => {

    return (
        <div className="checkoutSummaryContainer">
            <h1>Order Your Tasty Burger Now.</h1>
            <h5>Buy Just For : {props.Total}$</h5 >
            <Burger ingredients={props.ingredients} />
            <div className="ButtonDiv">
                <Button clicked={props.CancelOrder} btnType="Danger">Cancel</Button>
                <Button clicked={props.OrderNow} >OrderNow</Button>
            </div>
            <Modal show={props.Show}>
                <Order />
            </Modal>
        </div>
    )
}

export default checkoutSummary;