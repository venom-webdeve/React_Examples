import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext'

function PrivateRoute({component:Component, ...rest}) {
    const {isLoggedIn}=useContext(AuthContext);
    return (
       <Route {...rest} render={(props)=>{
           return isLoggedIn ? <Component {...props} />: <Redirect to='/' />
       }} />
    )
}

export default PrivateRoute
