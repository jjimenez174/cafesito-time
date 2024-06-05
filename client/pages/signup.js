import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const detailContainer = "container my-1 detail form-register";
  const formFields = "flex-row space-between my-2 form-fields";

  return (
    <div className={detailContainer}>
      <Link className="link-return" to="/login">← Go to Login</Link>

      <h2>Sign Up</h2>
      <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className={formFields}>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row flex-end">
          <button className="form-submit" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signup;