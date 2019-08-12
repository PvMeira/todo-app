import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AuthenticationService from './authentication/AuthenticationService.js'

class HeaderComponent extends Component {

    render() {
        const apiPath = '/todoApp';
        const isUserLogged = AuthenticationService.isUserLogged();
        return (
            <div className="HeaderComponent">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <ul className="navbar-nav">
                            {isUserLogged && <li><Link className="nav-link" to={`${apiPath}/welcome`}>Home</Link></li>}
                            {isUserLogged && <li><Link className="nav-link" to={`${apiPath}/todos`}>TODO dashboard</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLogged && <li><Link className="nav-link" to={`${apiPath}/login`}>Login</Link></li>}
                            { isUserLogged && <li><Link className="nav-link" 
                                                         to={`${apiPath}/login`}
                                                         onClick={AuthenticationService.revokeCurrentUserSession}>Logout</Link></li>}
                        </ul> 
                    </nav>
                </header>
                <hr></hr>
            </div>
        );
    }
}

export default HeaderComponent;