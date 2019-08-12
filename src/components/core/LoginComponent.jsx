import React, {Component} from 'react';
import AuthenticationService from './authentication/AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            authorized: false,
            error: false
        }
        
        this.defaultFormHandler = this.defaultFormHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">         
                    {this.state.authorized && <div>Login Aproved</div>}
                    {this.state.error && <div className="alert alert-error">Invalid Credentials</div>}
                        User Name: <input type="text" 
                                        name="username" 
                                        value={this.state.username} 
                                        onChange={this.defaultFormHandler}/>
                        Password: <input type="password" 
                                        name="password" 
                                        value={this.state.password}  
                                        onChange={this.defaultFormHandler}/>
                        <button className="btn btn-success" onClick={this.submitLogin}>Login</button>
                </div>
        </div>
        );
    }
    submitLogin() {
        console.log(`username is ` + this.state.username);
        if (this.state.username === 'tb' && this.state.password === 'tb') {
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
            this.props.history.push(`welcome/${this.state.username}`);
        } else {
            this.setState(
                {
                    error: true,
                    authorized: false
                }
            );
        }
    }

    defaultFormHandler(synteticEvent) {
        this.setState(
            {
                [synteticEvent.target.name]: synteticEvent.target.value,
            }
        );
    }

}
export default LoginComponent;