import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

export default function Detail(){
    let match = useRouteMatch();
    console.log('子路由单击渲染',match)
    return (
        <div>

            <p>我是detail 路由</p>
            <Link to="/home">回到home</Link>

             <p>嵌套的子路由</p>


             <ul>
                <li>
                    <Link to={`/detail/components`}>Components</Link>
                    </li>
                    <li>
                    <Link to={`/detail/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
             </ul>

             <Switch>
                <Route path={`${match.path}/components`}>
                    <Topic />
                </Route>
                <Route path={`${match.path}/props-v-state`}>
                     <h3>Please select a topic.</h3>
                </Route>
            </Switch>


        </div>
    )
}

function Topic() {
    return <h3>Requested topic ID: </h3>;
  }