import React, {Component} from 'react';

class LoginComponent extends Component {

    render() {
        return (
            <div className="LoginComponent">
                Username : <input type="text" name="username"/>
                Password : <input type="password" name="password"/>
                <button type="submit" >Login</button>
            </div>
        );
    }
}
export default LoginComponent;