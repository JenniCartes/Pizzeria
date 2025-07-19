import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (

    <div className="form-container">
      <h1>404 - Página no encontrada</h1>
      <p>Ups... esta pizza no está en el menú 🍕</p>
      <Link to="/" className="pay-btn">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
