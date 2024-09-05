import styles from './contacto.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>Email: este@ort</p>
        <p>Phone: +1111</p>
      </main>
    </div>
  );
}