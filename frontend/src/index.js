import './reset.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';
// import axios from 'axios';

import Root from './components/Root'
import configureStore from './store/store'

import { setAuthToken } from './util/sessionApi';
import { logout } from './actions/session';

import * as VitalsUtil from './actions/vitals'


document.addEventListener('DOMContentLoaded', () => {
  // axios.defaults.baseURL= "http://localhost:5000";
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  
  let store;

  if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { 
      session: {isAuthenticated: true, user: decodedUser}
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if(decodedUser.exp < currentTime) {
      store.dispatch(logout());
      // redirects to login page when 1 hour has past
      window.location.href = '/login';
    }

  } else {
    store = configureStore();
  }
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.VitalsUtil = VitalsUtil;

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root);
});

