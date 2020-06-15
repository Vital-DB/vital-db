import React from "react";
import { Switch, NavLink } from 'react-router-dom';
import {Route} from 'react-router-dom'
import { GuestRoute, PrivateRoute } from '../util/route';
import NewPicture from './pictures/NewPicture'
import DashboardContainer from './dashboard/dashboard_container';
import MainContainer from './main/main_container'
import { Login} from './session/Login';
import { Register } from './session/Register';

function Splash() {
  return (
  <div>
    the frontend is working. paths available: /login /dashboard /register
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </div>)
}

const App = () => {
    return (
      <Switch>
        <GuestRoute exact path="/" component={Splash} />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/register" component={Register} />
        
        <Route exact path="/pictures/new" component={NewPicture} />
        <PrivateRoute exact path='/home' component={Splash} /> 
        <PrivateRoute path='/main' component={MainContainer} /> 
      </Switch>
    );
}

export default App;