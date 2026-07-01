import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="experience-section section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <span className="section-eyebrow">CAREER</span>
        <h2 className="section-title">EXPERIENCE</h2>
        
        <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Sales and Solution Specialist
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Affinsys AI</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>July 13, 2026 - July 13, 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
