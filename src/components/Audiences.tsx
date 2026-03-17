import React from 'react';
import { motion } from 'motion/react';
import { Target, Users2, User, Activity } from 'lucide-react';

const audiences = [
  {
    icon: Target,
    title: "Independent Trainers",
    description: "Take control of your environment. No more fighting for court space or dealing with gym politics. Focus entirely on your client.",
    tags: ["1-on-1 Coaching", "Small Groups", "Professional Vibe"]
  },
  {
    icon: Users2,
    title: "Parents & Families",
    description: "A safe, calm, and private space to rebound for your kid or teach them the game without the chaos of a public park or rec center.",
    tags: ["Safe Environment", "Quality Time", "Flexible Hours"]
  },
  {
    icon: User,
    title: "Individual Players",
    description: "Get your reps in. Perfect your shot, work on your handle, and train at your own pace without interruptions.",
    tags: ["Skill Work", "Shooting Machine", "Focus"]
  },
  {
    icon: Activity,
    title: "Adult Rec Players",
    description: "Skip the aggressive pickup games. Book a court with a few friends for a private 2-on-2 or 3-on-3 session.",
    tags: ["Private Runs", "No Waiting", "Premium Court"]
  }
];

export default function Audiences() {
  return (
    <section id="audiences" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built For Your Game</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Whether you're coaching the next generation or just getting a sweat in, SLBS is designed for focused basketball.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((aud, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-brand-surface border border-white/5 hover:border-brand-orange/50 transition-all duration-300 hover:bg-brand-surface-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
                <aud.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{aud.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">{aud.description}</p>
              <div className="flex flex-wrap gap-2">
                {aud.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 text-sm rounded-full bg-brand-dark border border-white/10 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
