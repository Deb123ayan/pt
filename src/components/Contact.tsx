import React, { useState } from 'react';

export default function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const getWordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (getWordCount(val) <= 50 || val.length < subject.length) {
      setSubject(val);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (getWordCount(val) <= 400 || val.length < message.length) {
      setMessage(val);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setEmailSubmitted(true);
        setSubject('');
        setMessage('');
        setTimeout(() => setEmailSubmitted(false), 5000);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="contact-grid">
          <div className="reveal-on-scroll">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2 className="section-title">LET'S BUILD <br />& COLLABORATE</h2>
            <p className="contact-subtext">
              Have an intern opening, a project idea, or seeking a marketing campus partnership? Fill out the form or write to me directly.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-label">Direct Mail</span>
                <a href="mailto:trishlajha185@gmail.com" className="contact-info-value">trishlajha185@gmail.com</a>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Bhubaneswar, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container reveal-on-scroll">
            {emailSubmitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. Trishla will review your query and get back to you via email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    SUBJECT <span style={{float: 'right', opacity: 0.6, fontSize: '0.85em', fontWeight: 'normal', textTransform: 'none'}}>{getWordCount(subject)} / 50 words</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="e.g. Let's collaborate!"
                    required
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    MESSAGE DETAILS <span style={{float: 'right', opacity: 0.6, fontSize: '0.85em', fontWeight: 'normal', textTransform: 'none'}}>{getWordCount(message)} / 400 words</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input text-area"
                    rows={4}
                    placeholder="Describe the opportunity or project details..."
                    required
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-accent btn-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {isError && (
                  <p className="error-message" style={{ color: '#ff4d4f', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
