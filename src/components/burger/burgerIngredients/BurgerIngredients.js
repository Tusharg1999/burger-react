import React, {PureComponent} from 'react'
import  './BurgerIngredients.css'
import PropTypes from 'prop-types'

class BurgerIngredients extends PureComponent {
    render() {
        let ingredient;
        switch (this.props.type) {
            case ('breadBottom'):
                ingredient = <div className="BreadBottom"/>
                break;
            case ('breadTop'):
                ingredient = <div className="BreadTop">
                    <div className="Seeds1"/>
                    <div className="Seeds2"/>
                </div>
                break;
            case ('cheese'):
                ingredient = <div className="Cheese"/>
                break;
            case ('meat'):
                ingredient = <div className="Meat"/>;
                break;
            case ('salad'):
                ingredient = <div className="Salad"/>;
                break;
            case ('bacon'):
                ingredient = <div className="Bacon"/>;
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredients;