import React from "react";
import { Switch, Route } from 'react-router-dom';
import { GuestRoute, PrivateRoute } from '../util/route';
import DashboardContainer from './dashboard/dashboard_container';
import { Login} from './session/Login';

const App = () => {
    return (
      <Switch>
        <GuestRoute exact path="/" component={Login} />
        <GuestRoute exact path="/login" component={Login} />
        <Route path='/dashboard' component={DashboardContainer} /> 
        {/* ^change this to PrivateRoute when login is setup */}
      </Switch>
    );
}

export default App;