"use client";
import React, { createContext, useState, useContext } from 'react';
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const updateUser = (updates) => {
    setUser(prevUser => ({ ...prevUser, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
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