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

                    <PrivateRoute exact path='/archives' component={ Archives }/>
                    <PrivateRoute exact path='/categories' component={ Categories }/>
                    <PrivateRoute exact path='/leavemsg' component={ Leavemsg }/>
                    <PrivateRoute exact path='/about' component={ About }/>
                    <Route render={ () => <Redirect to="/404" /> } />
                    <Redirect exact from='/' to='/archives'/>
                </Switch>
            </div>
        )
    }
}

export default ContentMain;


function Archives(){
    return <div> Archives页面</div>
}



function Categories(){
    return <div>Categories 页面</div>
}


function Leavemsg(){
    return <div>我是留言界面</div>
}


function About(){
    return <div>我是about页面</div>
}