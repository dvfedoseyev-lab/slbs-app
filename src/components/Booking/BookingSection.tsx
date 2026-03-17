import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SlotPicker from './SlotPicker';
import BookingForm from './BookingForm';
import { CheckCircle } from 'lucide-react';

export type BookingData = {
  location: string;
  date: Date | null;
  slot: { startTime: string; endTime: string } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customerType: string;
  skillLevel: string;
  bookingPurpose: string;
  preferredTime: string;
  usageFrequency: string;
  notes: string;
};

const initialData: BookingData = {
  location: 'SLBS Pilot Studio - Boca Raton',
  date: new Date(),
  slot: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  customerType: '',
  skillLevel: '',
  bookingPurpose: '',
  preferredTime: '',
  usageFrequency: '',
  notes: ''
};

export default function BookingSection() {
  const [step, setStep] = useState<'slot' | 'form' | 'success'>('slot');
  const [data, setData] = useState<BookingData>(initialData);

  const handleSlotSelect = (date: Date, slot: { startTime: string; endTime: string }) => {
    setData({ ...data, date, slot });
    setStep('form');
  };

  const handleFormSubmit = (formData: Partial<BookingData>) => {
    const finalData = { ...data, ...formData, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    
    // Mock API Save
    console.log('--- NEW BOOKING LEAD ---');
    console.log(JSON.stringify(finalData, null, 2));
    
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('slbs_leads') || '[]');
    localStorage.setItem('slbs_leads', JSON.stringify([...existing, finalData]));

    setStep('success');
  };

  const resetBooking = () => {
    setData(initialData);
    setStep('slot');
  };

  return (
    <section id="booking" className="py-24 bg-brand-surface relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Reserve Your Court</h2>
          <p className="text-white/60">Pilot interest is now open. Select a time to request your session.</p>
        </div>

        <div className="bg-brand-dark rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            {step === 'slot' && (
              <motion.div
                key="slot"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <SlotPicker 
                  selectedDate={data.date} 
                  onSelect={handleSlotSelect} 
                  location={data.location}
                />
              </motion.div>
            )}

            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <BookingForm 
                  data={data} 
                  onSubmit={handleFormSubmit} 
                  onBack={() => setStep('slot')} 
                />
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Session Request Received</h3>
                <p className="text-xl text-white/80 mb-2">This is a pilot test version of SLBS.</p>
                <p className="text-white/60 mb-8">We'll contact you when this location officially opens. Limited pilot availability.</p>
                <button 
                  onClick={resetBooking}
                  className="text-brand-orange hover:text-orange-400 font-medium underline underline-offset-4"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
