import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Contenido específico de la página */}
      <Link href="/event-detail">View Event Details</Link>
    </div>
  );
}
