"use client";
import { register } from '@/src/service/UserService';
import React, { useState } from 'react';
import styles from './signIn.module.css';
import Navbar from '../components/Navbar/navbar'; 
import { useRouter } from 'next/navigation';
import Button from '../components/Button/button'
import Input from '../components/Input/input'
import InputPass from '../components/Input/inputPass';

export default function SignIn() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(nombre, apellido, username, password);
      const response = await register(nombre, apellido, username, password);
      if (response.success) {
        const token = response.token;
        localStorage.setItem('token', token); // guardar el token en localStorage
        router.push('/home');
      } else {
        setError("Error al registrar usuario. Inténtalo de nuevo más tarde.");
      }
    } catch (error) {
      setError("Error al registrar usuario. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div>
      <Navbar/>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Regístrate</h1>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
              />
              <Input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
              />
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username@gmail.com"
              />
              <InputPass
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Button>Registrarme</Button>
              {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
          </div>
        </div>
    </div>
  );
}