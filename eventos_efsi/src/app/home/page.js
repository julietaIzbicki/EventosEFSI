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
      try {
        const eventsResponse = await event();
        console.log('eventsResponse:', eventsResponse); 
        if (eventsResponse.success) {
          setEvents(eventsResponse.response); 
        } else {
          console.error('No se pudieron recuperar los eventos.');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (id) => {
    router.push(`/detalleEvento/${id}`);
  };

  return (
    <>
      <Navbar />
      <main className={styles.eventsContainer}>
        <h1 className={styles.eventsTitle}>Eventos</h1>
        <ul className={styles.eventsList}>
          {Array.isArray(events) && events.length > 0 ? (
            events.map(event => (
              <li key={event.id} className={styles.eventItem}>
                <Content
                  title={event.name}        // Asegúrate de que "name" es una propiedad válida
                  date={event.start_date}   // Asegúrate de que "start_date" es una propiedad válida
                  location={event.category_name} // Asegúrate de que "category_name" es una propiedad válida
                  onClick={() => handleEventClick(event.id)}
                />
              </li>
            ))
          ) : (
            <p>No hay eventos disponibles.</p> // Mensaje si no hay eventos
          )}
        </ul>
      </main>
    </>
  );
}