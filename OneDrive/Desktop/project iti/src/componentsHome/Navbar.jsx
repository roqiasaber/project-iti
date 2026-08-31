import React from 'react';
import { Layers } from 'lucide-react';
import '../componentsHome.css/Navbar.css';

export default function Navbar({ setCurrentPage }) {
  return (
    <header>
      <div>
        <div><Layers /></div>
        <span>QueueFlow</span>
      </div>

      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('services')}>Services</button>
        <a href="#track">Track Queue</a>
        <a href="#">My Bookings</a>
      </nav>

      <div>
        <button onClick={() => setCurrentPage('login')}>Sign In</button>
        <button onClick={() => setCurrentPage('login')}>Get Started</button>
      </div>
    </header>
  );
}