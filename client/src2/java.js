import axios from "axios";

// URL of your backend server
const API_URL = "http://localhost:3000/auth/";

// Register user
export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}register`, {
      username,
      password,
    });
    // Store user data in local storage
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

// Get current user from local storage
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// Logout user
export const logout = () => {
  localStorage.removeItem("user");
};
