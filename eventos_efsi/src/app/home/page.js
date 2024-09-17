"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { event } from '@/src/service/EventService';
import styles from './home.module.css';
import Navbar from '../components/Navbar/navbar';
import Content from '../components/Content/content'; 

export default function Events() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsResponse = await event();
      console.log('eventsResponse:', eventsResponse); // Agrega este console.log
      setEvents(eventsResponse);
    };
    fetchEvents();
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
        {Array.isArray(events) && events.map(event => (
          <li key={event.id} className={styles.eventItem}>
            <Content
              title={event.name}
              date={event.start_date}
              location={event.category_name}
              onClick={() => handleEventClick(event.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  </>
  );
}