import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const feedback = [
  {
    id: 1,
    name: "Adnaan Shaikh",
    handle: "@adnaan_07dz",
    role: "Digital Creator & Actor",
    quote: "Karim understands vertical pacing and hook retention better than anyone. He turned our raw campaign shoots into edits that broke brand engagement records."
  },
  {
    id: 2,
    name: "Shadan Farooqui",
    handle: "@saddu07dz",
    role: "Model & Creator",
    quote: "As a creator, I need fast turnarounds and edits that instantly hook viewers. Karim has delivered dozens of high-performing reels with flawless color grading."
  },
  {
    id: 3,
    name: "Subhi",
    handle: "@iam_subhi1",
    role: "Fashion Influencer",
    quote: "Working with Karim completely elevated the quality of my brand integrations. His sound blueprinting and cinematic color grading add massive production value."
  }
];

export default function Testimonials() {
  const gridRef = React.useRef(null);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

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
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-label font-mono">CLIENT FEEDBACK</span>
          <h2 className="section-title">WHAT THEY SAY</h2>
        </div>

        <motion.div 
          ref={gridRef}
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {feedback.map((item) => (
            <motion.div 
              key={item.id} 
              className="testimonial-card"
              variants={cardVariants}
            >
              <div className="quote-icon-wrapper">
                <Quote size={24} className="quote-icon" />
              </div>
              <p className="testimonial-quote">
                "{item.quote}"
              </p>
              
              <div className="testimonial-author">
                <span className="testimonial-author-name">{item.name}</span>
                <span className="testimonial-author-meta font-mono text-gold">
                  {item.handle} · {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
