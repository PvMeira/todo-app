import React, {Component} from 'react';

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
            <div className="LoginComponent">
            
                {this.state.authorized && <div>Login Aproved</div>}
                {this.state.error && <div>Login Denied</div>}
                Username : <input type="text" 
                                  name="username" 
                                  value={this.state.username}
                                  onChange = {this.defaultFormHandler}/>
                Password : <input type="password" 
                                  name="password" 
                                  value={this.state.password}
                                  onChange = {this.defaultFormHandler}/>
                <button type="submit"
                        onClick={this.submitLogin}>Login</button>
            </div>
        );
    }
    submitLogin() {
        console.log(`username is ` + this.state.username);
        if (this.state.username === 'tb' && this.state.password === 'tb') {
            this.props.history.push(`todoApp/welcome/${this.state.username}`);
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