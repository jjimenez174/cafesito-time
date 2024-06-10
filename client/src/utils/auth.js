// auth.js

class Auth {
  static login(token) {
    localStorage.setItem("token", token); // Store the token in localStorage or a secure storage mechanism
  }

  static logout() {
    localStorage.removeItem("token"); // Remove the token from localStorage on logout
  }

  static getToken() {
    return localStorage.getItem("token"); // Retrieve the token from localStorage
  }

  static isLoggedIn() {
    return !!localStorage.getItem("token"); // Check if a token exists in localStorage
  }
}

export default Auth;
