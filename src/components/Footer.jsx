import styled from 'styled-components';
import { FiGitBranch, FiCheckCircle, FiCpu } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: #071116;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterMain = styled.div`
  padding: 3rem 5%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const FooterText = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  color: ${props => props.theme.textMuted};
  margin: 0;

  span {
    color: ${props => props.theme.cyan};
  }
`;

const FooterNav = styled.div`
  display: flex;
  gap: 2rem;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.25s ease;
  
  &:hover {
    color: ${props => props.theme.cyan};
  }
`;

const IDEStatusBar = styled.div`
  width: 100%;
  background: #0D1B22;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.4rem 5%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: ${props => props.theme.textMuted};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StatusGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const StatusItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${props => props.active ? props.theme.cyan : props.theme.textMuted};

  .icon {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterNav>
          <FooterLink href="https://github.com/harmikrathod09" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
          <FooterLink href="https://linkedin.com/in/harmikrathod" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
          <FooterLink href="https://instagram.com/iamharmikrathod" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
        </FooterNav>
        <FooterText>
          © {new Date().getFullYear()} Harmik Rathod<span>.</span> All rights reserved.
        </FooterText>
      </FooterMain>

      <IDEStatusBar>
        <StatusGroup>
          <StatusItem active>
            <FiGitBranch className="icon" /> main
          </StatusItem>
          <StatusItem>
            <FiCheckCircle className="icon" style={{ color: '#00ffaa' }} /> 0 errors, 0 warnings
          </StatusItem>
        </StatusGroup>

        <StatusGroup>
          <StatusItem>
            <FiCpu className="icon" /> FLUTTER 3.24 &amp; MERN
          </StatusItem>
          <StatusItem>UTF-8</StatusItem>
          <StatusItem active>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ffaa', boxShadow: '0 0 6px #00ffaa' }}></span> ONLINE
          </StatusItem>
        </StatusGroup>
      </IDEStatusBar>
    </FooterContainer>
  );
};

export default Footer;
