import React from 'react';
import { useModal } from '../../context/ModalContext';

const HeroSection = () => {
  const { openModal } = useModal();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-container">
          <img src="/logo.png" alt="MyBigBreak Logo" className="logo-image" />
          <h1 className="offer-text">
            Transform Your Career with a <span className="discount-text">Professional Resume</span>
          </h1>
          <button 
            className="cta-button"
            onClick={openModal}
          >
            Get Started Now
          </button>
        </div>
        <div className="right-container">
          <img src="/hero-image.png" alt="Resume" className="hero-image" />
        </div>
      </div>
      <div className="services-overview">
        <h4>Our Services</h4>
        <div className="services-container">
          <div className="service-item">
            <img src="/resume-icon.png" alt="Resume Writing" />
            <p>Resume Writing</p>
          </div>
          <div className="service-item">
            <img src="/cv-icon.png" alt="CV Writing" />
            <p>CV Writing</p>
          </div>
          <div className="service-item">
            <img src="/linkedin-icon.png" alt="LinkedIn Profile" />
            <p>LinkedIn Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 