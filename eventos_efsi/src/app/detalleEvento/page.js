// import styles from '../styles/event-detail.module.css';

export default function EventDetail() {
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
        <h1>Event Title</h1>
        <p>Event Details</p>
        <button className={styles.registerButton}>Register</button>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 MySite</p>
      </footer>
    </div>
  );
}
