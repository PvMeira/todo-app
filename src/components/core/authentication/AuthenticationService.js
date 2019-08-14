import axios from 'axios'

class AuthenticationService {

    setupAxiosInterceptors(authHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLogged()) {
                    config.headers.authorization = authHeader;
                }
                return config;
            }
        );
    }

    registerSuccessfullLogin(username, password) {
        let authHeader = 'Basic ' + window.btoa(`${username}:${password}`);
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(authHeader);
    }
    
    revokeCurrentUserSession(username, password) {
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLogged() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true;
    }
    getLoggedUsername() {
        return sessionStorage.getItem('authenticatedUser');
    }

    verifyUser(username, password) {
        
        let authHeader = 'Basic ' + window.btoa(`${username}:${password}`);
        return axios.get(`${process.env.REACT_APP_BACK_END_URL}/basicauth/${username}/${password}`,
        {
            headers: {authorization: authHeader}
        });
    }
}

export default new AuthenticationService();