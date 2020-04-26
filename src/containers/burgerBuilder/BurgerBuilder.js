import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/Burger'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myIngredients: {
                cheese: 2,
            }
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.myIngredients}/>
                <p>customisation for burger</p>
            </Aux>
        )
    }
}

export default BurgerBuilder;