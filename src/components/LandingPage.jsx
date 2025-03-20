import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyResumeSection from './sections/WhyResumeSection';
import CommonMistakesSection from './sections/CommonMistakesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import Footer from './sections/Footer';
import '../styles.css';

const LandingPage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <WhyResumeSection />
      <CommonMistakesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default LandingPage; 