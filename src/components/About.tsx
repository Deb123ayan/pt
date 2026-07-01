import { useState, useEffect, useRef } from 'react';
import SplitText from './SplitText';
import TextType from './TextType';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  padZero?: boolean;
  suffix?: string;
  accentSuffix?: string;
}

function AnimatedNumber({ end, duration = 2000, padZero = false, suffix = '', accentSuffix = '' }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart function
            const easeOut = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = padZero && count < 10 ? `0${count}` : `${count}`;

  return (
    <span ref={ref}>
      {display}{suffix}{accentSuffix && <span className="stat-accent">{accentSuffix}</span>}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="reveal-on-scroll">
            <span className="section-eyebrow">THE PROFILE</span>
            <SplitText tag="h2" className="section-title whitespace-pre-line" text={"WHERE CODE\nMEETS CAMPAIGN."} delay={50} />
          </div>
          <div className="about-description">
            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms', marginBottom: '1.5rem', minHeight: '80px' }}>
              <TextType 
                text="I am a motivated Computer Science student based in Bhubaneswar, India, looking for a Sales and Marketing intern role where I can combine engineering logic with strategic business development."
                typingSpeed={20}
                startOnVisible={true}
                loop={false}
                as="p"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms', minHeight: '130px' }}>
              <TextType 
                text="My engineering background gives me hands-on expertise with React, Next.js, and system structures. Concurrently, my work as a Campus Ambassador for Volvo Group has sharpened my public relations, public speaking, and event promotion capabilities. I communicate technical concepts simply and drive brand engagement with high energy."
                typingSpeed={20}
                startOnVisible={true}
                loop={false}
                as="p"
              />
            </div>
          </div>
        </div>

        <div className="stats-row reveal-on-scroll">
          <div className="stat-card">
            <div className="stat-number"><AnimatedNumber end={3} padZero accentSuffix="+" /></div>
            <div className="stat-label">COMPLETED WEB PROJECTS</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><AnimatedNumber end={1} padZero /></div>
            <div className="stat-label">VOLVO AMBASSADORSHIP</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><AnimatedNumber end={1} suffix="st" /></div>
            <div className="stat-label">GUIDEWIRE DEVELOPER RANK</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><AnimatedNumber end={10} accentSuffix="+" /></div>
            <div className="stat-label">CORE DEV & OFFICE TOOLS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
