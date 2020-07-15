import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';


import thunk from 'redux-thunk';
import logger from 'redux-logger';

// debugger
console.log(process.env.NODE_ENV);

const configureStore = (preloadedState = {}) => {
    switch (process.env.NODE_ENV) {
        case "development": // show logger in development
            return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
        default:
            return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
    }
};

export default configureStore;