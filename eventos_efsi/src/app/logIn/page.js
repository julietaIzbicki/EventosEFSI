"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/src/service/UserService';
import styles from './logIn.module.css';
import Navbar from '../components/Navbar/navbar';
import Button from '../components/Button/button';
import Input from '../components/Input/input';
import InputPass from '../components/Input/inputPass';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(email);
      console.log(password);
      const result = await login(email, password);
      if (result.success) {
        const token = result.token; 
        localStorage.setItem('token', token);

        /* ----> cuando necesites acceder al token, puedes utilizar el método
        const token = localStorage.getItem('token'); 
        if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } */
        router.push('/home');
      } else {
        setError("Usuario o contraseña incorrecta, vuelve a ingresar los datos.");
      }
    } catch (error) {
      setError("Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.");
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Inicia Sesión</h1>
          <form onSubmit={handleSubmit}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
            />
            <InputPass
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Button>Ingresar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;