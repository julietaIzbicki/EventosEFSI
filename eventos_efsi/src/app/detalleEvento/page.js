"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './detalle.module.css'; 
import Navbar from '../components/Navbar/navbar';
import Button from '../components/Button/button';
import { eventDetails } from '@/src/service/EventService';

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query; // Obtiene el ID de la URL
  const [eventDetail, setEventDetail] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEventDetail = async () => {
        try {
          const detailResponse = await eventDetails(id);
          setEventDetail(detailResponse);
        } catch (error) {
          console.error('Error fetching event details:', error);
        }
      };
      fetchEventDetail();
    }
  }, [id]);

  if (!eventDetail) return <p>Cargando...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>{eventDetail.name}</h1>
          <p className={styles.details}>{eventDetail.description}</p>
          <Button className={styles.registerButton}>Register</Button>
        </div>
      </div>
    </div>
  );
}