import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, Video as VideoIcon, Award, CheckCircle } from 'lucide-react';
import heroBg from '../assets/hero.png';
import './Portfolio.css';

// Video streaming links directly from local public folder (downloaded from Google Drive)
const fashionVideoUrl = "/VIDEO/fashion_video.mp4";
const brandPromotionUrl = "/VIDEO/brand_promotion.mp4";
const influencersEditUrl = "/VIDEO/influencers_edit.mp4";
const motionGraphicsUrl = "/VIDEO/motion_graphics.mp4";
const fashionEditUrl = "/VIDEO/fashion_edit.mp4";

// All 5 projects are configured vertically (9/16, width 260px) since the source videos are vertical
const projects = [
  {
    id: 1,
    title: "Urban Runway",
    category: "Fashion Film · Cinematic Edit",
    desc: "A stylized fashion showcase featuring high-contrast pacing and cinematic lighting.",
    gradient: "linear-gradient(135deg, #1f1a10 0%, #080808 100%)",
    initials: "FF",
    video: fashionVideoUrl,
    aspectRatio: "9/16",
    width: "260px"
  },
  {
    id: 2,
    title: "Brand Spotlight",
    category: "Commercial · Product Launch",
    desc: "Moody brand promotional video emphasizing product details and sound design.",
    gradient: "linear-gradient(135deg, #101a1f 0%, #080808 100%)",
    initials: "BP",
    video: brandPromotionUrl,
    aspectRatio: "9/16",
    width: "260px"
  },
  {
    id: 3,
    title: "Influencer Campaign",
    category: "Instagram Reels · Pacing Edit",
    desc: "High-retention vertical cut designed to optimize user engagement and hook attention.",
    gradient: "linear-gradient(135deg, #1d1d1d 0%, #080808 100%)",
    initials: "IC",
    video: influencersEditUrl,
    aspectRatio: "9/16",
    width: "260px"
  },
  {
    id: 4,
    title: "Motion Graphics",
    category: "Motion Graphics · VFX Edit",
    desc: "Dynamic motion design and typography animations synced to heavy-hitting beats.",
    gradient: "linear-gradient(135deg, #1a101f 0%, #080808 100%)",
    initials: "MG",
    video: motionGraphicsUrl,
    aspectRatio: "9/16",
    width: "260px"
  },
  {
    id: 5,
    title: "Aesthetic Lookbook",
    category: "Fashion Reel · Color Grading",
    desc: "A mobile-first vertical lookbook with custom film-emulation warm color grades.",
    gradient: "linear-gradient(135deg, #1f1010 0%, #080808 100%)",
    initials: "AL",
    video: fashionEditUrl,
    aspectRatio: "9/16",
    width: "260px"
  }
];

const caseStudies = {
  1: {
    specs: "RED RAW 8K · DaVinci Resolve Studio",
    challenge: "Preserve skin tones and fabric textures while grading under complex neon lighting configurations for a luxury fashion house.",
    cutting: "Choreographed slow-motion transitions matched to rhythmic downtempo beats to emphasize the elegance of garment movements.",
    sound: "Subtle environment echoes and ambient textures to elevate the cinematic catwalk atmosphere.",
    results: "+64% engagement on brand channels, resulting in immediate product line sell-out.",
    metrics: [
      { label: "ENGAGEMENT", value: "+64%" },
      { label: "SELL-OUT", value: "48 Hrs" },
      { label: "RETENTION", value: "82%" }
    ]
  },
  2: {
    specs: "Sony FX3 S-Log3 · DaVinci Resolve",
    challenge: "Deliver a premium promotional commercial highlighting product build and brand identity with moody, high-contrast grading.",
    cutting: "Speed ramps and quick match-action edits tracking product assembly and usage.",
    sound: "Custom sound design focusing on industrial mechanical foley, clicks, and deep bass hits.",
    results: "Generated 1.2M impressions and direct conversion rates lifted by 22%.",
    metrics: [
      { label: "IMPRESSIONS", value: "1.2M+" },
      { label: "CONVERSION", value: "+22%" },
      { label: "COMPLETION", value: "78%" }
    ]
  },
  3: {
    specs: "Vertical 1080x1920 S-Log3 · Premiere Pro",
    challenge: "Optimize a vertical interview and lifestyle reel to secure high viewer retention in the critical first 3 seconds.",
    cutting: "Snappy pattern interrupts, dynamic text subtitles, and zoom-ins synchronized with verbal emphasis.",
    sound: "Enhanced voice clarity, vocal pop adjustments, and light background rhythm tracks.",
    results: "Reached 3M+ views, driving over 150k follower growth for the creator.",
    metrics: [
      { label: "VIEWS", value: "3M+" },
      { label: "FOLLOWERS", value: "+150K" },
      { label: "SHARES", value: "45K" }
    ]
  },
  4: {
    specs: "After Effects · Cinema 4D",
    challenge: "Design a high-tempo promo utilizing custom 3D typography and graphical overlays synchronized perfectly to a sound mix.",
    cutting: "Beat-matching keyframe animations, fast visual cuts, and camera whip-pans.",
    sound: "Whooshes, synthetic swoops, and transient impacts that correspond to movement.",
    results: "Winner of regional Visual Design excellence award.",
    metrics: [
      { label: "ENGAGEMENT", value: "92%" },
      { label: "WATCH TIME", value: "+30%" },
      { label: "AWARDS", value: "1st" }
    ]
  },
  5: {
    specs: "Vertical S-Log3 · Film Emulation",
    challenge: "Develop a summer lookbook reel maintaining a warm, vintage film aesthetic while keeping vertical formatting.",
    cutting: "Seamless slide transitions, light leaks, and smooth camera pacing.",
    sound: "Acoustic lo-fi track combined with environmental wind and shutter sounds.",
    results: "Over 800k loops with a 94% positive rating on social channels.",
    metrics: [
      { label: "REPLAY LOOPS", value: "800K+" },
      { label: "RATING", value: "94%" },
      { label: "SAVES & SHARES", value: "62K" }
    ]
  }
};

