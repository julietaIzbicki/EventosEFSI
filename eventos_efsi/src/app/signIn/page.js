//// import styles from '../styles/signup.module.css';

export default function Signup() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>MySite</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder="Username" className={styles.inputField} required />
            <input type="email" placeholder="Email" className={styles.inputField} required />
            <input type="password" placeholder="Password" className={styles.inputField} required />
            <button type="submit" className={styles.submitButton}>Sign Up</button>
          </form>
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 MySite</p>
      </footer>
    </div>
  );
}
