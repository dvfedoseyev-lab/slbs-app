import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Boca Raton Pilot Now Open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Private Courts.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300 glow-text">
              On Your Time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            SLBS gives players, families, and private trainers access to premium half-court basketball studios with digital booking and private access. No crowds. No waiting. Just hoops.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={scrollToBooking}
              className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all hover:glow-border"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#concept"
              className="px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
