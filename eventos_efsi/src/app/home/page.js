"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './home.module.css';
import Navbar from '../components/Navbar/navbar';

export default function Events() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setEvents([
      { id: 1, title: "Festival de Música Electrónica", date: "2024-10-01", location: "Madrid" }
    ]);
  }, []);

  const handleEventClick = (id) => {
    router.push('/detalleEvento');
  };

  return (
    <Navbar>
      <main className={styles.eventsContainer}>
        <h1 className={styles.eventsTitle}>Eventos</h1>
        <ul className={styles.eventsList}>
          {events.map(event => (
            <li key={event.id} className={styles.eventItem} onClick={() => handleEventClick(event.id)}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDate}>Fecha: {event.date}</p>
              <p className={styles.eventLocation}>Ubicación: {event.location}</p>
            </li>
          ))}
        </ul>
      </main>
    </Navbar>
  );
}
