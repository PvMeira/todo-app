class AuthenticationService {

    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }
    revokeCurrentUserSession(username, password) {
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLogged() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true;
    }
}

export default new AuthenticationService();