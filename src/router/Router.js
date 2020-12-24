import React from 'react';
import AsyncComponent from '@/utils/asyncComponent';


//首页
const BigScreen = (props) => (
    <AsyncComponent load={() => import(/* webpackChunkName: "bigScreen" */'@/pages/BigScreen')}>
            {(BigScreen) => <BigScreen {...props}/>}
    </AsyncComponent>
); 

// 主界面
const Home = (props) => (
  <AsyncComponent load={() => import(/* webpackChunkName: "Home" */'@/pages/Home')}>
            {(Home) => <Home {...props}/>}
  </AsyncComponent>
)

//登录界面
const Login = (props) => (
  <AsyncComponent load={() => import(/* webpackChunkName: "login" */'@/pages/Login')}>
          {(Login) => <Login {...props}/>}
  </AsyncComponent>
);

//错误界面404
const ErrorPage = (props)=>(
  <AsyncComponent load={() => import(/* webpackChunkName: "errorPage" */'@/pages/ErrorPage')}>
          {(ErrorPage) => <ErrorPage {...props}/>}
  </AsyncComponent>
)

export { 
  BigScreen,
  Home,
  Login,
  ErrorPage
}
