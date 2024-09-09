"use client";

import styles from './logIn.module.css';
import Navbar from '../components/navbar'; // Verifica que la ruta sea correcta
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    // Aquí puedes agregar lógica para verificar las credenciales si es necesario
    router.push('/home'); // Redirige al usuario a la página de inicio
  };

  return (
    <div>
      <Navbar>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Inicia Sesión</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
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
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </div>
  );
}