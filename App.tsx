
import React, { useState, useEffect, Suspense } from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import EmotionalConnection from './components/EmotionalConnection';
import Qualification from './components/Qualification';
import Solution from './components/Solution';
import Deliverables from './components/Deliverables';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalOffer from './components/FinalOffer';
import Footer from './components/Footer';
import GeminiExpert from './components/GeminiExpert';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Problems />
      <EmotionalConnection />
      <Qualification />
      <Solution />
      <Deliverables />
      <Transformation />
      <GeminiExpert />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalOffer />
      <Footer />

      {/* Sticky CTA for Mobile/Desktop */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 transform md:hidden z-50 ${
          showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-all text-sm uppercase tracking-wider"
        >
          Aproveitar Oferta Agora
        </button>
      </div>
    </div>
  );
};

export default App;
