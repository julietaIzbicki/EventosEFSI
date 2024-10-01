"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: '', last_name: '', email: '', password: '' });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUser = (updates) => {
    setUser(prevUser => {
      const newUser = { ...prevUser, ...updates };
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    });
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
  if (!context.user.email) {
    return { user: null };
  }
  return context;
}