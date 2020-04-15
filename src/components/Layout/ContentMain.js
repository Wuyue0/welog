import React, { Component } from 'react'
import { withRouter, Switch, Redirect, Route } from 'react-router-dom'
// import AsyncComponent from '@/utils/asyncComponent';
import PrivateRoute from '@/components/PrivateRoute';


// const Apply = (props) => (
//     <AsyncComponent load={() => import(/* webpackChunkName: "apply" */'@/pages/Apply')}>
//             {(Apply) => <Apply {...props}/>}
//     </AsyncComponent>
// );

// const Case = (props) => (
//     <AsyncComponent load={() => import(/* webpackChunkName: "case" */'@/pages/Case')}>
//             {(Case) => <Case {...props}/>}
//     </AsyncComponent>
// );


@withRouter
class ContentMain extends Component {
    render () {
        return (
            <div style={{padding: '20px 32px'}}>
                <Switch>
                    <PrivateRoute exact path='/home' component={ Apply }/>
                    <PrivateRoute exact path='/case' component={ Case }/>
                    <Route render={ () => <Redirect to="/404" /> } />
                    <Redirect exact from='/' to='/apply'/>
                </Switch>
            </div>
        )
    }
}

export default ContentMain


function Apply(props){
    return <div>apply 页面</div>
}

function Case(){
    return <div>Case 页面</div>
}
