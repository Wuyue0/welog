import React from 'react';
import AsyncComponent from '@/utils/asyncComponent';


//登录界面
export const Login = (props) => (
        <AsyncComponent load={() => import(/* webpackChunkName: "login" */'@/page/Login')}>
                {(Login) => <Login {...props}/>}
        </AsyncComponent>
);


//错误界面404
export const ErrorPage = (props)=>(
        <AsyncComponent load={() => import(/* webpackChunkName: "errorPage" */'@/page/ErrorPage')}>
               {(ErrorPage) => <ErrorPage {...props}/>}
        </AsyncComponent>
)


export const Register = (props) => (
      <AsyncComponent load={() => import('@/component/register')}>
         {(Register) => <Register {...props}/>}
      </AsyncComponent>
);


// export const Default = (props) => (
//         <AsyncComponent load={() => import('../../component/default')}>
//               {(Default) => <Default {...props}/>}
//         </AsyncComponent>
// );

// export const Blog = (props) => (
//        <AsyncComponent load={() => import('../../component/blog')}>
//              {(Blog) => <Blog {...props}/>}
//         </AsyncComponent>
// );


// export const User = (props) => ( 
//         <AsyncComponent load={() => import('../../component/user')}>
//              {(User) => <User {...props}/>}
//         </AsyncComponent>
// );
