import React from 'react';
import IndexLayout from '@/components/Layout/index'
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import { Login , ErrorPage} from './Router';
const BasicRoute = () => (
    <Router>
      <Switch>
        {/* switch作用就是设置不存在的路由显示界面404 */}

        <Route exact path="/" component={Login}/>
        <Route path="/register" component={ErrorPage}/>
        <Route path="/login" component={Login}/>
        <Route render = {
          ()=>{
            return <IndexLayout/>
          }
        } />  
      </Switch>
    </Router>
)
export default BasicRoute;
  