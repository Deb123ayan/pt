import SplitText from './SplitText';

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="reveal-on-scroll">
          <span className="section-eyebrow">TECHNICAL MATRIX</span>
          <SplitText tag="h2" className="section-title" text="SKILL DIRECTORY" delay={50} />
        </div>

        <div className="process-grid" style={{ marginTop: 'var(--space-5)' }}>
          <div className="process-step reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="process-step-num">01</div>
            <h3 className="process-step-title">Frontend & Styling</h3>
            <div className="capabilities-tags" style={{ marginTop: 'var(--space-2)' }}>
              <span className="capability-tag">React.js</span>
              <span className="capability-tag">Next.js</span>
              <span className="capability-tag">JavaScript</span>
              <span className="capability-tag">HTML5 / CSS3</span>
              <span className="capability-tag">Tailwind CSS</span>
            </div>
          </div>

          <div className="process-step reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="process-step-num">02</div>
            <h3 className="process-step-title">Backend & Database</h3>
            <div className="capabilities-tags" style={{ marginTop: 'var(--space-2)' }}>
              <span className="capability-tag">Node.js</span>
              <span className="capability-tag">Express.js</span>
              <span className="capability-tag">REST APIs</span>
              <span className="capability-tag">SQLite</span>
              <span className="capability-tag">Supabase</span>
              <span className="capability-tag">PocketBase</span>
            </div>
          </div>

          <div className="process-step reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="process-step-num">03</div>
            <h3 className="process-step-title">Core Concepts</h3>
            <div className="capabilities-tags" style={{ marginTop: 'var(--space-2)' }}>
              <span className="capability-tag">DSA (Trees, Graphs)</span>
              <span className="capability-tag">System Design</span>
              <span className="capability-tag">User Authentication</span>
              <span className="capability-tag">Adaptability</span>
              <span className="capability-tag">Teamwork</span>
            </div>
          </div>

          <div className="process-step reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <div className="process-step-num">04</div>
            <h3 className="process-step-title">Tools & Software</h3>
            <div className="capabilities-tags" style={{ marginTop: 'var(--space-2)' }}>
              <span className="capability-tag">MS Excel</span>
              <span className="capability-tag">MS Word</span>
              <span className="capability-tag">MS PowerPoint</span>
              <span className="capability-tag">Git & GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
