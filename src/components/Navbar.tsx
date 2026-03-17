import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-8 h-8 text-brand-orange" />
          <span className="font-display font-bold text-2xl tracking-tight">SLBS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#concept" className="hover:text-white transition-colors">Concept</a>
          <a href="#audiences" className="hover:text-white transition-colors">Who It's For</a>
          <a href="#experience" className="hover:text-white transition-colors">The Studio</a>
        </div>

        <button 
          onClick={scrollToBooking}
          className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:glow-border"
        >
          Book Session
        </button>
      </div>
    </motion.nav>
  );
}
