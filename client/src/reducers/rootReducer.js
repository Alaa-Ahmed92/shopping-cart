import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';
import { productsReducer } from './productReducer';

export const rootReducer = combineReducers({
    productsList: productsReducer,
    cart: cartReducer,
    order: orderReducer
})