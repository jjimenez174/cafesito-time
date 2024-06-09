import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = () => {

    const [main,setMain] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  return (
    <div className='navbar'>
   <Link to="/"> <img className='logo'src={assets.cafesitologowords} alt=""/> </Link>
    <ul className="navbar-main">
    <Link to="/" onClick={() => setMain("home")} className={`${main === "home" ? "active" : ""}`}>Home</Link>       
    <Link to="/shop" onClick={() => setMain("shop")} className={`${main === "shop" ? "active" : ""}`}>Shop</Link>
    <a href='#footer' onClick={() => setMain("contact")} className={`${main === "contact" ? "active" : ""}`}>Contact Us</a>
      <Link to='/signin'>  <li onClick={() => setMain ("sign-in")} className={main ==="sign-in"? "active": ""}>Sign In</li></Link>
    </ul>
    <div className='navbar-right'>
       <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    </div>
  )
}

export default Navbar
