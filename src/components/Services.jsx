import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Zap, Film } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: "Cinematic Editing",
    desc: "Long-form pacing, emotional transitions, and narrative storytelling that hooks viewers.",
    icon: Video
  },
  {
    id: 2,
    title: "Color Grading",
    desc: "Expert grading for S-Log3, Canon Log, RAW, and custom film emulation aesthetics.",
    icon: Palette
  },
  {
    id: 3,
    title: "Short-Form & Reels",
    desc: "High-retention viral pacing, quick cuts, text animations, and trend-aware editing.",
    icon: Zap
  },
  {
    id: 4,
    title: "Commercial & Brand Ads",
    desc: "Premium commercial delivery with sleek motion graphics and immersive sound design.",
    icon: Film
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label font-mono">WHAT I DO</span>
          <h2 className="section-title">SERVICES & EXPERTISE</h2>
        </div>

        {/* Software Stack / Tools section */}
        <div id="software-stack" className="services-tools-wrapper">
          <h4 className="tools-title font-mono text-gold">// SOFTWARE STACK</h4>
          <motion.div 
            className="tools-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="tool-card tool-pr" variants={cardVariants}>
              <div className="tool-badge">Pr</div>
              <span className="tool-name">Premiere Pro</span>
            </motion.div>
            <motion.div className="tool-card tool-ae" variants={cardVariants}>
              <div className="tool-badge">Ae</div>
              <span className="tool-name">After Effects</span>
            </motion.div>
            <motion.div className="tool-card tool-ps" variants={cardVariants}>
              <div className="tool-badge">Ps</div>
              <span className="tool-name">Photoshop</span>
            </motion.div>
            <motion.div className="tool-card tool-dr" variants={cardVariants}>
              <div className="tool-badge">Dr</div>
              <span className="tool-name">DaVinci Resolve</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const numStr = `0${index + 1}`;
            return (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={cardVariants}
              >
                <span className="service-number font-display">{numStr}</span>
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