function PortfolioCard({ project, cardVariants, isActive, onActivate, onDeactivate }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Sync active play/mute states
  React.useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(err => console.log("Inline playback failed:", err));
      } else {
        videoRef.current.muted = true;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !isActive) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        // success
      }).catch((err) => {
        console.log("Hover video play interrupted:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !isActive) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCardClick = (e) => {
    // Prevent toggling if user clicks directly on native video player controls
    if (e.target.tagName === 'VIDEO') return;

    // Once clicked, keep the controls active permanently.
    // They can still be closed/deactivated via the close (X) button or by selecting another card.
    if (!isActive) {
      onActivate();
    }
  };

  return (
    <motion.div 
      className={`portfolio-card ${isActive ? 'active' : ''}`}
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ 
        cursor: 'pointer',
        '--card-width': project.width || '260px'
      }}
    >
      <div 
        className="portfolio-thumbnail" 
        style={{ 
          background: project.gradient,
          '--thumbnail-aspect-ratio': project.aspectRatio || '9/16'
        }}
      >
        {/* Dynamic Zoom-out Animation Wrapper */}
        <motion.div
          className="thumbnail-inner-content"
          initial={{ scale: 1.18, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        >
          {/* Hover/Inline Video Preview (t=0.001 forces browser to load first frame) */}
          <video
            ref={videoRef}
            src={`${project.video}#t=0.001`}
            loop
            muted={!isActive}
            controls={true}
            playsInline
            preload="metadata"
            className={`portfolio-video ${videoLoaded ? 'loaded' : ''}`}
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
          />

          {!videoLoaded && (
            <div className="video-loading-overlay">
              <div className="video-skeleton-pulse" />
              <div className="video-loading-spinner" />
            </div>
          )}

          <div className="thumbnail-noise" />
        </motion.div>
        
        {/* Close button overlay (only shown when playing inline) */}
        {isActive && (
          <button 
            className="inline-close-btn"
            onClick={(e) => {
              e.stopPropagation(); // Stop propagation to prevent card trigger
              onDeactivate();
            }}
            aria-label="Close inline video player"
          >
            <X size={16} />
          </button>
        )}

        {/* Play button overlay (only shown when not active) */}
        {!isActive && (
          <div className="play-overlay">
            <div className="play-button">
              <Play size={24} fill="var(--color-accent-pop)" stroke="var(--color-accent-pop)" />
            </div>
          </div>
        )}
      </div>

      <div className="portfolio-info">
        <span className="portfolio-category font-mono">{project.category}</span>
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-desc text-muted">{project.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [sliderVal, setSliderVal] = useState(50);
  const gridRef = useRef(null);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el || activeProjectId !== null) return;

    // Only auto-scroll on mobile/tablet viewports
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    let animationFrameId;
    let isInteracting = false;
    let speed = 0.45; // smooth scrolling speed (px per frame)
    let direction = 1; // 1 = forward, -1 = backward
    let snapTimeoutId;

    // Turn off snap initially during auto-scroll to prevent browser snap fights
    el.style.scrollSnapType = 'none';

    const scroll = () => {
      if (!isInteracting) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 0) {
          el.scrollLeft += speed * direction;
          
          if (el.scrollLeft >= maxScroll - 1) {
            direction = -1;
          } else if (el.scrollLeft <= 1) {
            direction = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleTouchStart = () => {
      isInteracting = true;
      clearTimeout(snapTimeoutId);
      // Re-enable scroll snap while user is dragging
      el.style.scrollSnapType = 'x mandatory';
    };

    const handleTouchEnd = () => {
      clearTimeout(snapTimeoutId);
      // Wait for flick/inertia to settle, then disable snap and resume auto-scroll
      snapTimeoutId = setTimeout(() => {
        isInteracting = false;
        el.style.scrollSnapType = 'none';
      }, 1500);
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(snapTimeoutId);
      if (el) {
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeProjectId]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 14,
        mass: 1
      }
    }
  };

  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label font-mono">SELECTED WORK</span>
          <h2 className="section-title">THE CRAFT IN ACTION</h2>
        </div>

        <motion.div 
          ref={gridRef}
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              cardVariants={cardVariants}
              isActive={activeProjectId === project.id}
              onActivate={() => {
                setActiveProjectId(project.id);
                setSliderVal(50); // reset comparison slider to center
              }}
              onDeactivate={() => setActiveProjectId(null)}
            />
          ))}
        </motion.div>

        {/* Inline Case Study Detail Panel (same screen, no modal popup) */}
        <AnimatePresence>
          {activeProjectId && (() => {
            const project = projects.find(p => p.id === activeProjectId);
            const study = caseStudies[activeProjectId];
            return (
              <motion.div 
                className="inline-case-study-panel"
                initial={{ opacity: 0, height: 0, y: 30 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-case-study-header">
                  <div className="inline-title-wrap">
                    <span className="inline-category font-mono text-gold">{project.category}</span>
                    <h3 className="inline-title">{project.title} Specs</h3>
                    <span className="inline-specs font-mono text-muted">{study.specs}</span>
                  </div>
                  <button className="inline-panel-close-btn" onClick={() => setActiveProjectId(null)} aria-label="Close details panel">
                    <X size={20} />
                  </button>
                </div>

                <div className="inline-case-study-body">
                  {/* Key Metrics / ROI Row */}
                  {study.metrics && (
                    <div className="inline-metrics-row">
                      {study.metrics.map((m, idx) => (
                        <div className="inline-metric-badge" key={idx}>
                          <span className="inline-metric-val font-display">{m.value}</span>
                          <span className="inline-metric-lbl font-mono">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="inline-details-grid">
                    <div className="inline-details-block">
                      <h4 className="inline-details-heading font-mono text-gold">// THE CHALLENGE</h4>
                      <p className="inline-details-text">{study.challenge}</p>
                    </div>

                    <div className="inline-details-row">
                      <div className="inline-details-block">
                        <h5 className="inline-sub-details-heading font-mono">
                          <VideoIcon size={14} className="details-icon text-gold" /> Cuts & Pacing
                        </h5>
                        <p className="inline-details-text small">{study.cutting}</p>
                      </div>

                      <div className="inline-details-block">
                        <h5 className="inline-sub-details-heading font-mono">
                          <Volume2 size={14} className="details-icon text-gold" /> Sound Blueprint
                        </h5>
                        <p className="inline-details-text small">{study.sound}</p>
                      </div>
                    </div>

                    <div className="inline-details-block results-block">
                      <h4 className="inline-details-heading font-mono text-gold" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={18} /> IMPACT & RESULTS
                      </h4>
                      <p className="inline-results-text">
                        <CheckCircle size={14} className="text-gold" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} />
                        <span style={{ verticalAlign: 'middle' }}>{study.results}</span>
                      </p>
                    </div>
                  </div>

                  {/* Before/After Color Grading Comparison Slider */}
                  <div className="inline-slider-section">
                    <h4 className="inline-details-heading font-mono text-gold">// COLOR GRADING PIPELINE (DRAG SLIDER)</h4>
                    <div className="inline-color-slider-container">
                      {/* Graded (After) */}
                      <div 
                        className="inline-color-slider-image graded" 
                        style={{ backgroundImage: `url(${heroBg})` }}
                      />
                      {/* LOG (Before) - width controlled by range slider */}
                      <div 
                        className="inline-color-slider-image log-profile" 
                        style={{ 
                          backgroundImage: `url(${heroBg})`,
                          width: `${sliderVal}%`
                        }}
                      />
                      {/* Visual Handle */}
                      <div className="inline-slider-handle" style={{ left: `${sliderVal}%` }}>
                        <div className="inline-slider-handle-line" />
                        <div className="inline-slider-handle-dot" />
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderVal} 
                        onChange={(e) => setSliderVal(e.target.value)} 
                        className="inline-color-slider-input" 
                      />
                      <div className="inline-slider-label log font-mono">LOG (BEFORE)</div>
                      <div className="inline-slider-label graded font-mono">GRADED (AFTER)</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
