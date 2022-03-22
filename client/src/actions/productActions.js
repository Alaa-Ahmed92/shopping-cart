import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_ERROR
} from "./actionTypes";

export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
};

export function fetchProductsSuccess(productsList) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        productsList
    }
};

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error
    }
};

export function fetchProductsAction() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('/api/products')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error)
                }
                dispatch(fetchProductsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
};