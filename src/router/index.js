import React, { Component }  from 'react';
import IndexLayout from '@/components/Layout/index';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import { Login , ErrorPage} from './Router';

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
                  <Route exact path="/" render={ () => <Redirect to="/apply" push/> } />
                  <Route path="/404" component={ ErrorPage } />
                  <Route path="/login" render={() => {
                      console.log(1111111111111111111111111)
                      return this.props.id_token ?  <Redirect to="/" /> : <Login />
                  }} />
                  <Route  render={ () => <IndexLayout /> } />
              </Switch>
          </Router>
      )
  }
}
export default BasicRoute;
  