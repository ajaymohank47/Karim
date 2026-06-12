import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Volume2, Video as VideoIcon, Award, CheckCircle } from 'lucide-react';
import heroBg from '../assets/hero.png';
import './CaseStudyModal.css';

export default function CaseStudyModal({ project, study, onClose }) {
  const [sliderVal, setSliderVal] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.15
      }
    }
  };

  return (
    <motion.div 
      className="modal-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-category font-mono text-gold">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <span className="modal-specs font-mono text-muted">{study.specs}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Embedded Player */}
          <div className="modal-player-section">
            <div className="modal-player-container" onClick={toggleVideoPlay}>
              <video
                ref={videoRef}
                src={project.video}
                loop
                playsInline
                className="modal-video-element"
                onEnded={() => setIsPlaying(false)}
              />
              
              {!isPlaying && (
                <div className="modal-video-play-overlay">
                  <div className="modal-video-play-btn">
                    <Play size={32} fill="var(--color-accent-pop)" stroke="var(--color-accent-pop)" />
                  </div>
                  <span className="font-mono text-muted" style={{ marginTop: 16, fontSize: '0.8rem', letterSpacing: '1px' }}>
                    CLICK TO PLAY EDIT
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Workflow Case Study Details */}
          <div className="modal-details-section">
            
            {/* Challenge */}
            <div className="details-block">
              <h3 className="details-heading font-mono text-gold">// THE CHALLENGE</h3>
              <p className="details-text">{study.challenge}</p>
            </div>

            {/* Editing Strategy */}
            <div className="details-grid">
              <div className="details-block">
                <h4 className="sub-details-heading font-mono">
                  <VideoIcon size={16} className="details-icon text-gold" /> Cuts & Pacing
                </h4>
                <p className="details-text small">{study.cutting}</p>
              </div>

              <div className="details-block">
                <h4 className="sub-details-heading font-mono">
                  <Volume2 size={16} className="details-icon text-gold" /> Sound Blueprint
                </h4>
                <p className="details-text small">{study.sound}</p>
              </div>
            </div>

            {/* Before/After Color Grading Slider */}
            <div className="details-block">
              <h3 className="details-heading font-mono text-gold">// COLOR GRADING PIPELINE (DRAG SLIDER)</h3>
              
              <div className="color-slider-container">
                {/* Graded (After) */}
                <div 
                  className="color-slider-image graded" 
                  style={{ backgroundImage: `url(${heroBg})` }}
                />
                
                {/* LOG (Before) - width controlled by slider */}
                <div 
                  className="color-slider-image log-profile" 
                  style={{ 
                    backgroundImage: `url(${heroBg})`,
                    width: `${sliderVal}%`
                  }}
                />
                
                {/* Visual Handle Line */}
                <div className="slider-handle" style={{ left: `${sliderVal}%` }}>
                  <div className="slider-handle-line" />
                  <div className="slider-handle-dot" />
                </div>
                
                {/* Range Input overlaid on top */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderVal} 
                  onChange={(e) => setSliderVal(e.target.value)} 
                  className="color-slider-input" 
                />
                
                <div className="slider-label log font-mono">LOG (BEFORE)</div>
                <div className="slider-label graded font-mono">GRADED (AFTER)</div>
              </div>
            </div>

            {/* The Results */}
            <div className="details-block results-block">
              <h3 className="details-heading font-mono text-gold" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={20} /> PROJECT DELIVERABLES & IMPACT
              </h3>
              <p className="results-text">
                <CheckCircle size={16} className="text-gold" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle' }}>{study.results}</span>
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
