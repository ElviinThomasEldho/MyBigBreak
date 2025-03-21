import React from 'react';
import { Link } from 'react-scroll';

const FloatingContact = () => {
  return (
    <Link
      to="footer"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="floating-contact"
    >
      <div className="contact-icon">
        <i className="fas fa-envelope"></i>
      </div>
    </Link>
  );
};

export default FloatingContact; 