import styles from './contacto.module.css';
import Navbar from '../components/Navbar/navbar';

export default function Contact() {
  return (<>
    <Navbar/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.mainTitle}>¡Contáctanos!</h1>
          <p className={styles.mainParagraph}>Email: <a className={styles.mainLink} href="mailto:este@ort">esta@ort.ar</a></p>
          <p className={styles.mainParagraph}>Teléfono: <a className={styles.mainLink} href="tel:+1111">+1111</a></p>
          <p className={styles.mainParagraph}>Dirección: <a className={styles.mainLink} href="tel:+1111">Big Pizza de maiu</a></p>
        </main>
      </div>
  </>
  );
}