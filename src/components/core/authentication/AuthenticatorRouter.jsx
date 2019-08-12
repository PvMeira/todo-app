import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js'
import {Redirect,Route} from 'react-router-dom'

class AuthenticatorRouter extends Component {

    render() {
        
            if (AuthenticationService.isUserLogged()) {
               return <Route {...this.props}/>
            } else  {
               return <Redirect to="/todoApp/login"/>
            }

        
        
    }
}

export default AuthenticatorRouter;