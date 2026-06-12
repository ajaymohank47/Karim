import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container container">
          <a href="#" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'hero')}>
            <img src={logoImg} alt="K.CUTS Logo" className="logo-img" />
          </a>

          {/* Desktop Menu */}
          <div className="navbar-menu-wrapper">
            <div className="navbar-links">
              <a href="#work" onClick={(e) => handleLinkClick(e, 'work')}>Work</a>
              <span className="divider">·</span>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
              <span className="divider">·</span>
              <a href="#software-stack" onClick={(e) => handleLinkClick(e, 'software-stack')}>Software</a>
              <span className="divider">·</span>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
              <span className="divider">·</span>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
            </div>
            <button className="nav-cta-btn" onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          <a href="#work" onClick={(e) => handleLinkClick(e, 'work')}>Work</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
          <a href="#software-stack" onClick={(e) => handleLinkClick(e, 'software-stack')}>Software</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          <button className="nav-cta-btn mobile-cta" onClick={(e) => handleLinkClick(e, 'contact')}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
