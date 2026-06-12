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
