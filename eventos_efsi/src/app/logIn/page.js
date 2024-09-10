"use client";

import styles from './logIn.module.css';
import Navbar from '../components/Navbar/navbar'
import { useRouter } from 'next/navigation';
import Button from '../components/Button/button'
import Input from '../components/Input/input'
import InputPass from '../components/Input/inputPass'

export default function Login() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    router.push('/home');
  };

  return (
    <div>
      <Navbar/>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Inicia Sesión</h1>
            <form onSubmit={handleSubmit}>
              <Input>Username</Input>
              <InputPass>Password</InputPass>

              <Button>Ingresar</Button>
            </form>
          </div>
        </div>
    </div>
  );
}