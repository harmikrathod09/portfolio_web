import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.scrolled ? '0.7rem 5%' : '1.2rem 5%'};
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(16px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.scrolled ? 'blur(16px)' : 'none'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: ${props => props.scrolled ? `1px solid rgba(255, 255, 255, 0.1)` : 'none'};
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 900;
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  letter-spacing: -2px;
  font-family: 'Outfit', sans-serif;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 1.5rem;
    gap: 2.5rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HireButton = styled(motion.button)`
  padding: 0.7rem 1.8rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: white;
  color: black;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: ${props => props.theme.textSecondary};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease;
    padding: 0.5rem 0;

    &:hover {
      color: ${props => props.theme.text};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: ${props => props.theme.accent};
      transition: all 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      font-weight: 700;
      color: ${props => props.theme.text};
    }
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  width: 45px;
  height: 45px;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, cubicBezier: [0.4, 0, 0.2, 1] }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          HR
        </Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </NavLink>
          <NavLink whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          </NavLink>
          <NavLink whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>Experience</a>
          </NavLink>
          <NavLink whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>Certificates</a>
          </NavLink>
          <NavLink whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </NavLink>
        </NavLinks>

        <NavActions>
          <HireButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Hire me
          </HireButton>
        </NavActions>

        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

