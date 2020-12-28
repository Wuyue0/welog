import React, { Component }  from 'react';
// import IndexLayout from '@/components/Layout/index';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import { BigScreen , Home, Login , ErrorPage } from './Router';
import { getToken } from '@/utils/auth';
@connect(
  state => {
      return {
          id_token : state.loginReducer.id_token
      }
  }
)
class BasicRoute extends Component {
  render() {
      return (
          <Router>
              <Switch>
                    <Route exact path="/" render={ () => <Redirect to="/index"/> } />
                    <Route path="/index" component={BigScreen} />
                    <Route path="/login" render={() => {
                        return !!getToken() ?  <Redirect to="/archives" /> : <Login />
                    }} />
                    <Route path="/home" component={Home} />
                    <Route path="/404" component={ ErrorPage } />
                    {/* <Route  render={ () =>{return  <IndexLayout />}} /> */}
              </Switch>
          </Router>
      )
  }
}
export default BasicRoute;