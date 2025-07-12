import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ParticleBackground from './components/ParticleBackground';
import FreeAI from './components/FreeAI';
import About from './components/About';
import PremiumPlans from './components/PremiumPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground/>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FreeAI/>
      <About/>
      <PremiumPlans/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;