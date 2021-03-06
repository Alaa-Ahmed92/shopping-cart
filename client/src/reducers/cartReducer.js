import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../actions/actionTypes';

const initalState = {
    cartItems: JSON.parse(window.localStorage.getItem(('cartItems'))) || []
}

export const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: action.data.cartItems
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: action.data.cartItems
            }
        case CLEAR_CART:
            return {
                ...state,
                products: []
            }
        default:
            return state;
    }
}