import React from 'react';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

const fcc = "footer-bar, wrapper";

function footer(){
    if (Auth.loggedIn()) {
    return (
        <div id="footer">
            <h4 className="wrapper"><Link id="footer-name" to="/">The Cold Drip</Link></h4>
            <div id="footer-container" className="wrapper">
                
                <ul>
                    <li className="">
                    <Link to="/shop">
                        Shop
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        About
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Contact
                    </Link>
                    </li>
                    <li>
                        <Link to="/orderHistory">
                            Order History
                        </Link>
                        </li>
                        <li>
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                    
                </ul>
                <ul>
                    <li className="">
                    <Link to="/template">
                        Shipping
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Return
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Payments
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Contact
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li className="">
                    <Link to="/template">
                        Blends
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Quality
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Supplies
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Beans
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li className="">
                    <Link to="/template">
                        T/Cs
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Privacy
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/template">
                        Returns
                    </Link>
                    </li>
                </ul>

            </div>

            <div className={fcc}>
                <div id="copy">© 2021 Leon Hsu (leonhsu95) | All Rights Reserved.</div>
            </div>
            
        </div>        
    )}
    else{
        return (
            <div id="footer">
                <h4 className="wrapper"><Link id="footer-name" to="/">The Cold Drip</Link></h4>
                <div id="footer-container" className="wrapper">
                    
                    <ul>
                        <li className="">
                        <Link to="/shop">
                            Shop
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            About
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Contact
                        </Link>
                        </li>
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
                    </ul>
                    <ul>
                        <li className="">
                        <Link to="/template">
                            Shipping
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Return
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Payments
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                        </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="">
                        <Link to="/template">
                            Blends
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Quality
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Supplies
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Beans
                        </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="">
                        <Link to="/template">
                            T/Cs
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Privacy
                        </Link>
                        </li>
                        <li className="">
                        <Link to="/template">
                            Returns
                        </Link>
                        </li>
                    </ul>
    
                </div>
    
                <div className={fcc}>
                    <div id="copy">© 2021 Leon Hsu (leonhsu95) | All Rights Reserved.</div>
                </div>
                
            </div>        
   )}
}

export default footer;