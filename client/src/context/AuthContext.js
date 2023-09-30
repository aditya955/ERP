import React, { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    // Check if a JWT token exists in local storage or cookies
    const token = localStorage.getItem('token');
    // console.log(token)
    if (token) {
      try {
        // Decode the JWT token to get user information
        const decodedUser = jwt_decode(token);
        setUser(decodedUser);
        // console.log(decodedUser)
      } catch (error) {
        console.error('Error decoding JWT token:', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  const login = (token) => {
    // Store the token in local storage or cookies
    localStorage.setItem('token', token);
    // Decode the token and set the user in state
    const decodedUser = jwt_decode(token);
    setUser(decodedUser);
  };

  const logout = () => {
    // Remove the token from local storage or cookies
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
