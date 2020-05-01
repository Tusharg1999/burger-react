import React,{Component} from "react";
import Burger from '../../components/burger/Burger'
class CheckoutSummary extends Component{
    render() {
        return(
            <div className="checkoutSummary">
                <h1>Tasty Burger Below---</h1>
                <Burger ingredients={this.props.ingredients}/>
            </div>
        )
    }
}
export default CheckoutSummary;