import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero.png';
import stickerLogo from '../assets/sticker_logo.png';
import adnaanImg from '../assets/adnaan.png';
import fatimaImg from '../assets/fatima.jpg';
import shadanImg from '../assets/shadan.png';
import subhiImg from '../assets/subhi.png';
import './Hero.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Hero() {
  const headline = "Karim Ali Cuts";

  const creators = [
    { name: 'Adnaan', img: adnaanImg, metric: '+5.2M Views' },
    { name: 'Fatima', img: fatimaImg, metric: '85% Retention' },
    { name: 'Shadan', img: shadanImg, metric: '+120K Shares' },
    { name: 'Subhi', img: subhiImg, metric: 'Viral Edit' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 1.2
      }
    }
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background elements */}
      <div className="hero-grid-pattern" />
      <div className="hero-gradient-overlay" />

      {/* Ghost Typographic Background Layer */}
      <motion.div
        className="hero-ghost-text font-display"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        K.CUTS
      </motion.div>

      <div className="hero-container container">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow font-mono"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow-highlight">DaVinci Resolve Certified</span>
            <span className="eyebrow-divider"></span>
            <span className="eyebrow-highlight">Motion Graphics Editor</span>
            <span className="eyebrow-location">Mumbai, India</span>
          </motion.div>

          <motion.h1
            className="hero-title font-display"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headline.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="hero-word">
                {word.split("").map((char, charIdx) => (
                  <motion.span key={charIdx} variants={charVariants} className="hero-char">
                    {char}
                  </motion.span>
                ))}
                <span className="hero-space">&nbsp;</span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-subline text-muted"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Helping top creators and brands scale their audience through fast-paced, engaging storytelling.
          </motion.p>

          <motion.div
            className="hero-ctas"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <button className="btn btn-gold" onClick={() => handleScrollTo('work')}>
              See My Growth Case Studies
            </button>
            <button className="btn btn-outline" onClick={() => handleScrollTo('contact')}>
              Contact Now
            </button>
          </motion.div>

          {/* Instagram Social Links */}
          <motion.div
            className="hero-social-links font-mono"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="https://www.instagram.com/karim_.bruh/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <InstagramIcon size={20} />
              karim_.bruh
            </a>
            <span className="divider">·</span>
            <a href="https://www.instagram.com/k_cuts_edits/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <InstagramIcon size={20} />
              k_cuts_edits
            </a>
          </motion.div>
        </div>

        {/* Right Side: Karim's Portrait with Orbiting Creator Metric Badges */}
        <motion.div
          className="hero-portfolio-showcase"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Logo Showcase */}
          <div className="hero-portrait-frame logo-only-mode">
            {/* Animated Paint Splatter Background (matching reference image) */}
            <div className="logo-splash-bg">
              <svg viewBox="0 0 500 500" className="paint-splatter-svg">
                <defs>
                  {/* High quality paint splatter displacement filter */}
                  <filter id="paint-splatter" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                
                {/* Wrap in group with paint splatter displacement filter */}
                <g filter="url(#paint-splatter)">
                  {/* Overlapping colored blobs to match the reference image */}
                  <circle cx="170" cy="230" r="72" fill="#C8A850" className="splat-blob blob-red" />
                  <circle cx="270" cy="180" r="68" fill="#C8A850" className="splat-blob blob-yellow-top" />
                  <circle cx="340" cy="200" r="65" fill="#C8A850" className="splat-blob blob-green-top" />
                  <circle cx="370" cy="270" r="62" fill="#C8A850" className="splat-blob blob-purple" />
                  <circle cx="300" cy="320" r="68" fill="#C8A850" className="splat-blob blob-blue" />
                  <circle cx="240" cy="330" r="65" fill="#C8A850" className="splat-blob blob-green-bottom" />
                  <circle cx="180" cy="300" r="68" fill="#C8A850" className="splat-blob blob-orange" />
                  <circle cx="150" cy="260" r="58" fill="#C8A850" className="splat-blob blob-pink" />
                  <circle cx="260" cy="250" r="50" fill="#C8A850" className="splat-blob blob-center-red" />
                  <circle cx="230" cy="190" r="42" fill="#C8A850" className="splat-blob blob-orange-top" />
                  
                  {/* Small splatter droplets */}
                  <circle cx="95" cy="190" r="10" fill="#C8A850" className="splat-drop drop-1" />
                  <circle cx="105" cy="295" r="12" fill="#C8A850" className="splat-drop drop-2" />
                  <circle cx="390" cy="170" r="9" fill="#C8A850" className="splat-drop drop-3" />
                  <circle cx="430" cy="315" r="13" fill="#C8A850" className="splat-drop drop-4" />
                  <circle cx="330" cy="410" r="10" fill="#C8A850" className="splat-drop drop-5" />
                  <circle cx="170" cy="400" r="14" fill="#C8A850" className="splat-drop drop-6" />
                  <circle cx="210" cy="110" r="9" fill="#C8A850" className="splat-drop drop-7" />
                  <circle cx="360" cy="130" r="8" fill="#C8A850" className="splat-drop drop-8" />
                </g>
              </svg>
            </div>
            <img src={stickerLogo} alt="K.CUTS Logo" className="hero-portrait-img sticker-logo-img" />
            <div className="portrait-glow" />
          </div>

          {/* Orbiting Creator Badges */}
          {creators.map((creator, index) => (
            <motion.div 
              key={creator.name} 
              className={`orbit-badge orbit-badge-${creator.name.toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.15, ease: "easeOut" }}
            >
              <img src={creator.img} alt={creator.name} className="orbit-avatar" />
              <div className="orbit-info">
                <span className="orbit-name font-mono">{creator.name}</span>
                <span className="orbit-metric font-display">{creator.metric}</span>
              </div>
            </motion.div>
          ))}

          {/* Floating Retention Graph Card */}
          <motion.div 
            className="retention-card"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="retention-header">
              <div className="retention-title-area">
                <span className="retention-label font-mono text-muted">AUDIENCE RETENTION</span>
                <h4 className="retention-value font-display text-gold">85.4%</h4>
              </div>
              <span className="retention-badge font-mono">+40% above avg</span>
            </div>

            {/* Glowing SVG retention graph */}
            <div className="retention-graph-container">
              <svg viewBox="0 0 200 80" className="retention-svg">
                <defs>
                  <linearGradient id="gradient-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent-pop)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--color-accent-pop)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Background/average line */}
                <path 
                  d="M 10 65 C 50 63, 100 62, 190 60" 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.15)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4"
                />
                {/* Glowing area under path */}
                <path 
                  d="M 10 20 C 50 12, 100 15, 190 30 L 190 75 L 10 75 Z" 
                  fill="url(#gradient-glow)" 
                />
                {/* Karim's Retention Path */}
                <motion.path 
                  d="M 10 20 C 50 12, 100 15, 190 30" 
                  fill="none" 
                  stroke="var(--color-accent-pop)" 
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2.7, ease: "easeInOut" }}
                />
                {/* Dots along path */}
                <circle cx="10" cy="20" r="2.5" fill="var(--color-accent-pop)" />
                <circle cx="100" cy="14" r="2.5" fill="var(--color-accent-pop)" />
                <circle cx="190" cy="30" r="3" fill="var(--color-accent-pop)" className="glow-dot" />
              </svg>
              <div className="graph-axes font-mono">
                <span>0:00</span>
                <span>1:00 (Hook)</span>
                <span>3:00</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.0, duration: 1 }}
      >
        <span className="font-mono text-muted">SCROLL</span>
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
