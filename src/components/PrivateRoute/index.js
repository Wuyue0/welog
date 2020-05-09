import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '@/utils/auth'

const PrivateRoute = ({component: Component, ...rest}) => {
    // console.log('路由鉴权',getToken())
    return (
        <Route {...rest} render={(props) => (
        !!getToken()
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )}/>
    )
}

export default PrivateRoute