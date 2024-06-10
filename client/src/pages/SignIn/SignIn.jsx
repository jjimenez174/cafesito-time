import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import "./SignIn.css";

function SignIn() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmit = async (event) => {
    try {
      // Prevent default form submission behavior
      event.preventDefault();

      // Make sure email and password are provided
      if (!formState.email || !formState.password) {
        throw new Error("Please provide both email and password.");
      }

      // Call the login function
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });

      // Check if login was successful
      if (data && data.login && data.login.token) {
        // If successful, login the user
        Auth.login(data.login.token);
      } else {
        // If login data is not as expected, throw an error
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle any errors that occur during the login process
      console.error("Login error:", error.message);
      // Optionally, you can display an error message to the user
      // Or perform any other error handling tasks here
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="SignIn-container" className="container">
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <div className="SignIn-title">
          <h2>Sign In</h2>
        </div>
        <div className="signin-inputs">
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button">
          Sign In
        </button>
        {error && <p className="error-text">Error signing in</p>}
        <Link to="/signup">
          <button type="button" className="button">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
