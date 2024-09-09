import Link from 'next/link';
import './globals.css'; 
import styles from './page.module.css';
import Navbar from './components/navbar';


export default function Home() {
  return (
    <Navbar>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>M&J Events</h1>
        <p>¡Bienvenida a las pagina de las fiestas mas copadas!</p>
        <div className={styles.buttonGroup}>
          <Link href="/logIn"><button className={styles.button}>Iniciar sesión</button></Link>
          <Link href="/signIn"><button className={styles.button}>Registrarse</button></Link>
        </div>
      </div>
    </div>
    </Navbar>
  );
}
