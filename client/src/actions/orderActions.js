import {
    CREATE_ORDER,
    CLEAR_ORDER,
    CLEAR_CART
} from "./actionTypes";

export const createOrder = (order) => {
    return (dispatch) => {
        fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: CREATE_ORDER,
                    data: {
                        order: data
                    }
                })
            })
            window.localStorage.clear('cartItems');
            dispatch({ type: CLEAR_CART })
    }
};

export const clearOrder = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ORDER
        })
    }
}