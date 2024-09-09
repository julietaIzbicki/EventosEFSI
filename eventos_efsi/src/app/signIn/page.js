"use client";
import styles from './signIn.module.css';
import Navbar from '../components/navbar'; 
import { useRouter } from 'next/navigation';

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
              <input
                type="text"
                placeholder="Username"
                className={styles.inputField}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.inputField}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Registrarme
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
