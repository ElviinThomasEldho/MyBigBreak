import React from 'react';
import '../../styles.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/src/img/logo_full_color.png" alt="MyBigBreak.in" />
        </div>
        <div className="social-links">
          Follow Us On
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a> */}
          <a href="https://www.linkedin.com/company/mybigbreak/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://g.co/kgs/E2fYsEy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        © 2025 MyBigBreak.in. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 