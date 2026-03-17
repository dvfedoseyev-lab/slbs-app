import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, ShieldX, Unlock, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="concept" className="py-24 bg-brand-surface relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-4 text-white/50">The Old Way</h2>
              <p className="text-xl text-white/80">Traditional gyms fail the focused athlete.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Users, text: "Crowded courts and unpredictable pickup games." },
                { icon: ShieldX, text: "Zero privacy for focused skill work or coaching." },
                { icon: Clock, text: "Leagues and team practices take priority." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-brand-dark/50 border border-white/5">
                  <div className="p-3 rounded-xl bg-white/5 text-white/50">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-white/70 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-4 text-brand-orange">The SLBS Way</h2>
              <p className="text-xl text-white">Your private court, exactly when you need it.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Unlock, text: "Private half-court studio with digital access." },
                { icon: CalendarCheck, text: "Instant online booking. 24/7 availability." },
                { icon: ShieldCheck, text: "Professional environment built for 1-6 people." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-brand-orange/10 border border-brand-orange/20">
                  <div className="p-3 rounded-xl bg-brand-orange/20 text-brand-orange">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-white mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
