"use cliente";
import Link from 'next/link';
import styles from './nav.module.css'; 
import logo from "../../img/logo.jpg"

const Navbar = ({ children }) => {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
          <img src={logo.src} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}> M&J Events</h1>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
               <li className={styles.navItem}><Link href="/">Home</Link></li>
              <li className={styles.navItem}><Link href="/contacto">Contacto</Link></li>
            </ul>
          </nav>
          <div className={styles.userInfo}>
            <span>Usuario</span> 
            <button className={styles.logoutButton}>Cerrar Sesión</button>
          </div>
        </header>
        
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    );
  };
  
  export default Navbar;
  