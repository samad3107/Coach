import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qualifications from './components/Qualifications';
import TacticalAnalysis from './components/TacticalAnalysis';
import PlayingCareer from './components/PlayingCareer';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Qualifications />
        <TacticalAnalysis />
        <PlayingCareer />
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}