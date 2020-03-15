import React from 'react';
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import { Login , ErrorPage} from './Router';
const BasicRoute = () => (
    <Router>
      <Switch>
        {/* switch作用就是设置不存在的路由显示界面404 */}

        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        {/* <Route exact path="/register" component={Register}/> */}
        {/* <Route exact path="/default" component={Default}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/user" component={User}/> */}
        <Route component={ ErrorPage } />  
        {/* 一定要放在最后 */}
      </Switch>
    </Router>
);

function Home(){
  return (
    <div>hello home</div>
  )
}

export default BasicRoute;
  