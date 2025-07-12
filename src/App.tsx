import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ParticleBackground from './components/ParticleBackground';
import FreeAI from './components/FreeAI';
import About from './components/About';
import PremiumPlans from './components/PremiumPlans';
import ExpertConsultancy from './components/ExpertConsultancy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground/>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FreeAI/>
      <Services/>
      <About/>
      <PremiumPlans/>
      <ExpertConsultancy/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;