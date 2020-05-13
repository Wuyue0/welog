import React from 'react';
import {BrowserRouter  as Router, Route, Switch ,Redirect , useRouteMatch } from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import '../index.css'

const BasicRoute = () => (
    <Router
        
    >
        <Switch>
            <Route exact path="/" render={()=> {
                return <Home></Home>
            }}/>
            <Route path="/home" component={Home}/>
            <Route path="/detail" component={Detail}/>
        </Switch>
    </Router>
);


export default BasicRoute;