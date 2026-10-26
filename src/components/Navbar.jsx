import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiMenu, FiX } from 'react-icons/fi';

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
  padding: ${props => props.$scrolled ? '0.55rem 1.4rem' : '0.8rem 1.8rem'};
  background: ${props => props.$scrolled ? 'rgba(11, 22, 27, 0.92)' : 'rgba(16, 36, 45, 0.8)'};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: ${props => props.$scrolled ? '0.5rem 1.1rem' : '0.7rem 1.3rem'};
  }

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
  width: ${props => props.$progress}%;
  transition: width 0.1s ease-out;
`;

const Logo = styled(motion.div)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  cursor: pointer;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  user-select: none;
  flex-shrink: 0;

  .prompt {
    color: ${props => props.theme.gold};
    margin-right: 0.4rem;
  }

  .dev {
    color: ${props => props.theme.cyan};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 992px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    color: ${props => props.$active ? props.theme.cyan : props.theme.textSecondary};
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    font-weight: ${props => props.$active ? '600' : '500'};
    position: relative;
    padding: 0.35rem 0.65rem;
    border-radius: 6px;
    background: ${props => props.$active ? 'rgba(56, 217, 255, 0.08)' : 'transparent'};
    border: 1px solid ${props => props.$active ? 'rgba(56, 217, 255, 0.2)' : 'transparent'};
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    white-space: nowrap;

    .ext {
      font-size: 0.72rem;
      opacity: 0.6;
    }

    &:hover {
      color: ${props => props.theme.cyan};
      border-color: rgba(56, 217, 255, 0.3);
      background: rgba(56, 217, 255, 0.06);
    }

    @media (max-width: 992px) {
      padding: 0.3rem 0.45rem;
      font-size: 0.76rem;
      gap: 0.2rem;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HireButton = styled(motion.button)`
  padding: 0.45rem 1.15rem;
  border-radius: 100px;
  border: 1px solid rgba(56, 217, 255, 0.35);
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
  white-space: nowrap;

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
  font-size: 1.25rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(56, 217, 255, 0.1);
    border-color: ${props => props.theme.cyan};
    color: ${props => props.theme.cyan};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* Mobile Drawer Styles */
const MobileDrawerOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
`;

const MobileDrawerContent = styled(motion.div)`
  width: 82%;
  max-width: 320px;
  height: 100%;
  background: rgba(11, 22, 27, 0.98);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 217, 255, 0.08);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow-y: auto;
`;

const MobileDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const MobileCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.text};
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(56, 217, 255, 0.15);
    border-color: ${props => props.theme.cyan};
    color: ${props => props.theme.cyan};
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 1.5rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
`;

const MobileNavItem = styled(motion.li)`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.92rem;
    font-weight: 500;
    color: ${props => props.theme.textSecondary};
    text-decoration: none;
    border: 1px solid transparent;
    transition: all 0.2s ease;

    .ext {
      font-size: 0.78rem;
      opacity: 0.6;
      color: ${props => props.theme.cyan};
    }

    &.active {
      color: ${props => props.theme.cyan};
      background: rgba(56, 217, 255, 0.1);
      border-color: rgba(56, 217, 255, 0.25);
    }

    &:hover {
      color: ${props => props.theme.cyan};
      background: rgba(56, 217, 255, 0.06);
    }
  }
`;

const MobileActionWrapper = styled.div`
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
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
      const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
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

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    <>
      <NavHeader
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <NavContainer $scrolled={scrolled}>
          <ScrollProgressBar $progress={scrollProgress} />
          <Logo
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('hero')}
          >
            <span className="prompt">&gt;_</span>
            <span>HR<span className="dev">.dev</span></span>
          </Logo>

          <NavLinks>
            <NavLink $active={activeSection === 'about'}>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                <span>About</span><span className="ext">.ts</span>
              </a>
            </NavLink>
            <NavLink $active={activeSection === 'projects'}>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                <span>Projects</span><span className="ext">.json</span>
              </a>
            </NavLink>
            <NavLink $active={activeSection === 'internships'}>
              <a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>
                <span>Experience</span><span className="ext">.log</span>
              </a>
            </NavLink>
            <NavLink $active={activeSection === 'certificates'}>
              <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>
                <span>Certificates</span><span className="ext">.key</span>
              </a>
            </NavLink>
            <NavLink $active={activeSection === 'contact'}>
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
            onClick={() => setIsMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Open Navigation Menu"
          >
            <FiMenu />
          </MenuButton>
        </NavContainer>
      </NavHeader>

      {/* Render Mobile Drawer in portal at document.body for clean rendering */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <MobileDrawerOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <MobileDrawerContent
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <MobileDrawerHeader>
                  <Logo onClick={() => { scrollToSection('hero'); setIsMenuOpen(false); }}>
                    <span className="prompt">&gt;_</span>
                    <span>HR<span className="dev">.dev</span></span>
                  </Logo>
                  <MobileCloseButton
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <FiX />
                  </MobileCloseButton>
                </MobileDrawerHeader>

                <MobileNavLinks>
                  <MobileNavItem
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 }}
                  >
                    <a
                      href="#about"
                      className={activeSection === 'about' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    >
                      <span>About</span><span className="ext">.ts</span>
                    </a>
                  </MobileNavItem>
                  <MobileNavItem
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 }}
                  >
                    <a
                      href="#projects"
                      className={activeSection === 'projects' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                    >
                      <span>Projects</span><span className="ext">.json</span>
                    </a>
                  </MobileNavItem>
                  <MobileNavItem
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.16 }}
                  >
                    <a
                      href="#internships"
                      className={activeSection === 'internships' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}
                    >
                      <span>Experience</span><span className="ext">.log</span>
                    </a>
                  </MobileNavItem>
                  <MobileNavItem
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      href="#certificates"
                      className={activeSection === 'certificates' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}
                    >
                      <span>Certificates</span><span className="ext">.key</span>
                    </a>
                  </MobileNavItem>
                  <MobileNavItem
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.24 }}
                  >
                    <a
                      href="#contact"
                      className={activeSection === 'contact' ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    >
                      <span>Contact</span><span className="ext">.sh</span>
                    </a>
                  </MobileNavItem>
                </MobileNavLinks>

                <MobileActionWrapper>
                  <HireButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                    style={{ width: '100%', justifyContent: 'center', padding: '0.7rem 1.4rem' }}
                  >
                    <FiPlay style={{ fontSize: '0.8rem' }} /> Hire Me
                  </HireButton>
                </MobileActionWrapper>
              </MobileDrawerContent>
            </MobileDrawerOverlay>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
