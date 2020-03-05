import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Login , Register , Default , Blog} from './Router'


const BasicRoute = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/register" component={Register}/>
        <Route exact path="/default" component={Default}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/user" component={User}/> */}
  
        <Route exact path="/" component={Login}/>
        <Route exact
               component={Login}/>
      </Switch>
    </BrowserRouter>
);

export default BasicRoute;
  