"use client";
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/src/service/UserService';
import styles from './logIn.module.css';
import Navbar from '../components/Navbar/navbar';
import Button from '../components/Button/button';
import Input from '../components/Input/input';
import InputPass from '../components/Input/inputPass';
import { useUser } from '../context/UserContext';

const Login = () => {
  const { updateUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      const result = await login(email, password);
      updateUser({ name: result.first_name, last_name: result.last_name, email: result.username });       
      router.push('/home');
    } catch (error) {
      setError("Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.");
      console.error(error);
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              required
            />
            <InputPass
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
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