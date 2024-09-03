//import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>MySite</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/contact">Contact</a>
          <div className={styles.userInfo}>
            <span className={styles.userName}>User</span>
            <a href="#" className={styles.logoutButton}>Logout</a>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Event List</h1>
        <div className={styles.eventList}>
          <div className={styles.eventCard}>
            <h2>Event Title</h2>
            <p>Event Description</p>
            <a href="/event-detail">View Details</a>
          </div>
          {/* More event cards */}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 MySite</p>
      </footer>
    </div>
  );
}
