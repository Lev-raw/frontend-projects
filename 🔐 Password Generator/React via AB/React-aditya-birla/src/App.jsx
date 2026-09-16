import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Showtime from './components/Showtime';
import PerformanceSpaces from './components/PerformanceSpaces';
import LegacyLibrary from './components/LegacyLibrary';
import CulinaryExperience from './components/CulinaryExperience';
import SpaceDirectory from './components/SpaceDirectory';
import PulsePage from './components/PulsePage';
import Insider from './components/Insider';
import Footer from './components/Footer';
import './components/Sections.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Showtime />
      <PerformanceSpaces />
      <LegacyLibrary />
      <CulinaryExperience />
      <SpaceDirectory />
      <PulsePage />
      <Insider />
      <Footer />
    </div>
  );
}

export default App;
