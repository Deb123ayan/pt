import { useState, useEffect, useRef } from 'react';
import './App.css';

// Component imports
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Project type definition
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  client: string;
  imageUrl: string;
  aspect: 'wide' | 'narrow';
  description: string;
}

// Service/Capability type definition
interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

// Achievement/Award type definition
interface Achievement {
  id: number;
  title: string;
  details: string;
  date?: string;
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeService, setActiveService] = useState<string>('01');
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // For scroll effects (like revealing elements)
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll progress & offset handler for parallax and navbar
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Setup Intersection Observer for reveal-on-scroll elements
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        revealElements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  // Re-observe when category changes since portfolio layout re-renders
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observerRef.current?.observe(el));
  }, [activeCategory]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'ZafBy — AI-Driven Insurance Platform',
      category: 'DEVELOPMENT',
      year: '2025',
      client: 'Gig Economy Workers Scale',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      aspect: 'wide',
      description: 'Worked as Frontend Engineer to construct a scalable gig-worker insurance ecosystem. Built frontend workflows, designed database schemas, and structured onboarding layouts.'
    },
    {
      id: 2,
      title: 'Jobillo — Online Interview Platform',
      category: 'DEVELOPMENT',
      year: '2025',
      client: 'AI/ML Monitoring System',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
      aspect: 'narrow',
      description: 'Created frontend modules and AI/ML integrations for malpractice detection, including real-time video feeds and facial recognition workflows.'
    },
    {
      id: 3,
      title: 'Volvo Group Campus Ambassador',
      category: 'MARKETING',
      year: '2025',
      client: 'Volvo Group Bhubaneswar',
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop',
      aspect: 'narrow',
      description: 'Promoted core brand initiatives, organized academic outreach projects, and coordinated campus recruitment/promotional schedules.'
    },
    {
      id: 4,
      title: 'MEOW.INC — E-Commerce Platform',
      category: 'DEVELOPMENT',
      year: '2025',
      client: 'Interactive Retail Product',
      imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop',
      aspect: 'wide',
      description: 'Constructed responsive web components and linked secure mock payment workflows to optimize overall customer conversion flows.'
    }
  ];

  const services: Service[] = [
    {
      id: '01',
      number: '01',
      title: 'Frontend & Full Stack Development',
      description: 'Building performant and accessible web platforms using React.js and Next.js. I structure robust database models using SQLite, Supabase, and PocketBase, integrated via secure REST APIs.',
      capabilities: ['React.js & Next.js', 'Tailwind CSS & CSS3', 'Supabase & PocketBase', 'Authentication & API Integration']
    },
    {
      id: '02',
      number: '02',
      title: 'Sales & Marketing Operations',
      description: 'Driving engagement and brand awareness. Drawing from my Volvo Group Campus Ambassador experience, I plan promotions, design outreach materials, and lead student engagement projects.',
      capabilities: ['Event Management', 'Brand Promotion', 'Strategic Communication', 'Campaign Planning']
    },
    {
      id: '03',
      number: '03',
      title: 'Core Computing & Analysis',
      description: 'Solid foundations in data structures (Trees, Graphs, Stacks, Queues) and system design. Experienced in using MS Excel, Word, and PowerPoint for data analysis and client-facing decks.',
      capabilities: ['Data Structures & Algorithms', 'Basic System Design', 'MS Excel Analytics', 'Technical Documentation']
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "1st Position — Guidewire Developer Trials",
      details: "Secured first position at the college level by solving complex logic challenges and engineering scalable system designs under trial conditions."
    },
    {
      id: 2,
      title: "Volvo Group Ambassador Recognition",
      details: "Acknowledged for student engagement performance, spearheading outreach programs and event coordination in Bhubaneswar."
    },
    {
      id: 3,
      title: "AI Malpractice Integration (Jobillo)",
      details: "Successfully developed real-time facial recognition frontend modules, lowering test malpractice risks during platforms trial runs."
    }
  ];

  const categories = ['ALL', 'DEVELOPMENT', 'MARKETING'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    setTimeout(() => setEmailSubmitted(false), 5000);
  };

  // Determine visibility states for header
  const isNavbarVisible = scrollY > 260; // Show navbar when scrolling past splash
  const isNavbarShrunk = scrollY > 600; // Shrink navbar to 70% width when scrolling further

  return (
    <div className="portfolio-app">
      {/* Film Grain overlay */}
      <div className="grain-overlay" />

      {/* Floating Parallax Background Circles */}
      <div 
        className="parallax-bg-blob blob-orange-1" 
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />
      <div 
        className="parallax-bg-blob blob-pink-1" 
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />
      <div 
        className="parallax-bg-blob blob-orange-2" 
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      />
      <div 
        className="parallax-bg-blob blob-pink-2" 
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />

      {/* Navbar Component */}
      <Navbar
        isNavbarVisible={isNavbarVisible}
        isNavbarShrunk={isNavbarShrunk}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Floating Mobile Bubble Menu (rendered directly under the app shell to avoid parent stacking context limits) */}
      <button 
        className={`mobile-bubble-menu ${isNavbarVisible ? 'visible' : ''} ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <span></span>
        <span></span>
      </button>

      {/* Floating Mobile Bubble Menu List */}
      <div className={`mobile-bubble-menu-list ${mobileMenuOpen && isNavbarVisible ? 'open' : ''}`}>
        <a href="#about" className="bubble-menu-item icon-only" onClick={() => setMobileMenuOpen(false)} title="About">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </a>
        <a href="#skills" className="bubble-menu-item icon-only" onClick={() => setMobileMenuOpen(false)} title="Skills">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </a>
        <a href="#work" className="bubble-menu-item icon-only" onClick={() => setMobileMenuOpen(false)} title="Projects">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        </a>
        <a href="#services" className="bubble-menu-item icon-only" onClick={() => setMobileMenuOpen(false)} title="Capabilities">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </a>
        <a href="#achievements" className="bubble-menu-item icon-only" onClick={() => setMobileMenuOpen(false)} title="Achievements">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
        </a>
        <a href="#contact" className="bubble-menu-item bubble-menu-cta icon-only" onClick={() => setMobileMenuOpen(false)} title="Let's Talk">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>

      {/* Main Content */}
      <main>
        {/* Splash First Page */}
        <Splash scrollY={scrollY} />

        {/* Hero Section */}
        <Hero scrollY={scrollY} />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Selected Projects / Work Section */}
        <Projects
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filteredProjects={filteredProjects}
        />

        {/* Services Accordion Section */}
        <Services
          services={services}
          activeService={activeService}
          setActiveService={setActiveService}
        />

        {/* Experience Section */}
        <Experience />

        {/* Achievements Timeline/Carousel */}
        <Achievements
          achievements={achievements}
          activeAchievement={activeAchievement}
          setActiveAchievement={setActiveAchievement}
        />

        {/* Contact & Booking Section */}
        <Contact
          emailSubmitted={emailSubmitted}
          handleContactSubmit={handleContactSubmit}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
