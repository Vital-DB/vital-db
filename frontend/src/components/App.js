import React from "react";
import { Switch, Route } from 'react-router-dom';
import { GuestRoute, PrivateRoute } from '../util/route';
import DashboardContainer from './dashboard/dashboard_container';

import { Login} from './session/Login';
import { Register } from './session/Register';

function Splash() {
  return <h1>the frontend is working. paths available: /login /dashboard /register</h1>
}

const App = () => {
    return (
      <Switch>
        <GuestRoute exact path="/" component={Splash} />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/register" component={Register} />
        
        <PrivateRoute path='/dashboard' component={DashboardContainer} /> 
        {/* ^change this to PrivateRoute when login is setup */}

      </Switch>
    );
}

export default App;