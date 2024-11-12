"use client";
import { useEffect } from 'react';
import styles from './userInfo.module.css'; 
import Navbar from '../components/Navbar/navbar';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';

const UserInfo = () => {
  const { user, token, clearUser } = useUser(); 
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Información del Usuario</h1>
        <p><strong>Nombre:</strong> {user.name} </p>
        <p><strong>Apellido:</strong> {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;