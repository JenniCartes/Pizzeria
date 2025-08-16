import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Navbar = () => {
    const {total} = useCart();
    const { token, logout } = useUser()

  return (
    <>
      <nav className='navbar'>
      <Link to="/" className='navbar-logo'>🍕Mamma Mia</Link>
            <div className='navbar-links'>
        <Link to="/">🏠 Home</Link>
        {token ? (
            <>
            <Link to="/profile">🔓 Profile</Link>
            <button onClick={logout}>🔒Logout</button>
            </>
        ):(
            <>
            <Link to="/login">🔐 Login</Link>
            <Link to="/register">🔐 Register</Link>
            </>
        )}
         <Link to="/cart"> 
         <button className="navbar-cart">
          🛒 Total: ${total.toLocaleString()}</button>
         
         
         </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
