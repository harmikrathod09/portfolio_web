import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const FooterContainer = styled.footer`
  padding: 4rem 5%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Harmik Rathod. Built with React & Framer Motion.
      </Copyright>
      <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.5 }}>
        <FooterLink href="https://github.com/harmikrathod09" target="_blank">GitHub</FooterLink>
        <FooterLink href="https://linkedin.com/in/harmikrathod" target="_blank">LinkedIn</FooterLink>
        <FooterLink href="https://instagram.com/iamharmikrathod" target="_blank">Instagram</FooterLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
