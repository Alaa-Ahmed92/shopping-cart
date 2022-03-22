import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    SIZE_FILTER,
    SORT_FILTER
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
                productsList: action.productsList,
                filteredProducts: action.productsList
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SIZE_FILTER:
            return {
                ...state,
                size: action.data.size,
                filteredProducts: action.data.filteredProducts
            }
        case SORT_FILTER:
            return {
                ...state,
                sort: action.data.sort,
                filteredProducts: action.data.filteredProducts
            }
        default:
            return state;
    }
};