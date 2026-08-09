import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiTerminal, FiSend } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const ContactSection = styled.section`
  padding: 120px 5% 80px;
  background: transparent;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const AmbientGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 500px;
  max-width: 800px;
  background: radial-gradient(circle at center, rgba(56, 217, 255, 0.12) 0%, rgba(214, 164, 99, 0.06) 40%, rgba(7, 17, 22, 0) 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const StatementText = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -2.5px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.text};

  span {
    background: linear-gradient(135deg, #38D9FF 0%, #D6A463 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: -1.5px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: ${props => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const TerminalWindow = styled.div`
  background: #03080B;
  border: 1px solid rgba(56, 217, 255, 0.15);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(56, 217, 255, 0.08);
  margin-bottom: 4rem;
`;

const TerminalTopBar = styled.div`
  background: #010406;
  padding: 0.75rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dots {
    display: flex;
    gap: 0.45rem;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      &:nth-child(1) { background: #ff5f56; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #27c93f; }
    }
  }

  .title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: ${props => props.theme.textMuted};
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const TerminalBody = styled.div`
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CommandPromptLine = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88rem;
  color: ${props => props.theme.cyan};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .user { color: ${props => props.theme.gold}; }
  .path { color: ${props => props.theme.textMuted}; }
`;

const CodeSnippet = styled.div`
  background: rgba(7, 17, 22, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1.2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.6;
  color: ${props => props.theme.textSecondary};

  .keyword { color: ${props => props.theme.gold}; }
  .property { color: ${props => props.theme.cyan}; }
  .string { color: #a5d6ff; }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.a)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.8rem 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  .protocol-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: ${props => props.theme.gold};
    background: rgba(214, 164, 99, 0.08);
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
  }

  &:hover {
    border-color: rgba(56, 217, 255, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.08);

    .icon-box {
      background: ${props => props.theme.cyan};
      color: #071116;
      border-color: ${props => props.theme.cyan};
      box-shadow: 0 0 20px rgba(56, 217, 255, 0.4);
      transform: scale(1.05) rotate(5deg);
    }
  }
`;

const ContactIcon = styled.div.attrs({ className: 'icon-box' })`
  width: 50px;
  height: 50px;
  background: rgba(56, 217, 255, 0.08);
  border: 1px solid rgba(56, 217, 255, 0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: ${props => props.theme.cyan};
  transition: all 0.3s ease;
`;

const ContactLabel = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin: 0;
  font-weight: 700;
`;

const ContactValue = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: ${props => props.theme.textSecondary};
  margin: 0;
  word-break: break-all;
  font-weight: 400;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLabel = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: ${props => props.theme.gold};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 54px;
  height: 54px;
  background: ${props => props.theme.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textSecondary};
  font-size: 1.4rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.cyan};
    color: #071116;
    border-color: ${props => props.theme.cyan};
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(56, 217, 255, 0.3);
  }
`;

const Contact = () => {
  const contactInfo = [
    {
      icon: FiInstagram,
      label: 'Instagram',
      value: '@iamharmikrathod',
      href: 'https://instagram.com/iamharmikrathod',
      protocol: 'PROTOCOL: HTTPS'
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'harmikrathod56@gmail.com',
      href: 'mailto:harmikrathod56@gmail.com',
      protocol: 'PROTOCOL: SMTP'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 9723975805',
      href: 'tel:+919723975805',
      protocol: 'PROTOCOL: TEL'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/harmikrathod',
      href: 'https://linkedin.com/in/harmikrathod',
      protocol: 'PROTOCOL: OAUTH2'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/harmikrathod09',
      href: 'https://github.com/harmikrathod09',
      protocol: 'PROTOCOL: SSH/GIT'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/harmikrathod09' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/harmikrathod' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/harmikrathod' },
    { icon: SiHackerrank, label: 'HackerRank', href: 'https://hackerrank.com/harmikrathod56' }
  ];

  return (
    <ContactSection id="contact">
      <AmbientGlow />
      <Container>
        <SectionHeader>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="num">05</span>
            <span className="slash">/</span>
            <span>CONTACT</span>
            <span className="ide-tag">connect.sh</span>
          </div>
          <StatementText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LET'S BUILD <br />
            <span>SOMETHING GREAT.</span>
          </StatementText>

          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm currently open to new opportunities, freelance projects, and full-time engineering roles.
          </SectionSubtitle>
        </SectionHeader>

        <TerminalWindow>
          <TerminalTopBar>
            <div className="dots">
              <div />
              <div />
              <div />
            </div>
            <div className="title">
              <FiTerminal /> zsh — ./initiate_contact.sh
            </div>
          </TerminalTopBar>

          <TerminalBody>
            <CommandPromptLine>
              <span className="user">harmik@dev-station</span>:<span className="path">~/contact</span>$ ./connect.sh --target=harmik
            </CommandPromptLine>

            <CodeSnippet>
              <div><span className="keyword">const</span> connection = <span className="keyword">await</span> recruiter.<span className="property">connect</span>(&#123;</div>
              <div>&nbsp;&nbsp;<span className="property">email</span>: <span className="string">"harmikrathod56@gmail.com"</span>,</div>
              <div>&nbsp;&nbsp;<span className="property">phone</span>: <span className="string">"+91 9723975805"</span>,</div>
              <div>&nbsp;&nbsp;<span className="property">status</span>: <span className="string">"READY_FOR_COLLABORATION"</span></div>
              <div>&#125;);</div>
            </CodeSnippet>

            <ContactGrid>
              {contactInfo.map((contact, index) => (
                <ContactCard
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="protocol-badge">{contact.protocol}</span>
                  <ContactIcon>
                    <contact.icon />
                  </ContactIcon>
                  <ContactLabel>{contact.label}</ContactLabel>
                  <ContactValue>{contact.value}</ContactValue>
                </ContactCard>
              ))}
            </ContactGrid>
          </TerminalBody>
        </TerminalWindow>

        <SocialSection>
          <SocialLabel>// Profiles &amp; Coding Platforms</SocialLabel>
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon />
              </SocialLink>
            ))}
          </SocialLinks>
        </SocialSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;
