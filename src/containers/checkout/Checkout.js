import React, { Component } from "react";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";
import { connect } from 'react-redux'
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }~
    }
    orderNowHandler = () => {
        this.setState({
            show: true
        })
    }
    cancelOrderHandler = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <CheckoutSummary Show={this.state.show} OrderNow={this.orderNowHandler} CancelOrder={this.cancelOrderHandler}
                    Total={this.props.totalPrice} ingredients={this.props.myIngredients} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        myIngredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);