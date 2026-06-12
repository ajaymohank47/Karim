import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Collaborators.css';

// Import local generated avatars
import fatimaImg from '../assets/fatima.jpg';
import subhiImg from '../assets/subhi.png';
import adnaanImg from '../assets/adnaan.png';
import shadanImg from '../assets/shadan.png';

const InstagramIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ReelsIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 122.14 122.88" width={size} height={size} fill="currentColor">
    <path d="M35.14,0H87c9.65,0,18.43,3.96,24.8,10.32c6.38,6.37,10.34,15.16,10.34,24.82v52.61c0,9.64-3.96,18.42-10.32,24.79 l-0.02,0.02c-6.38,6.37-15.16,10.32-24.79,10.32H35.14c-9.66,0-18.45-3.96-24.82-10.32l-0.24-0.27C3.86,105.95,0,97.27,0,87.74 V35.14c0-9.67,3.95-18.45,10.32-24.82S25.47,0,35.14,0L35.14,0z M91.51,31.02l0.07,0.11h21.6c-0.87-5.68-3.58-10.78-7.48-14.69 C100.9,11.64,94.28,8.66,87,8.66h-8.87L91.51,31.02L91.51,31.02z M81.52,31.13L68.07,8.66H38.57l13.61,22.47H81.52L81.52,31.13z M42.11,31.13L28.95,9.39c-4.81,1.16-9.12,3.65-12.51,7.05c-3.9,3.9-6.6,9.01-7.48,14.69H42.11L42.11,31.13z M113.48,39.79H8.66 v47.96c0,7.17,2.89,13.7,7.56,18.48l0.22,0.21c4.8,4.8,11.43,7.79,18.7,7.79H87c7.28,0,13.9-2.98,18.69-7.77l0.02-0.02 c4.79-4.79,7.77-11.41,7.77-18.69V39.79L113.48,39.79z M50.95,54.95l26.83,17.45c0.43,0.28,0.82,0.64,1.13,1.08 c1.22,1.77,0.77,4.2-1,5.42L51.19,94.67c-0.67,0.55-1.53,0.88-2.48,0.88c-2.16,0-3.91-1.75-3.91-3.91V58.15h0.02 c0-0.77,0.23-1.55,0.7-2.23C46.76,54.15,49.19,53.72,50.95,54.95L50.95,54.95L50.95,54.95z"/>
  </svg>
);

const collaborators = [
  {
    id: 1,
    name: "Adnaan Shaikh",
    handle: "@adnaan_07dz",
    role: "Digital Creator & Actor",
    followers: "11M+ Followers",
    url: "https://www.instagram.com/adnaan_07dz?igsh=MXZtN3l0eXNqaHZ6Zg==",
    image: adnaanImg,
    reels: [
      "https://www.instagram.com/reel/DX6tccVotnU/?igsh=YnllNGNkbTBkYjU3",
      "https://www.instagram.com/reel/DSHWegjjEIn/?igsh=cnJ2eGZpYnJ6cDNs"
    ]
  },
  {
    id: 2,
    name: "Shadan Farooqui",
    handle: "@saddu07dz",
    role: "Model & Content Creator",
    followers: "6M+ Followers",
    url: "https://www.instagram.com/saddu07dz?igsh=MWcxd3Z4eWxoY2hwcg==",
    image: shadanImg,
    reels: [
      "https://www.instagram.com/reel/DOvJh3XDUjr/?igsh=eDB4dnR5bDJpdzJj"
    ]
  },
  {
    id: 3,
    name: "Subhi Patkar",
    handle: "@iam_subhi1",
    role: "Fashion & Beauty Influencer",
    followers: "700K+ Followers",
    url: "https://www.instagram.com/iam_subhi1?igsh=djNwcjJ5NnNvcmNh",
    image: subhiImg,
    reels: [
      "https://www.instagram.com/reel/DY9rYVZoHsq/?igsh=Y2ozOGZlNHNwbzJ6",
      "https://www.instagram.com/reel/DTP_niCj4Pl/?igsh=YzI3dW96M2Joa2Nt",
      "https://www.instagram.com/reel/DYhOOHMt-Wm/?igsh=MWh0d2MwOWcwZHA0Yg=="
    ]
  },
  {
    id: 4,
    name: "Fatima",
    handle: "@official_fati.ma777",
    role: "Digital Content Creator",
    followers: "250K+ Followers",
    url: "https://www.instagram.com/official_fati.ma777?igsh=ZGU0ajdpaTBkZHVn",
    image: fatimaImg,
    reels: [
      "https://www.instagram.com/reel/DR046mQCF8N/?igsh=b25xMTJndHlsNWJ5",
      "https://www.instagram.com/reel/DSQFXmLARsx/?igsh=MTd0MDJzbWhrbWVlcQ==",
      "https://www.instagram.com/reel/DSXGATOEUNh/?igsh=MW92N3NnNHR3M3JobQ=="
    ]
  }
];

export default function Collaborators() {
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
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };

  return (
    <section id="collaborators" className="collaborators-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label font-mono">TRUSTED BY THE BEST</span>
          <h2 className="section-title">CREATORS I'VE WORKED WITH</h2>
        </div>

        <motion.div 
          ref={gridRef}
          className="collaborators-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collaborators.map((creator) => (
            <motion.div 
              key={creator.id}
              className="collaborator-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              id={`creator-card-${creator.id}`}
            >
              {/* Profile link section (image, followers, name, role, handle) */}
              <a 
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="collaborator-profile-link"
              >
                <div className="collaborator-image-wrapper">
                  <img 
                    src={creator.image} 
                    alt={creator.name} 
                    className="collaborator-image"
                    loading="lazy"
                  />
                  <div className="instagram-overlay-badge">
                    <InstagramIcon size={16} />
                  </div>
                </div>

                <div className="collaborator-info">
                  <span className="collaborator-followers font-mono">{creator.followers}</span>
                  <h3 className="collaborator-name">{creator.name}</h3>
                  <p className="collaborator-role">{creator.role}</p>
                  
                  <div className="collaborator-handle-wrapper">
                    <span className="collaborator-handle font-mono">{creator.handle}</span>
                    <ArrowUpRight size={14} className="link-arrow" />
                  </div>
                </div>
              </a>

              {/* Interactive Reels links section */}
              <div className="collaborator-reels-container">
                <div className="reels-header font-mono">
                  <span>EDITED REELS</span>
                </div>
                <div className="reels-links-row">
                  {creator.reels.map((reelUrl, idx) => (
                    <a 
                      key={idx}
                      href={reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reel-icon-button"
                      aria-label={`View Reel ${idx + 1}`}
                      title={`View Reel ${idx + 1}`}
                    >
                      <ReelsIcon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
