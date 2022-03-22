import { combineReducers } from 'redux';
import { productsReducer } from './productReducer';

export const rootReducer = combineReducers({
    productsList: productsReducer
})