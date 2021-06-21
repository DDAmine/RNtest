import React from 'react';
import  ThunkMiddleware  from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import CartReducer from './reducer/reducer'


const Reducer = combineReducers({

CartReducer


})
 const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));
 export default Store ;
