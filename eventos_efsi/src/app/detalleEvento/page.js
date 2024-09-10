"use client";

import styles from './detalle.module.css'; 
import Navbar from '../components/Navbar/navbar';
import Button from '../components/Button/button';

export default function EventDetail() {
  return (
    <div>
      <Navbar>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Evento Title</h1>
            <p className={styles.details}>Event Details</p>
            <Button>Register</Button>
          </main>
        </div>
      </Navbar>
    </div>
  );
}
