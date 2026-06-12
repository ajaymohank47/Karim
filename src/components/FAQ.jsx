import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    question: "How do we share large video footage files?",
    answer: "You can upload your raw footage to Google Drive, Dropbox, WeTransfer, or Frame.io. For long-term clients, we usually set up a dedicated shared folder to synchronize assets seamlessly."
  },
  {
    id: 2,
    question: "What camera formats and color profiles do you support?",
    answer: "I work with all industry-standard formats, including RED RAW, ProRes, and H.264/H.265. As a DaVinci Resolve colorist, I specialize in grading flat profiles such as Sony S-Log3, Canon Log, Arri LogC, and DJI D-Log."
  },
  {
    id: 3,
    question: "What is your typical turnaround time?",
    answer: "Short-form reels and TikToks are delivered within 24 to 48 hours. Long-form YouTube edits and commercial brand ads take between 5 to 7 days. If you are under a tight deadline, rush delivery (under 24h) is available."
  },
  {
    id: 4,
    question: "Do you provide custom sound design and motion graphics?",
    answer: "Yes, absolutely! Every video includes high-fidelity sound blueprinting (sound design, foley, volume leveling, background music licensing) and motion graphics overlays (kinetic typography, graphic callouts, smooth transitions)."
  }
];

function FAQItem({ faq, isOpen, toggleOpen }) {
  return (
    <div className={`faq-item-card ${isOpen ? 'open' : ''}`} id={`faq-item-${faq.id}`}>
      <button 
        className="faq-question-btn" 
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="faq-question-text">{faq.question}</span>
        <motion.div
          className="faq-chevron-wrapper"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            className="faq-answer-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="faq-answer-inner">
              <p className="faq-answer-text">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        <div className="section-header center">
          <span className="section-label font-mono">HAVE QUESTIONS?</span>
          <h2 className="section-title">FREQUENTLY ASKED</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              toggleOpen={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
