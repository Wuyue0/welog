import React from 'react';
import {BrowserRouter  as Router, Route, Switch ,Redirect } from 'react-router-dom';
import Home from './home';
import Detail from './detail';


const BasicRoute = () => (
    <Router
        
    >
        <Switch>
            <Route exact path="/" render={()=><Redirect to="/home"></Redirect>}/>
            <Route  path="/home" component={Home}/>
            <Route  path="/detail" component={Detail}/>
        </Switch>
    </Router>
);


export default BasicRoute;