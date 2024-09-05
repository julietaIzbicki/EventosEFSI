import styles from './home.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>Eventos</h1>
        <div className={styles.eventList}>
          <div className={styles.eventCard}>
            <h2>Evento</h2>
            <a href="/event-detail">Detalle evento</a>
          </div>
        </div>
      </main>
    </div>
  );
}
