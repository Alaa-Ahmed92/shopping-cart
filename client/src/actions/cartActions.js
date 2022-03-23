import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './actionTypes';

export const addToCart = (product) => {
    return (dispatch, getState) => {
        let cartItemsState = getState().cart.cartItems;
        let cartProducts = [...cartItemsState];
        let isProductExist = false;
        cartProducts.forEach(p => {
            if (p._id == product._id) {
                p.qty++;
                isProductExist = true;
            }
        });
        if (!isProductExist) {
            cartProducts.push({ ...product, qty: 1 })
        };
        dispatch({
            type: ADD_TO_CART,
            data: {
                cartItems: cartProducts
            }
        });
        window.localStorage.setItem('cartItems', JSON.stringify(cartProducts));
    }
};

export const removeFromCart = (product) => {
    return (dispatch, getState) => {
        let cartItemsState = getState().cart.cartItems;
        let cartProducts = [...cartItemsState];
        let updatedProducts = cartProducts.filter(p => p._id != product._id);
        dispatch({
            type: REMOVE_FROM_CART,
            data: {
                cartItems: updatedProducts
            }
        });
        window.localStorage.setItem('cartItems', JSON.stringify(updatedProducts));
    }
};