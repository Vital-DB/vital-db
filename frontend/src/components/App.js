import React from "react";
import { Switch, NavLink } from 'react-router-dom';
import { GuestRoute, PrivateRoute } from '../util/route';

import DashboardContainer from './dashboard/dashboard_container';
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
        <GuestRoute exact path="/records/new" component={NewRecord} />
        <GuestRoute exact path="/register" component={Register} />
        
        <PrivateRoute exact path='/home' component={Splash} /> 
        <PrivateRoute path='/dashboard' component={DashboardContainer} /> 
        {/* ^change this to PrivateRoute when login is setup */}

      </Switch>
    );
}

export default App;