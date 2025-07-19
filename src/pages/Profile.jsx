import React from 'react'

const Profile = () => {
    const userEmail = "usuario@ejemplo.com"

    const handleLogout = () => {
    alert("Sesión cerrada (simulada)");
  };

  return (
    <div className="form-container">
      <h2>Perfil de usuario</h2>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout} className="pay-btn">Cerrar sesión</button>
    </div>
  )
}

export default Profile
