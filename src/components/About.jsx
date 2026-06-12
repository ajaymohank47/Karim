import React from 'react';
import { motion } from 'framer-motion';
import karimImg from '../assets/karim.jpg';
import './About.css';

export default function About() {
  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }

  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-container">
          {/* Left Side: Bio */}
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label font-mono">ABOUT ME</span>
            <h2 className="about-bio">
              Karim Ali is a Mumbai-based cinematic video editor, motion graphics editor, and DaVinci Resolve Certified colorist. With 300+ projects delivered and content reaching over 15 million viewers, he helps creators, brands, and businesses tell stories that hold attention.
            </h2>

            {/* Stats Row */}
            <motion.div 
              className="about-stats-row"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div className="stat-card" variants={statVariants}>
                <span className="stat-number font-display text-gold">300+</span>
                <span className="stat-label font-mono text-muted">Projects Delivered</span>
              </motion.div>
              
              <motion.div className="stat-card" variants={statVariants}>
                <span className="stat-number font-display text-gold">15M+</span>
                <span className="stat-label font-mono text-muted">Total Reach</span>
              </motion.div>

              <motion.div className="stat-card" variants={statVariants}>
                <span className="stat-number font-display text-gold">100%</span>
                <span className="stat-label font-mono text-muted">Client Satisfaction</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-wrapper">
              <img src={karimImg} alt="Karim Ali" className="about-image" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
