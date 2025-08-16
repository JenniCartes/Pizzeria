import React from 'react'
import { useUser } from '../context/UserContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiereAuth }) => {
    const { token } = useUser();

    if (requiereAuth && !token) {
        //Si requiere autenticación y no hay token, redirige a login
        return <Navigate to="/login"/>;
            }

    if (!requiereAuth && token) {
        //Si NO requiere autenticación pero ya hay token, redirige al home
        return <Navigate to="/"/>;
    }
  return children;
}

export default ProtectedRoute
