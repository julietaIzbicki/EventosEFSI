import styles from "./logIn.css";
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
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
            <Link href="./home">Ingresar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
