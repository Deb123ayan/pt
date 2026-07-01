import React from 'react';

interface ContactProps {
  emailSubmitted: boolean;
  handleContactSubmit: (e: React.FormEvent) => void;
}

export default function Contact({
  emailSubmitted,
  handleContactSubmit,
}: ContactProps) {
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
                    className="form-input"
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">SUBJECT</label>
                  <select id="subject" className="form-input select-input" required>
                    <option value="">Select a category</option>
                    <option value="internship">Marketing / Sales Internship</option>
                    <option value="development">Web Development Project</option>
                    <option value="collaboration">General Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">MESSAGE DETAILS</label>
                  <textarea
                    id="message"
                    className="form-input text-area"
                    rows={4}
                    placeholder="Describe the opportunity or project details..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-accent btn-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
