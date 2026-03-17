import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Audiences from './components/Audiences';
import HowItWorks from './components/HowItWorks';
import StudioExperience from './components/StudioExperience';
import BookingSection from './components/Booking/BookingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Audiences />
        <HowItWorks />
        <StudioExperience />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
