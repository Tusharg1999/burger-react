import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/Burger'
import BuildControl from '../../components/burger/buildControl/BuildControl'
const price={
    cheese: 2,
    meat:4,
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
            totalPrice: 4
        }
    }

    addItemHandler = (type) => {
    const chooseTypeValue=this.state.myIngredients[type];
    const updateChooseTypeValue=chooseTypeValue+1;
    const allIngredients={
        ...this.state.myIngredients
    };
    allIngredients[type]=updateChooseTypeValue;
    const currentPrice=this.state.totalPrice;
    const newPrice=currentPrice+price[type]
    this.setState({
        myIngredients:allIngredients,
        totalPrice:newPrice
    })
    };
    removeItemHandler=(type)=>{
        const chooseTypeValue=this.state.myIngredients[type];
        if (chooseTypeValue<=0){
            return;
        }
        const updateChooseTypeValue=chooseTypeValue-1;
        const allIngredients={
            ...this.state.myIngredients
        };
        allIngredients[type]=updateChooseTypeValue;
        const currentPrice=this.state.totalPrice;
        if (currentPrice===4){
            return;
        }
        const newPrice=currentPrice-price[type];
        this.setState({
            myIngredients:allIngredients,
            totalPrice:newPrice
        })
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.myIngredients}/>
                <BuildControl addIngredient={this.addItemHandler} removeIngredient={this.removeItemHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;