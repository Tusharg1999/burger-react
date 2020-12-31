import * as myActions from '../actions/actionTypes';

const initialState = {
    ingredients: {
        cheese: 0,
        salad: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 4
}
const price = {
    cheese: 2,
    meat: 4,
    bacon: 1,
    salad: .8
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case myActions.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                },
                totalPrice: state.totalPrice + price[action.ingredient]
            }
        }
        case myActions.REMOVE_INGREDIENT: {
            console.log(state.ingredients[action.ingredient]);

            if (state.ingredients[action.ingredient] === 0) {
                return state
            }
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                },
                totalPrice: state.totalPrice - price[action.ingredient]
            }
        }
        default: return state
    }
}

export default reducer;