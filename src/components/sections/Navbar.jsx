import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    // { name: 'Services', to: 'services' },
    { name: 'Why Resume', to: 'why-resume' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Common Mistakes', to: 'common-mistakes' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/src/img/logo_full_color.png" alt="MyBigBreak Logo" className="logo-image" />
        </div>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
