"use client";
import { useEffect, useState } from 'react';
import styles from '../detalle.module.css'; 
import Navbar from '../../components/Navbar/navbar';
import Button from '../../components/Button/button';
import { eventDetails } from '@/src/service/EventService';
import { useParams } from 'next/navigation';

export default function EventDetail() {
  const { id } = useParams();
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
          <p className={styles.eventInfo}>
            <span>Categoría: {eventDetail.event_category.name}</span>
            <span>Ubicación: {eventDetail.event_location.name}</span>
            <span>Fecha: {new Date(eventDetail.start_date).toLocaleDateString()}</span>
            <span>Duración: {eventDetail.duration_in_minutes} minutos</span>
            <span>Precio: ${eventDetail.price}</span>
            <span>Capacidad máxima: {eventDetail.max_assistance}</span>
          </p>
          <Button className={styles.registerButton}>Register</Button>
        </div>
      </div>
    </div>
  );
}