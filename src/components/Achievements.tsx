import React from 'react';

interface Achievement {
  id: number;
  title: string;
  details: string;
  date?: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  activeAchievement: number;
  setActiveAchievement: React.Dispatch<React.SetStateAction<number>>;
}

export default function Achievements({
  achievements,
  activeAchievement,
  setActiveAchievement,
}: AchievementsProps) {
  const handlePrev = () => {
    setActiveAchievement((prev: number) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveAchievement((prev: number) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className="testimonials-section section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="testimonial-slider-container reveal-on-scroll">
          <span className="section-eyebrow text-center">RECOGNITION</span>
          <h2 className="section-title text-center" style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>ACHIEVEMENTS & MILESTONES</h2>
          
          <div className="testimonial-viewport" style={{ minHeight: '140px' }}>
            {achievements.map((a, idx) => (
              <div 
                key={a.id} 
                className={`testimonial-slide ${idx === activeAchievement ? 'active' : ''}`}
              >
                <blockquote className="testimonial-quote" style={{ fontSize: '1.4rem' }}>
                  "{a.title}"
                </blockquote>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '14px', marginTop: '-12px' }}>
                  {a.details}
                </p>
              </div>
            ))}
          </div>

          <div className="testimonial-nav">
            <button 
              className="testimonial-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous achievement"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <div className="testimonial-dots">
              {achievements.map((_, idx) => (
                <button
                  key={idx}
                  className={`testimonial-dot ${idx === activeAchievement ? 'active' : ''}`}
                  onClick={() => setActiveAchievement(idx)}
                  aria-label={`Go to achievement ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              className="testimonial-nav-btn next"
              onClick={handleNext}
              aria-label="Next achievement"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
