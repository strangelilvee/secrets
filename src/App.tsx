import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Memories } from './components/Memories';
import { About } from './components/About';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 pb-16 relative overflow-hidden font-dosis">
      <div className="fixed inset-0 bg-noise pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20 pointer-events-none"></div>
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}