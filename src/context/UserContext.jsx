import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);//simulado por defecto

    const logout = () => setToken(false);

  return (
    <UserContext.Provider value={{ token, setToken, logout}}>
        {children}
      
    </UserContext.Provider>
  )
}

export default UserContext
