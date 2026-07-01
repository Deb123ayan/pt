import FlowingMenu from './FlowingMenu';
import flowImg1 from '../assets/flow_menu/ChatGPT Image Jul 1, 2026, 06_30_56 PM.png';
import flowImg2 from '../assets/flow_menu/ChatGPT Image Jul 1, 2026, 06_32_11 PM.png';
import flowImg3 from '../assets/flow_menu/ChatGPT Image Jul 1, 2026, 06_35_08 PM.png';
import flowImg4 from '../assets/flow_menu/ChatGPT Image Jul 1, 2026, 06_36_38 PM.png';

interface NavbarProps {
  isNavbarVisible: boolean;
  isNavbarShrunk: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({
  isNavbarVisible,
  isNavbarShrunk,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  const menuItems = [
    { link: '#about', text: 'About', image: flowImg1 },
    { link: '#skills', text: 'Skills', image: flowImg2 },
    { link: '#work', text: 'Projects', image: flowImg3 },
    { link: '#services', text: 'Capabilities', image: flowImg4 },
    { link: '#achievements', text: 'Achievements', image: flowImg1 },
    { link: '#contact', text: 'Let\'s Talk', image: flowImg2 },
  ];

  return (
    <>
      <header className={`navbar ${isNavbarVisible ? 'visible' : ''} ${isNavbarShrunk ? 'shrunk' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <span className="accent-dot">Portfolio</span>
          </a>

          <nav className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#work" className="nav-item">Projects</a>
            <a href="#services" className="nav-item">Capabilities</a>
            <a href="#achievements" className="nav-item">Achievements</a>
          </nav>

          <div className="nav-cta-container">
            <button
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <FlowingMenu
          items={menuItems}
          onItemClick={() => setMobileMenuOpen(false)}
          bgColor="transparent"
          textColor="var(--text-primary)"
          marqueeBgColor="var(--text-primary)"
          marqueeTextColor="var(--bg-primary)"
          borderColor="var(--border-subtle)"
        />
      </div>
    </>
  );
}
