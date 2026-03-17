import React from 'react';
import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "Choose a Studio", desc: "Select your preferred SLBS location." },
  { num: "02", title: "Pick a Time", desc: "Find an available 60-minute slot that fits your schedule." },
  { num: "03", title: "Get Your Code", desc: "Receive a unique digital access code for your session." },
  { num: "04", title: "Show Up & Train", desc: "Unlock the door and enjoy your private court." }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-orange text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Seamless Access.</h2>
            <p className="text-xl opacity-80 font-medium">
              No front desk. No membership cards. Just book and play.
            </p>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-display font-black opacity-20 mb-2">{step.num}</div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="font-medium opacity-80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
