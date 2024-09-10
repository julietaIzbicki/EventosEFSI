"use client";
import styles from './signIn.module.css';
import Navbar from '../components/Navbar/navbar'; 
import { useRouter } from 'next/navigation';
import Button from '../components/Button/button'
import Input from '../components/Input/input'



export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    router.push('/home');
  };

  return (
    <div>
      <Navbar>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Regístrate</h1>
            <form onSubmit={handleSubmit}>
              <Input>Username</Input>
              <Input>Email</Input>
              <Input>Password</Input>
              
              <Button>Registrarme</Button>
            </form>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
