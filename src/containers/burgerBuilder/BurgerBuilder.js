import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/Burger'
import BuildControl from '../../components/burger/buildControl/BuildControl'
import Modal from '../../components/ui/modal/Modal'
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";

const price = {
    cheese: 2,
    meat: 4,
    bacon: 1,
    salad: .8
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myIngredients: {
                cheese: 0,
                salad: 0,
                bacon: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    componentDidMount() {
        console.log("here")
        console.log(this.props);
    }

    addItemHandler = (type) => {
        const chooseTypeValue = this.state.myIngredients[type];
        const updateChooseTypeValue = chooseTypeValue + 1;
        const allIngredients = {
            ...this.state.myIngredients
        };
        allIngredients[type] = updateChooseTypeValue;
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice + price[type]
        this.setState({
            myIngredients: allIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(allIngredients);
    };
    removeItemHandler = (type) => {
        const chooseTypeValue = this.state.myIngredients[type];
        if (chooseTypeValue <= 0) {
            return;
        }
        const updateChooseTypeValue = chooseTypeValue - 1;
        const allIngredients = {
            ...this.state.myIngredients
        };
        allIngredients[type] = updateChooseTypeValue;
        const currentPrice = this.state.totalPrice;
        if (currentPrice === 4) {
            return;
        }
        const newPrice = currentPrice - price[type];
        this.setState({
            myIngredients: allIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(allIngredients);
    };
    updatePurchasable = (updatedIngredients) => {
        console.log(updatedIngredients)
        let sum = Object.keys(updatedIngredients).map((key) => {
            return updatedIngredients[key]
        })
            .reduce((x, y) => {
                return x + y;
            }, 0);
        console.log(sum);
        this.setState({purchasable: sum > 0});
    };
    purchasingHandler = () => {
        this.setState({purchasing: true})
    };
    purchasingCancelHandler = () => {
        this.setState({purchasing: false})
    };
    purchasingContinueHandler = () => {
        let queryParams = [];
        for (let i in this.state.myIngredients) {
            queryParams.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.myIngredients[i]));
        }
       const queryString=queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        })
    };

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary
                        total={this.state.totalPrice}
                        PurchaseContinue={this.purchasingContinueHandler}
                        PurchaseCancel={this.purchasingCancelHandler}
                        price={this.state.totalPrice} ingredientsList={this.state.myIngredients}/>
                </Modal>
                <Burger ingredients={this.state.myIngredients}/>
                <BuildControl
                    Purchasing={this.purchasingHandler}
                    purchasable={this.state.purchasable} totalPrice={this.state.totalPrice}
                    addIngredient={this.addItemHandler} removeIngredient={this.removeItemHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;