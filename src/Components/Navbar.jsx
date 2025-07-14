import React from 'react'

const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
    <>
      <nav className='navbar'>
      <span className='logo'>🍕Mamma Mia</span>
      <div className='nav-buttons'>
        <button>🏠Home</button>
        {token ? (
            <>
            <button>🔓Profile</button>
            <button>🔒Logout</button>
            </>
        ):(
            <>
            <button>🔐Login</button>
            <button>🔐Register</button>
            </>
        )}
        <button>🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
