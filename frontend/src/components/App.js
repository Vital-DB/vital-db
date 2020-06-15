import React from "react";
import { Switch, Route } from 'react-router-dom';
import { GuestRoute } from '../util/route';
import DashboardContainer from './dashboard/dashboard_container';

import { Login} from './session/Login';
import { Register } from './session/Register';

const App = () => {
    return (
      <Switch>
        <GuestRoute exact path="/login" component={Login} />
        <Route path='/dashboard' component={DashboardContainer} /> 
        {/* ^change this to PrivateRoute when login is setup */}
        <GuestRoute exact path="/register" component={Register} />

      </Switch>
    );
}

export default App;