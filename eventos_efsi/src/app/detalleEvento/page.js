"use client";

import styles from './detalle.module.css'; 
import Navbar from '../components/Navbar/navbar';
import Button from '../components/Button/button';

export default function EventDetail() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Evento Title</h1>
          <p className={styles.details}>Event Details</p>
          <Button className={styles.registerButton}>Register</Button>
        </div>
      </div>
    </div>
  );
}
