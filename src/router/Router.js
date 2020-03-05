import React from 'react';
import AsyncComponent from '../utils/asyncComponent';


export const Login = (props) => (
        <AsyncComponent load={() => import('../page/login')}>
           {(Login) => <Login {...props}/>}
        </AsyncComponent>
);


// export const Register = (props) => (
//       <AsyncComponent load={() => import('../../component/register')}>
//          {(Register) => <Register {...props}/>}
//       </AsyncComponent>
// );


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
