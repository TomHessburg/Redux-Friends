import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LOGIN_SUCCESS } from './actions'

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './reducers'


    
const addTokenToLocalStorage = store => next => action => {
    if(action.type === LOGIN_SUCCESS) {
      localStorage.setItem('userToken', action.payload.data.payload);
      localStorage.setItem('username', action.credentials.username);
      localStorage.setItem('password', action.credentials.password);
    }
    next(action);
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, addTokenToLocalStorage, logger)))




ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));