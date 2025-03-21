import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyResumeSection from './sections/WhyResumeSection';
import CommonMistakesSection from './sections/CommonMistakesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import FloatingContact from './FloatingContact';
import BlockCTA from './BlockCTA';
import { ModalProvider } from '../context/ModalContext.jsx';
import '../styles.css';

const LandingPage = () => {
  return (
    <ModalProvider>
      <div className="page-container">
        <Navbar />
        <section id="hero">
          <HeroSection />
        </section>
        <section id="why-resume">
          <WhyResumeSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="common-mistakes">
          <CommonMistakesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <BlockCTA />
        <section id="footer">
          <Footer />
        </section>
        <FloatingContact />
      </div>
    </ModalProvider>
  );
};

export default LandingPage; 