import React from "react";
import { Switch } from 'react-router-dom';
import { GuestRoute } from '../util/route';

import { Login} from './session/Login';
import { Register } from './session/Register';

const App = () => {
    return (
      <Switch>
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/register" component={Register} />
      </Switch>
    );
}

export default App;