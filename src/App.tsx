import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import AboutPage from './components/About';
import ContactPage from './pages/Contact';
import ExpertConsultancyPage from './components/ExpertConsultancy';
import FreeAIPage from './components/FreeAI';
import PremiumPlansPage from './components/PremiumPlans';
import ServicesMobile from './components/ServicesMobile';
import ServicesPage from './pages/Services';
import Services2 from './components/Services2';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <ParticleBackground/>
        <div className="flex">
          <Navbar />
          <div className="flex-1 w-full md:pl-56">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <HowItWorks />
                  <FreeAI/>
                  <Services2/>
                  {/* <Services/> */}
                  {/* <ServicesMobile/> */}
                  <About/>
                  <PremiumPlans/>
                  <ExpertConsultancy/>
                  <Contact/>
                  <Footer/>
                </>
              } />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expert-consultancy" element={<ExpertConsultancyPage />} />
              <Route path="/free-ai-consultancy" element={<FreeAIPage />} />
              <Route path="/premium-plans" element={<PremiumPlansPage />} />
              <Route path="/services" element={<ServicesPage />} />
             
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;