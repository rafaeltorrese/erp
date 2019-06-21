import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginContainer from './components/auth/LoginContainer'

export const Routes = () =>(
<Switch>
    <Route path='/login' component={LoginContainer }  />
    <Route path='/register' component={LoginContainer }  />
    <Route path='/home' component={LoginContainer }  />
</Switch>
);



