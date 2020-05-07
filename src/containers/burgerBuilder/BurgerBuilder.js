import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/Burger'
import BuildControl from '../../components/burger/buildControl/BuildControl'
import Modal from '../../components/ui/modal/Modal'
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";
import { connect } from 'react-redux';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../../store/actions/actions'
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasing: false
        }
    }

    componentDidMount() {
        console.log("here")
        console.log(this.props);
    }
    updatePurchasable = () => {
        if (this.props.totalPrice > 4) {
            return true;
        }
        else {
            return false
        }
    };
    purchasingHandler = () => {
        this.setState({ purchasing: true })
    };
    purchasingCancelHandler = () => {
        this.setState({ purchasing: false })
    };
    purchasingContinueHandler = () => {
        let queryParams = [];
        for (let i in this.props.ingredient) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredient));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    };

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary
                        total={this.props.totalPrice}
                        PurchaseContinue={this.purchasingContinueHandler}
                        PurchaseCancel={this.purchasingCancelHandler}
                        price={this.props.totalPrice} ingredientsList={this.props.myIngredients} />
                </Modal>
                <Burger ingredients={this.props.myIngredients} />
                <BuildControl
                    Purchasing={this.purchasingHandler}
                    purchasable={this.updatePurchasable()} totalPrice={this.props.totalPrice}
                    addIngredient={this.props.addIngredient} removeIngredient={this.props.removeIngredient} />
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        myIngredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ing) =>
            dispatch({ type: ADD_INGREDIENT, ingredient: ing }),
        removeIngredient: (ing) =>
            dispatch({ type: REMOVE_INGREDIENT, ingredient: ing })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);