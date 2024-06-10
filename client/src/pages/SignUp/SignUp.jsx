import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import './SignUp.css'

  function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleSubmit = async (event) => {
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


  return (
    <div id="signup-container" className="container" style={{ display: "block" }}>
      <form className="signup-form" action="" method="post" onSubmit={handleSubmit} >
      <div className="Signup-title">
            <h2>Sign Up</h2>
            </div>
            <div className="signup-inputs">
            <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
            <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          </div>
       <Link to='/'> <input type="submit" className="button" value="Sign Up" /> </Link>
      </form>
      </div>
  );
}

export default Signup;
