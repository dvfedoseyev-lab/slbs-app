import React from 'react';
import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-brand-orange" />
          <span className="font-display font-bold text-xl tracking-tight text-white/80">SLBS</span>
        </div>
        
        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} Smart Local Basketball Studios. Pilot MVP.
        </p>
      </div>
    </footer>
  );
}
