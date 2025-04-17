import React from "react";
import HeroSection from "./sections/HeroSection";
import WhyResumeSection from "./sections/WhyResumeSection";
import ResumeTipsSection from "./sections/ResumeTipsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FaqSection from "./sections/FaqSection";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import FloatingContact from "./FloatingContact";
import BlockCTA from "./BlockCTA";
import { ModalProvider } from "../context/ModalContext.jsx";
import "../styles.css";
import SamplesSection from "./sections/SamplesSection.jsx";
import ResumeHighlights from "./sections/ResumeHighlights.jsx";

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
        <section id="resume-tips">
          <ResumeTipsSection />
        </section>
        {/* <section id="samples">
          <SamplesSection />
        </section> */}
        {/* <section id="higlights">
          <ResumeHighlights />
        </section> */}

        <section id="how-it-works">
          <HowItWorksSection />
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
