import React, {Component} from 'react';
import LoginComponent from './LoginComponent'
import HomeComponent from './HomeComponent'
import TodoListComponent from './todo/TodoListComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import AuthenticatorRouter from './authentication/AuthenticatorRouter'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component {
    render() {
        const apiPath = '/todoApp';
        return (
            <div className="todoApp">
                <Router>
                    <div className="container-fluid">
                    <HeaderComponent/>
                        <Switch>
                            <Route path = {apiPath} exact component = {LoginComponent}/>
                            <Route path = {apiPath + '/login'} component = {LoginComponent}/>
                            <AuthenticatorRouter path = {apiPath + '/logout'} component = {LogoutComponent}/>
                            <AuthenticatorRouter path = {apiPath + '/welcome/:username'} component = {HomeComponent}/>
                            <AuthenticatorRouter path = {apiPath + '/todos'} component = {TodoListComponent}/>
                            <Route component = {NotfoundComponent}/>
                        </Switch>
                    <FooterComponent/>
                    </div>
                </Router>
            </div>
        );
    }
}

function NotfoundComponent() {
    return <h1> OPS.. something is gone Wrong.</h1>
}


export default TodoApp;