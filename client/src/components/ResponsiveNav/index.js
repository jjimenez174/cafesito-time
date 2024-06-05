import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import Cart from '../Cart';
import Burger from './Burger';
import ShoppingCart from './ShoppingCart';
import Logo from '../Photos/cafesitotimelogo.png';

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-bottom: 2px #f1f1f1 solid;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);

    #logo{
        padding: 15px 0;
    }

    @media screen and (max-width: 1200px){
        flex-direction: row-reverse;
    }
`;

function ResponsiveNav() {
    return (
        <Nav id="responsive-nav">
            
            < ShoppingCart />
            <div id="logo">
            <Link to="/">
                <img id="logo-png" src={Logo} alt="Cafesito Time Logo"></img>
            </Link>
            </div>
            < Burger />
            {/* < Cart /> */}
            
            
            
        </Nav>
    )
}
export default ResponsiveNav;
