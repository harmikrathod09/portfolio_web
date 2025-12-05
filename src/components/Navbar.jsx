import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 5%;
  background: ${props => props.scrolled ? 'rgba(15, 20, 25, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? `1px solid rgba(214, 164, 99, 0.1)` : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(15, 20, 25, 0.98);
    backdrop-filter: blur(20px);
    padding: 2rem;
    gap: 1.5rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    border-top: 1px solid rgba(214, 164, 99, 0.1);
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.accent};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${props => props.theme.accent};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 0.5rem 0;
    }
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.accent};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          HR
        </Logo>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>Experience</a>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

