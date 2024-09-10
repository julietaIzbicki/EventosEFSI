"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './home.module.css';
import Navbar from '../components/Navbar/navbar';
import Content from '../components/Content/content'; 

export default function Events() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setEvents([
      { id: 1, title: "Festival de Música Electrónica", date: "2024-10-01", location: "Madrid" },
      { id: 2, title: "Festival punk", date: "2024-11-01", location: "Londres" }

    ]);
  }, []);

  const handleEventClick = (id) => {
    router.push('/detalleEvento');
  };

  return (
    <>
      <Navbar />
      <main className={styles.eventsContainer}>
        <h1 className={styles.eventsTitle}>Eventos</h1>
        <ul className={styles.eventsList}>
          {events.map(event => (
            <li key={event.id} className={styles.eventItem}>
              <Content
                title={event.title}
                date={event.date}
                location={event.location}
                onClick={() => handleEventClick(event.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
