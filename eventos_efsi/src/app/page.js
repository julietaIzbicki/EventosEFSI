"use client";

import React, { useState } from 'react'; 
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/navbar";
import Button from "./components/Button/button";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user, clearUser } = useUser();
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>M&J Events</h1>
          <p>¡Bienvenida a las pagina de las fiestas mas copadas!</p>
          <div className={styles.buttonGroup}>
            {user?.name == "" && (
              <>
                <Link href="/logIn">
                  <Button>Iniciar sesión</Button>
                </Link>
                <Link href="/signIn">
                  <Button>Registrarme</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}