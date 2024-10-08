"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { decode } from 'jwt-decode';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: '', last_name: '', email: '', token: '' });

  useEffect(() => {
    const storedToken = localStorage.getItem('token'); 
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);

        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem('token');
          setUser(null);
        } else {
          setUser({
            name: decodedToken.first_name,
            last_name: decodedToken.last_name,
            email: decodedToken.email,
            token: storedToken,
          });
        }
      } catch (error) {
        console.error('Error al decodificar el token', error);
      }
    }
  }, []);

  const updateUser = (updates) => {
    setUser(prevUser => {
      const newUser = { ...prevUser, ...updates };
      if (newUser.token) {
        localStorage.setItem('token', newUser.token);
      }
      return newUser;
    });
  };

  const clearUser = () => {
    setUser({ name: '', last_name: '', email: '', token: '' });
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}