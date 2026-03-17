import React from 'react';
import { motion } from 'motion/react';
import { Map, Wifi, Video, Lock } from 'lucide-react';

export default function StudioExperience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Abstract representation of the court */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-orange/20 rounded-full opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Studio Experience</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A premium, tech-enabled environment designed specifically for basketball training.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Map, title: "Pro Half-Court", desc: "Hardwood flooring, FIBA lines, and premium breakaway rim." },
            { icon: Lock, title: "Private Access", desc: "Smart lock entry. The space is 100% yours for the hour." },
            { icon: Video, title: "Smart Cameras", desc: "Optional recording to analyze your shot and movement." },
            { icon: Wifi, title: "Connected", desc: "High-speed WiFi and Bluetooth sound system included." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-brand-surface to-brand-dark border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 text-brand-orange">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
