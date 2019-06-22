import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginContainer from './components/auth/LoginContainer'
//import Signup from './components/auth/SignupForm'
import MainPage from './components/home/MainPage';


export const Routes = () =>(
<Switch>
    <Route exact path='/' component={LoginContainer }  />
    <Route path='/register' component={LoginContainer }  />
    <Route path='/home' component={ MainPage }  />
</Switch>
);



