import React from "react";
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'
import { GuestRoute, PrivateRoute } from '../util/route';
import NewPicture from './pictures/NewPicture'
// import DashboardContainer from './dashboard/dashboard_container';
import MainContainer from './main/main_container'
import { Login} from './session/Login';
import { Register } from './session/Register';
import Splash from './splash/splash';

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