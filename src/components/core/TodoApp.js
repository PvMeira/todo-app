import React, {Component} from 'react';
import LoginComponent from './LoginComponent'
import HomeComponent from './HomeComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component {
    render() {
        const apiPath = '/todoApp';
        return (
            <div className="todoApp">

                <Router>
                    <Switch>
                        <Route path = {apiPath} exact component = {LoginComponent}/>
                        <Route path = {apiPath + '/login'} component = {LoginComponent}/>
                        <Route path = {apiPath + '/welcome/:username'} component = {HomeComponent}/>
                        <Route component = {NotfoundComponent}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

function NotfoundComponent() {
    return <h1> OPS.. something is gone Wrong.</h1>
}


export default TodoApp;