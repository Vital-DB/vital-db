import React from "react";
import { Switch } from 'react-router-dom';
import { GuestRoute, PrivateRoute } from '../util/route';

import { Login } from './session/Login';
import { NewRecord } from './records/NewRecord';

const App = () => {
    return (
      <Switch>
        <GuestRoute exact path="/" component={Login} />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/records/new" component={NewRecord} />
      </Switch>
    );
}

export default App;