import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BookingData } from './BookingSection';

interface BookingFormProps {
  data: BookingData;
  onSubmit: (data: Partial<BookingData>) => void;
  onBack: () => void;
}

export default function BookingForm({ data, onSubmit, onBack }: BookingFormProps) {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClass = "w-full bg-brand-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors";
  const labelClass = "block text-sm font-medium text-white/70 mb-2";

  return (
    <div>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to times
      </button>

      <div className="mb-8 p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex justify-between items-center">
        <div>
          <p className="text-sm text-brand-orange font-medium mb-1">Selected Session</p>
          <p className="font-display font-bold text-lg">
            {data.date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-lg">{data.slot?.startTime} - {data.slot?.endTime}</p>
          <p className="text-sm text-white/50">60 mins</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>First Name *</label>
            <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Email *</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>I am a... *</label>
            <select required name="customerType" value={formData.customerType} onChange={handleChange} className={inputClass}>
              <option value="">Select option</option>
              <option value="Independent Trainer">Independent Trainer</option>
              <option value="Parent / Family">Parent / Family</option>
              <option value="Individual Player">Individual Player</option>
              <option value="Small Group">Small Group</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Skill Level *</label>
            <select required name="skillLevel" value={formData.skillLevel} onChange={handleChange} className={inputClass}>
              <option value="">Select option</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Booking Purpose *</label>
            <select required name="bookingPurpose" value={formData.bookingPurpose} onChange={handleChange} className={inputClass}>
              <option value="">Select option</option>
              <option value="Solo training">Solo training</option>
              <option value="Parent + child session">Parent + child session</option>
              <option value="Private coaching session">Private coaching session</option>
              <option value="Small group workout">Small group workout</option>
              <option value="1-on-1 / 2-on-2 / 3-on-3 play">1-on-1 / 2-on-2 / 3-on-3 play</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>How often would you use SLBS? *</label>
            <select required name="usageFrequency" value={formData.usageFrequency} onChange={handleChange} className={inputClass}>
              <option value="">Select option</option>
              <option value="1x per week">1x per week</option>
              <option value="2-3x per week">2–3x per week</option>
              <option value="4+ times per week">4+ times per week</option>
              <option value="Occasionally">Occasionally</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Preferred Training Time (General) *</label>
          <select required name="preferredTime" value={formData.preferredTime} onChange={handleChange} className={inputClass}>
            <option value="">Select option</option>
            <option value="Early morning">Early morning</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Late night">Late night</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Notes / Goals</label>
          <textarea 
            name="notes" 
            value={formData.notes} 
            onChange={handleChange} 
            rows={3}
            placeholder="Tell us what kind of session you want..."
            className={inputClass}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl transition-all hover:glow-border mt-4"
        >
          Confirm Pilot Booking
        </button>
      </form>
    </div>
  );
}
