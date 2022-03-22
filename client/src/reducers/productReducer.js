import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from "../actions/actionTypes";

const initalState = {
    pending: false,
    productsList: [],
    error: null
};

export const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                productsList: action.productsList
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
};