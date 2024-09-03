// import styles from '../styles/contact.module.css';

export default function Contact() {
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
        <h1>Contact Us</h1>
        <p>Email: contact@mysite.com</p>
        <p>Phone: +123 456 7890</p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 MySite</p>
      </footer>
    </div>
  );
}