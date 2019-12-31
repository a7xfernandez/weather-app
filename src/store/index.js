
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducer';

const initialState = {
    city: 'Tegucigalpa,hn'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers,initialState,composeEnhancers(applyMiddleware(thunk)));

