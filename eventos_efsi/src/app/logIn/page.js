import styles from "./logIn.css";

/*
<p>Don't have an account? <a href="../signIn/signIn.js">Sign Up</a>
</p>
*/

export default function Login() {
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
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              className={styles.inputField}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 MySite</p>
      </footer>
    </div>
  );
}
