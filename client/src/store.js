import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, reduxDev(applyMiddleware(reduxThunk)));

export default store;