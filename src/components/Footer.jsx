import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import vibexLogo from '../assets/vibex_logo.png';
import './Footer.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#" className="footer-logo font-display" onClick={handleBackToTop}>
            <img src={logoImg} alt="K.CUTS Logo" className="logo-img-footer" />
          </a>
          <p className="footer-tagline text-muted">
            Cinematic Video Editing · Mumbai, India
          </p>
        </div>

        <div className="footer-center">
          <div className="social-links">
            <a href="https://www.instagram.com/karim_.bruh/" target="_blank" rel="noopener noreferrer" className="instagram-link" aria-label="Instagram - Karim Bruh">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="footer-instagram-handle">@karim_.bruh</span>
            </a>
            <a href="https://www.instagram.com/k_cuts_edits/" target="_blank" rel="noopener noreferrer" className="instagram-link" aria-label="Instagram - K.Cuts Edits">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="footer-instagram-handle">@k_cuts_edits</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-right-content">
            <p className="copyright text-muted font-mono">
              K.CUTS © 2026 · All Rights Reserved
            </p>
            <div className="vibex-credit-wrapper">
              <a href="https://vibex-technologies.com/" target="_blank" rel="noopener noreferrer" className="vibex-credit font-mono">
                Developed by <img src={vibexLogo} alt="VibeX Technologies Logo" className="vibex-logo-img" /> <span>VibeX Technologies</span>
              </a>
              <a href="https://vibex-technologies.com/" target="_blank" rel="noopener noreferrer" className="vibex-visit-btn font-mono">
                Visit Site
              </a>
            </div>
          </div>
          <button className="back-to-top-btn" onClick={handleBackToTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="floating-back-to-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
