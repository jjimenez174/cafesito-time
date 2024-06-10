import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Signup from ".src2/Signup";
import Login from ".src2/Login"; // Assume you have a Login component
import Protected from "./Protected"; // Assume you have a Protected component
import { getCurrentUser } from "./auth"; // Assume getCurrentUser is defined in auth.js

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/protected" component={Protected} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

// Private route component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getCurrentUser() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default App;
