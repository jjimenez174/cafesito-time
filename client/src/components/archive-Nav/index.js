import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import Cart from "../Cart";
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import SearchBar from "../SearchBar";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="">
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <>
          {/* // <ul className="flex-row">
        //   <li className="mx-1">
        //     <Link to="/signup">
        //       Signup
        //     </Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/login">
        //       Login
        //     </Link>
        //   </li>
        // </ul> */}

          <ul className="">
            <li className="">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="">
              <Link to="/about">About</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="">
              <Link to="/login">Login</Link>
            </li>
            {/* <Cart /> */}
          </ul>

          {/* <ul className="">
          <li className="">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul> */}
        </>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <div className="nav-container">
        <h1>
          <Link to="/">The Cold Drip</Link>
        </h1>

        <nav>{showNavigation()}</nav>
      </div>
    </header>
  );
}

export default Nav;
