import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar as CalendarIcon } from 'lucide-react';

interface SlotPickerProps {
  selectedDate: Date | null;
  location: string;
  onSelect: (date: Date, slot: { startTime: string; endTime: string }) => void;
}

export default function SlotPicker({ selectedDate, location, onSelect }: SlotPickerProps) {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

  const generateSlots = (date: Date) => {
    const slots = [];
    let current = new Date(date);
    current.setHours(6, 0, 0, 0); // Start at 6:00 AM
    
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    const now = new Date();

    while (current < end) {
      const slotEnd = new Date(current.getTime() + 60 * 60000);
      if (slotEnd > end) break;

      const isPast = current < now;
      
      // Deterministic pseudo-random unavailability based on time to simulate realism
      const seed = current.getHours() + current.getDate();
      const isRandomlyUnavailable = (seed % 4 === 0) || (seed % 7 === 0);

      slots.push({
        id: current.toISOString(),
        startTime: current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        endTime: slotEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAvailable: !isPast && !isRandomlyUnavailable,
        rawDate: new Date(current)
      });

      // 15 min buffer
      current = new Date(slotEnd.getTime() + 15 * 60000);
    }
    return slots;
  };

  const slots = useMemo(() => generateSlots(currentDate), [currentDate]);

  const nextDay = () => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 1);
    setCurrentDate(next);
  };

  const prevDay = () => {
    const prev = new Date(currentDate);
    const today = new Date();
    today.setHours(0,0,0,0);
    
    if (prev > today) {
      prev.setDate(prev.getDate() - 1);
      setCurrentDate(prev);
    }
  };

  const isToday = () => {
    const today = new Date();
    return currentDate.getDate() === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-white/60 mb-8 pb-6 border-b border-white/10">
        <MapPin className="w-5 h-5 text-brand-orange" />
        <span className="font-medium">{location}</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={prevDay} 
          disabled={isToday()}
          className="p-2 rounded-full hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-5 h-5 text-brand-orange" />
          <span className="text-xl font-display font-bold">
            {currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </span>
        </div>

        <button 
          onClick={nextDay}
          className="p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {slots.map((slot) => (
          <button
            key={slot.id}
            disabled={!slot.isAvailable}
            onClick={() => onSelect(currentDate, { startTime: slot.startTime, endTime: slot.endTime })}
            className={`
              py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 border
              ${slot.isAvailable 
                ? 'bg-brand-surface border-white/10 hover:border-brand-orange text-white hover:bg-brand-orange/10 hover:shadow-[0_0_10px_rgba(255,85,0,0.2)]' 
                : 'bg-white/5 border-transparent text-white/30 cursor-not-allowed'}
            `}
          >
            {slot.startTime}
          </button>
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-surface border border-white/20" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white/5" />
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
}
