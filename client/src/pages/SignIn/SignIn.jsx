import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import "./SignIn.css";
import Auth from "../../utils/auth";

function SignIn() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const {
        data: {
          login: { token },
        },
      } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log(token, "token");
      Auth.login(token);
    } catch (e) {
      console.error("Error logging in:", e);
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
