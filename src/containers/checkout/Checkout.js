import React, {Component} from "react";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myIngredients: {},
        }
    }

    componentDidMount() {
        console.log(this.props);
        const search = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        for (let param of search.entries()) {
            ingredients[param[0]] = +param[1]
        }
        this.setState({myIngredients:ingredients})
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