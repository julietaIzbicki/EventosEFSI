/* eslint-disable @next/next/no-img-element */
"use client";
import Link from 'next/link';
import styles from './nav.module.css'; 
import logo from "../../../img/logo.jpg"
const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'; 
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo.src} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>M&J Events</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}> 
            <li className={styles.navItem}><Link href="/">Home</Link></li>
            <li className={styles.navItem}><Link href="/contacto">Contacto</Link></li>
            <li className={styles.navItem}><Link href="/usuario">Usuario</Link></li>
          </ul>
        </nav>
        <div className={styles.userInfo}>
          <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;