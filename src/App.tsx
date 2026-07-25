import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import Services2 from './components/Services2';
import { useLandingScrollRestore } from './hooks/useLandingScrollRestore';

// Eager loaded landing sections
import AboutSection from './components/About';
import PremiumPlansSection from './components/PremiumPlans';
import ExpertConsultancySection from './components/ExpertConsultancy';
import ContactSection from './components/Contact';
import ServicesSection from './components/Services';
import ProductivitySection from './components/Productivity';

// Lazy loaded standalone page routes
const ContactPage = lazy(() => import('./pages/Contact'));
const ServicesPage = lazy(() => import('./pages/Services'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#021C2A]">
      <div className="w-8 h-8 border-2 border-[#B0EDF9] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  useLandingScrollRestore();

  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#021C2A] text-white flex flex-col justify-between">
        <ParticleBackground />
        <Navbar />
        <main className="w-full flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <HowItWorks />
                  <ProductivitySection />
                  <ServicesSection />
                  <AboutSection />
                  <PremiumPlansSection />
                  <ExpertConsultancySection />
                  <ContactSection />
                </>
              } />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/expert-consultancy" element={<ExpertConsultancySection />} />
              <Route path="/free-ai-consultancy" element={<ProductivitySection />} />
              <Route path="/premium-plans" element={<PremiumPlansSection />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;