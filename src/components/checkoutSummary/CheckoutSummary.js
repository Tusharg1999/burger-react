import React,{Component} from "react";
import Burger from '../burger/Burger'
import './CheckoutSummary.css'
import Button from "../ui/button/Button";
import Order from "./order/Order";
class CheckoutSummary extends Component{
    render() {
        return(
            <div className="checkoutSummaryContainer">
                <h1>Tasty Burger Below---</h1>
                <Burger ingredients={this.props.ingredients}/>
               <div className="ButtonDiv">
                   <Button btnType="Danger">Cancel</Button>
                   <Button>OrderNow</Button>
               </div>
                <Order/>
            </div>
        )
    }
}
export default CheckoutSummary;