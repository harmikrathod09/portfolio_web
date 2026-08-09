import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiPlay } from 'react-icons/fi';

const NavHeader = styled(motion.header)`
  position: fixed;
  top: 1.2rem;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 0.8rem;
  }
`;

const NavContainer = styled.nav`
  pointer-events: auto;
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.scrolled ? '0.55rem 1.4rem' : '0.8rem 1.8rem'};
  background: ${props => props.scrolled ? 'rgba(11, 22, 27, 0.92)' : 'rgba(16, 36, 45, 0.8)'};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 0.75rem 1.2rem;
  }
`;

const ScrollProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, ${props => props.theme.cyan} 0%, ${props => props.theme.gold} 100%);
  width: ${props => props.progress}%;
  transition: width 0.1s ease-out;
`;

const Logo = styled(motion.div)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  cursor: pointer;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  .prompt {
    color: ${props => props.theme.gold};
  }

  span {
    color: ${props => props.theme.cyan};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.4rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: rgba(7, 17, 22, 0.96);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 2rem;
    gap: 2rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 999;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: ${props => props.active ? props.theme.cyan : props.theme.textSecondary};
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    font-weight: ${props => props.active ? '600' : '500'};
    position: relative;
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    background: ${props => props.active ? 'rgba(56, 217, 255, 0.08)' : 'transparent'};
    border: 1px solid ${props => props.active ? 'rgba(56, 217, 255, 0.2)' : 'transparent'};
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 0.35rem;

    .ext {
      font-size: 0.72rem;
      opacity: 0.6;
    }

    &:hover {
      color: ${props => props.theme.cyan};
      border-color: rgba(56, 217, 255, 0.3);
      background: rgba(56, 217, 255, 0.06);
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      color: ${props => props.active ? props.theme.cyan : props.theme.text};
      background: transparent;
      border: none;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HireButton = styled(motion.button)`
  padding: 0.45rem 1.1rem;
  border-radius: 100px;
  border: 1px solid rgba(56, 217, 255, 0.3);
  background: rgba(56, 217, 255, 0.1);
  color: ${props => props.theme.cyan};
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background: ${props => props.theme.cyan};
    color: #071116;
    border-color: ${props => props.theme.cyan};
    box-shadow: 0 0 20px rgba(56, 217, 255, 0.4);
    transform: translateY(-1px);
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 1001;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);

      // Active section detection
      const sections = ['hero', 'about', 'projects', 'internships', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <NavHeader
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <NavContainer scrolled={scrolled}>
        <ScrollProgressBar progress={scrollProgress} />
        <Logo
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollToSection('hero')}
        >
          <span className="prompt">&gt;_</span> HR<span>.dev</span>
        </Logo>

        <NavLinks isOpen={isMenuOpen}>
          <NavLink active={activeSection === 'about'} whileTap={{ scale: 0.97 }}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              <span>About</span><span className="ext">.ts</span>
            </a>
          </NavLink>
          <NavLink active={activeSection === 'projects'} whileTap={{ scale: 0.97 }}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              <span>Projects</span><span className="ext">.json</span>
            </a>
          </NavLink>
          <NavLink active={activeSection === 'internships'} whileTap={{ scale: 0.97 }}>
            <a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>
              <span>Experience</span><span className="ext">.log</span>
            </a>
          </NavLink>
          <NavLink active={activeSection === 'certificates'} whileTap={{ scale: 0.97 }}>
            <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>
              <span>Certificates</span><span className="ext">.key</span>
            </a>
          </NavLink>
          <NavLink active={activeSection === 'contact'} whileTap={{ scale: 0.97 }}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              <span>Contact</span><span className="ext">.sh</span>
            </a>
          </NavLink>
        </NavLinks>

        <NavActions>
          <HireButton
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('contact')}
          >
            <FiPlay style={{ fontSize: '0.75rem' }} /> Hire Me
          </HireButton>
        </NavActions>

        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </NavContainer>
    </NavHeader>
  );
};

export default Navbar;
