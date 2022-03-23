import {
    SIZE_FILTER,
    SORT_FILTER
} from "./actionTypes";

export const sizeFilter = (products, value) => {
    return dispatch => {
        let productsClone = [...products];
        let newProducts = productsClone.filter(product => product.sizes.indexOf(value) != -1);
        dispatch({
            type: SIZE_FILTER,
            data: {
                size: value,
                filteredProducts: value == 'ALL' ? products : newProducts
            }
        })
    }
}

export const sortFilter = (products, value) => {
    return dispatch => {
        let productsClone = [...products];
        let newProducts = productsClone.sort((a, b) => {
            if (value == 'lowest') {
                return a.price - b.price;
            } else if (value == 'highest') {
                return b.price - a.price;
            } else {
                return a._id < b._id ? 1 : -1;
            }
        });
        dispatch({
            type: SORT_FILTER,
            data: {
                sort: value,
                filteredProducts: newProducts
            }
        })
    }
}