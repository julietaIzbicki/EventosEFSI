"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './userInfo.module.css'; 

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
          throw new Error('No hay usuario autenticado');
        }
        const response = await axios.get(`http://yuke.ddns.net:3103/api/dai/user/${storedUser.id}`);
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Información del Usuario</h1>
      <p><strong>Nombre:</strong> {user.first_name} {user.last_name}</p>
      <p><strong>Email:</strong> {user.username}</p>
    </div>
  );
};

export default UserInfo;