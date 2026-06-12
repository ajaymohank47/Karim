import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'play' | 'view'
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for lag position (ring)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth tracking
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Raw position for the inner dot (no lag)
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Detect mobile/touch devices
    const detectTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };
    detectTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX - 16); // Center the ring (32px / 2 = 16px)
      cursorY.set(e.clientY - 16);
      setDotPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, isVisible]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Classify hovering targets
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.selector-btn') || 
        target.closest('.pill-btn') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select')
      ) {
        setCursorType('pointer');
      } else if (target.closest('.portfolio-card') || target.closest('.portfolio-video')) {
        setCursorType('play');
      } else if (target.closest('.collaborator-card')) {
        setCursorType('view');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  // Sizing and text based on hover types
  const getVariants = () => {
    switch (cursorType) {
      case 'pointer':
        return {
          width: 44,
          height: 44,
          backgroundColor: 'rgba(200, 168, 78, 0.08)',
          borderColor: 'var(--color-accent-pop)',
          borderWidth: '1.5px',
          scale: 1.2
        };
      case 'play':
        return {
          width: 72,
          height: 72,
          backgroundColor: 'var(--color-accent-pop)',
          borderColor: 'var(--color-accent-pop)',
          borderWidth: '0px',
          scale: 1,
          x: cursorXSpring.get() - 20, // adjust centers for larger ring
          y: cursorYSpring.get() - 20
        };
      case 'view':
        return {
          width: 72,
          height: 72,
          backgroundColor: '#0A0A0A',
          borderColor: 'var(--color-accent-pop)',
          borderWidth: '1.5px',
          scale: 1,
          x: cursorXSpring.get() - 20,
          y: cursorYSpring.get() - 20
        };
      default:
        return {
          width: 32,
          height: 32,
          backgroundColor: 'transparent',
          borderColor: 'var(--color-accent-pop)',
          borderWidth: '1.5px',
          scale: 1
        };
    }
  };

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className={`custom-cursor-ring ${cursorType}`}
        style={{
          left: cursorType === 'play' || cursorType === 'view' ? 0 : cursorXSpring,
          top: cursorType === 'play' || cursorType === 'view' ? 0 : cursorYSpring,
        }}
        animate={getVariants()}
        transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.4 }}
      >
        {cursorType === 'play' && (
          <span className="cursor-inner-text play font-mono">PLAY</span>
        )}
        {cursorType === 'view' && (
          <span className="cursor-inner-text view font-mono">VIEW</span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {cursorType === 'default' && (
        <div
          className="custom-cursor-dot"
          style={{
            left: dotPos.x - 3,
            top: dotPos.y - 3,
          }}
        />
      )}
    </>
  );
}
