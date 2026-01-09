import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Qualification } from './components/Qualification';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Direct link to WhatsApp for all buttons
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/id2lq0', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past the first 500px, 
      // but hide it when they reach the actual contact section to avoid redundancy
      const contactSection = document.getElementById('contact');
      const contactRect = contactSection?.getBoundingClientRect();
      const heroPassed = window.scrollY > 500;
      const contactInView = contactRect ? contactRect.top < window.innerHeight : false;

      setShowStickyCta(heroPassed && !contactInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-brand-midnight min-h-screen text-white selection:bg-brand-electric selection:text-white">
      {/* Navigation Bar (Minimal) */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl left-1/2 -translate-x-1/2">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/HTrKLxWN/AMPLIFY-WHITE.png" 
            alt="AMPLIFY Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
        <button 
          onClick={handleWhatsAppClick} 
          className="hidden sm:block text-sm font-bold uppercase tracking-widest hover:text-brand-electric transition-colors"
        >
          Contact Us
        </button>
      </nav>

      {/* Main Sections */}
      <Hero onCtaClick={handleWhatsAppClick} />
      <Services />
      <Qualification />
      <ContactForm />

      <Footer />

      {/* Persistent Mobile/Tablet Sticky CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full p-4 bg-brand-midnight/90 backdrop-blur-md border-t border-white/10 z-50 md:hidden flex justify-center shadow-2xl"
          >
            <Button onClick={handleWhatsAppClick} size="md" fullWidth>
              Chat on WhatsApp
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Desktop Floating Sticky CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="hidden md:block fixed bottom-8 right-8 z-50"
          >
            <Button onClick={handleWhatsAppClick} size="lg" className="shadow-2xl">
              Start Promotion
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}