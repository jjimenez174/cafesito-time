import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
}
//checks if there is a saved token and if it's valid
loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
}

isTokenExpired(token) {
try {
    const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (error) {
      return false;
    }
}
//recover the user token from localStorage
getToken() {
    return localStorage.getItem('id_token');
}
//saves user's token to localStorage
login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
}
//clear user's token and profile data from localStorage
logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
}
}

export default new AuthService();