import styles from './detalle.css';

export default function EventDetail() {
  return (
    <div className={styles.container}>
    
      <main className={styles.main}>
        <h1>Evento Title</h1>
        <p>Event Details</p>
        <button className={styles.registerButton}>Register</button>
      </main>
    </div>
  );
}
