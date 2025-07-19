import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
    <>
      <nav className='navbar'>
      <Link to="/" className='navbar-logo'>🍕Mamma Mia</Link>
            <div className='navbar-links'>
        <Link to="/">🏠 Home</Link>
        {token ? (
            <>
            <Link to="/profile">🔓 Profile</Link>
            <button>🔒Logout</button>
            </>
        ):(
            <>
            <Link to="/login">🔐 Login</Link>
            <Link to="/register">🔐 Register</Link>
            </>
        )}
         <Link to="/cart"> <button className="navbar-cart">🛒 Total: ${total.toLocaleString()}</button>
         
         
         </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
