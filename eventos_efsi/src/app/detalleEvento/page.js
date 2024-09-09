"use client";

import styles from './detalle.module.css'; 
import Navbar from '../components/navbar';

export default function EventDetail() {
  return (
    <div>
      <Navbar>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Evento Title</h1>
            <p className={styles.details}>Event Details</p>
            <button className={styles.registerButton}>Register</button>
          </main>
        </div>
      </Navbar>
    </div>
  );
}
