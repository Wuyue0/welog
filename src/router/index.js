import React from 'react';
import IndexLayout from '@/components/Layout/index'
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import { Login , ErrorPage} from './Router';
const BasicRoute = () => (
    <Router>
      <Switch>
        {/* switch作用就是设置不存在的路由显示界面404 */}

        <Route exact path="/" render={ () => <Redirect to="/apply" push /> } />
        <Route path="/404" component={ErrorPage}/>
        <Route path="/hello" render={
          ()=>{
            return <div>
              欢迎你等录成功!
            </div>
          }
        }/>
        <Route path="/login" render={() => {
            return this.props.id_token ?  <Redirect to="/" /> : <Login />
        }}/>
        <Route render = {
          ()=>{
            return <IndexLayout/>
          }
        } />  
      </Switch>
    </Router>
)
export default BasicRoute;
  