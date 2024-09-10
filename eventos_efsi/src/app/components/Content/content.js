"use cliente"

import React from 'react';
import styles from './content.module.css'; 

const Content = ({ title, date, location, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDate}>Fecha: {date}</p>
      <p className={styles.cardLocation}>Ubicación: {location}</p>
    </div>
  );
};

export default Content;
