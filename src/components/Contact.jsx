import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'YouTube Edit',
    videoLength: '1-5 mins',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    
    // Construct FormData from target form
    const fData = new FormData(e.target);
    fData.append("access_key", "a27ee7f3-a383-4bba-84b3-ce0ac50fe53d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setSubmitted(true);
      } else {
        setResult("Error");
        alert("There was an issue submitting your brief. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setResult("Error");
      alert("Submission failed. Check your internet connection.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        {/* Contact Info Header */}
        <div className="contact-left">
          <span className="section-label font-mono">GET IN TOUCH</span>
          <h2 className="contact-title font-display">LET'S BUILD SOMETHING</h2>
          <p className="contact-subtext text-muted">
            Available for freelance. Average response under 2 hours.
          </p>
          
          <div className="contact-details">
            <a href="mailto:karimbruh841@gmail.com" className="contact-link-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-link-texts">
                <span className="font-mono text-muted">EMAIL DIRECTLY</span>
                <span className="contact-val">karimbruh841@gmail.com</span>
              </div>
            </a>

            <a href="https://wa.me/917738227862" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div className="contact-link-texts">
                <span className="font-mono text-muted">WHATSAPP</span>
                <span className="contact-val">+91 77382 27862</span>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form Block */}
        <div className="contact-right">
          <div className="form-card">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                   key="form"
                  onSubmit={handleSubmit}
                  className="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Hidden inputs to feed custom styled parameters into Web3Forms */}
                  <input type="hidden" name="project_type" value={formData.projectType} />
                  <input type="hidden" name="video_length" value={formData.videoLength} />

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label font-mono text-muted">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label font-mono text-muted">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label font-mono text-muted">Project Type</label>
                    <div className="project-type-grid">
                      {[
                        'YouTube Edit',
                        'Reels / TikTok',
                        'Commercial Ad',
                        'Color Grading',
                        'Other'
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`selector-btn ${formData.projectType === type ? 'active' : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label font-mono text-muted">Expected Video Length</label>
                    <div className="selector-flex">
                      {['Shorts/Reels (<60s)', '1-5 mins', '5-15 mins', '15 mins+'].map((length) => (
                        <button
                          key={length}
                          type="button"
                          className={`pill-btn ${formData.videoLength === length ? 'active' : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, videoLength: length }))}
                        >
                          {length}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label font-mono text-muted">Project Brief</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="3" 
                      required 
                      value={formData.message} 
                      onChange={handleChange}
                      placeholder="Tell me about your project — style, pacing references, camera source..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-gold btn-submit font-mono">
                    SEND PROJECT BRIEF <ArrowRight size={16} style={{ marginLeft: 8 }} />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="form-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CheckCircle size={56} className="success-icon text-gold" />
                  <h3 className="success-title font-display text-gold">Brief Received</h3>
                  <p className="success-text">
                    Thank you, {formData.name}. Karim will review your brief and get back to you at <strong>{formData.email}</strong> within 2 hours.
                  </p>
                  
                  {/* Brief Summary Box */}
                  <div className="submitted-brief-summary font-mono">
                    <div className="summary-title font-mono text-gold">// BRIEF SUMMARY</div>
                    <div className="summary-grid">
                      <div className="summary-item">
                        <span className="summary-lbl">TYPE:</span>
                        <span className="summary-val">{formData.projectType}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-lbl">LENGTH:</span>
                        <span className="summary-val">{formData.videoLength}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setResult("");
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'YouTube Edit',
                        videoLength: '1-5 mins',
                        message: ''
                      });
                    }} 
                    className="btn btn-outline reset-btn font-mono"
                  >
                    Send Another Brief
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
