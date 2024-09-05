import styles from './singIn.css';

export default function Signup() {
  return (
    <div className={styles.container}>
      
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
    </div>
  );
}
