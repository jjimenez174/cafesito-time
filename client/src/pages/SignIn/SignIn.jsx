import './SignIn.css'
import { Link } from 'react-router-dom';
import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted username: ${username}, password: ${password}`);
  };

  return (
    <div id="SignIn-container" className="container">
      <form className="SignIn-form" action="" method="post" onSubmit={handleSubmit}>
        <div className="SignIn-title">
            <h2>Sign In</h2>
        </div>
        <input type="text" className="input" id="user_SignIn" autoComplete="off" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>

        <Link to='/'><input type="submit" class="button" value="Sign In" /> </Link>
       <Link to='/signup'> <input  type="submit" class="button" value="Sign Up" /></Link>
      </form>
    </div>
  );
}

export default SignIn;

