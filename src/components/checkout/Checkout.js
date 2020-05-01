import React, {Component} from "react";
import CheckoutSummary from "../../containers/checkoutSummary/CheckoutSummary";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myIngredients: {
                cheese: 1,
                salad: 0,
                bacon: 2,
                meat: 0
            },
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.myIngredients}/>
            </div>
        )
    }
}

export default Checkout;