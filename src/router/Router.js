import React from 'react';
import AsyncComponent from '@/utils/asyncComponent';


//首页
export const Home = (props) => (
        <AsyncComponent load={() => import(/* webpackChunkName: "home" */'@/pages/Home')}>
                {(Home) => <Home {...props}/>}
        </AsyncComponent>
);       


//登录界面
export const Login = (props) => (
        <AsyncComponent load={() => import(/* webpackChunkName: "login" */'@/pages/Login')}>
                {(Login) => <Login {...props}/>}
        </AsyncComponent>
);


//错误界面404
export const ErrorPage = (props)=>(
        <AsyncComponent load={() => import(/* webpackChunkName: "errorPage" */'@/pages/ErrorPage')}>
               {(ErrorPage) => <ErrorPage {...props}/>}
        </AsyncComponent>
)
