interface HeroProps {
  scrollY: number;
}

import { motion } from 'framer-motion';
import TextType from './TextType';
import RotatingText from './RotatingText';

export default function Hero({ scrollY }: HeroProps) {
  // Safe calculation for parallax offset
  const bannerTranslate = typeof window !== 'undefined'
    ? (scrollY - window.innerHeight) * 0.12
    : 0;

  return (
    <section className="hero-section">
      <div className="container hero-content">
        {/* <div className="hero-eyebrow fadeInUp">
          COMPUTER SCIENCE STUDENT & MARKETING ENTHUSIAST
        </div> */}
        <motion.h1 layout className="hero-title fadeInUp" style={{ animationDelay: '100ms' }}>
          <RotatingText
            texts={['BUILDING', 'SCALING']}
            mainClassName="inline-flex"
            staggerDuration={0.03}
            staggerFrom="first"
            rotationInterval={3000}
          />
          <motion.span layout className="inline-block whitespace-pre"> CODE, </motion.span><br />
          <motion.span layout className="text-stroke inline-block">DRIVING</motion.span>
          <motion.span layout className="inline-block whitespace-pre"> GROWTH</motion.span>
        </motion.h1>
        <div className="hero-subtitle fadeInUp" style={{ animationDelay: '200ms', minHeight: '80px' }}>
          <TextType
            text="Blending technical Computer Science foundations in React.js and Next.js with the leadership, event management, and client communication skills of a Sales & Marketing professional."
            typingSpeed={30}
            startOnVisible={true}
            loop={false}
          />
        </div>
        <div className="hero-actions fadeInUp" style={{ animationDelay: '300ms' }}>
          <a href="#work" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-banner-container container fadeInUp" style={{ animationDelay: '400ms' }}>
        <div className="hero-banner">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
            alt="Modern software code development interface"
            className="hero-banner-img"
            style={{ transform: `translateY(${bannerTranslate}px) scale(1.18)` }}
          />
          <div className="hero-banner-overlay">
            <div className="player-badge">
              {/* <span className="pulse-dot"></span> */}
              {/* LIVE STATUS // OPEN TO INTERNSHIPS */}
            </div>
            <div className="banner-meta">
              <span>TRISHLA KUMARI // PORTFOLIO 2026</span>
              <span>BHUBANESWAR, IN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="scroll-cue-text"> </span>
        <div className="scroll-cue-line"></div>
      </div>
    </section>
  );
}
