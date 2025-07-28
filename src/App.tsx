
import React from 'react';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import StorySection from './components/StorySection';
import HelpSection from './components/HelpSection';
import DonationForm from './components/DonationForm';
import BitcoinDonation from './components/BitcoinDonation'; // ✅ Import the new component
import TestimonialsSection from './components/TestimonialSection';
import ImageSection from './components/ImageSection';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <MissionSection />
      <StorySection />
      <HelpSection />
      <DonationForm />
      <BitcoinDonation /> {/* ✅ Add this line to display the Bitcoin donation section */}
      <TestimonialsSection />
      <ImageSection />
      <Footer />
    </div>
  );
}

export default App;
