import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiCheckCircle } from 'react-icons/fi';

import profileImage from '../assets/profile.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 5% 4rem;
  background: transparent;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3.5rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding-top: 3rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const PromptBadge = styled(motion.div)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: ${props => props.theme.cyan};
  font-weight: 600;
  background: rgba(56, 217, 255, 0.08);
  padding: 0.45rem 1.1rem;
  border-radius: 100px;
  width: fit-content;
  border: 1px solid rgba(56, 217, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .prompt-char {
    color: ${props => props.theme.gold};
  }

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const Name = styled(motion.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 5.2rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin: 0;
  line-height: 0.95;
  letter-spacing: -3px;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: -2px;
  }
`;

const TypewriterContainer = styled(motion.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.2rem;
  color: ${props => props.theme.text};
  min-height: 2.8rem;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const TypewriterText = styled.span`
  background: linear-gradient(135deg, #38D9FF 0%, #D6A463 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 2rem;
  background: ${props => props.theme.cyan};
  margin-left: 6px;
  vertical-align: middle;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.65;
  max-width: 620px;
  font-weight: 400;
  
  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled(motion.a)`
  padding: 0.85rem 2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 100px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  ${props => props.primary ? `
    background: #38D9FF;
    color: #071116;
    border: 1px solid #38D9FF;
    box-shadow: 0 4px 20px rgba(56, 217, 255, 0.25);
  ` : `
    background: rgba(16, 36, 45, 0.6);
    color: #F5F7FA;
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  `}

  &:hover {
    transform: translateY(-2px);
    ${props => props.primary ? `
      background: #5ce0ff;
      box-shadow: 0 8px 25px rgba(56, 217, 255, 0.4);
    ` : `
      background: rgba(20, 43, 53, 0.9);
      border-color: rgba(56, 217, 255, 0.3);
      color: #38D9FF;
    `}
  }
`;

/* IDE Code Window Container */
const VisualCardContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IDEMainWindow = styled.div`
  width: 100%;
  max-width: 480px;
  background: ${props => props.theme.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(56, 217, 255, 0.08);
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(56, 217, 255, 0.3);
  }
`;

const IDETopBar = styled.div`
  background: #0D1B22;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 0.45rem;

  div {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    
    &:nth-child(1) { background: #ff5f56; }
    &:nth-child(2) { background: #ffbd2e; }
    &:nth-child(3) { background: #27c93f; }
  }
`;

const IDETabs = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const IDETab = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76rem;
  padding: 0.25rem 0.7rem;
  border-radius: 6px 6px 0 0;
  border: 1px solid ${props => props.active ? 'rgba(56, 217, 255, 0.3)' : 'transparent'};
  border-bottom: none;
  background: ${props => props.active ? 'rgba(16, 36, 45, 0.9)' : 'transparent'};
  color: ${props => props.active ? props.theme.cyan : props.theme.textMuted};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

const IDEBody = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const AvatarWrapper = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 14px;
  overflow: hidden;
  border: 1.5px solid rgba(56, 217, 255, 0.3);
  position: relative;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10242D 0%, #142B35 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: ${props => props.theme.cyan};
`;

const ProfileMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.73rem;
  color: #00ffaa;
  font-weight: 600;
  background: rgba(0, 255, 170, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  width: fit-content;
  border: 1px solid rgba(0, 255, 170, 0.2);

  .pulse-dot {
    width: 6px;
    height: 6px;
    background: #00ffaa;
    border-radius: 50%;
    box-shadow: 0 0 8px #00ffaa;
    animation: pulse 2s infinite;
  }
`;

const CodeEditor = styled.div`
  background: rgba(7, 17, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.55;
  color: ${props => props.theme.textSecondary};

  .line {
    display: flex;
    gap: 0.8rem;
  }

  .num {
    color: ${props => props.theme.textMuted};
    opacity: 0.4;
    user-select: none;
    width: 1.4rem;
    text-align: right;
  }

  .keyword { color: ${props => props.theme.gold}; }
  .property { color: ${props => props.theme.cyan}; }
  .string { color: #a5d6ff; }
  .number { color: #79c0ff; }
  .comment { color: #5f7480; font-style: italic; }
`;

const TerminalBar = styled.div`
  background: rgba(13, 27, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #00ffaa;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const TechChip = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${props => props.theme.textSecondary};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.cyan};
    color: ${props => props.theme.cyan};
  }
`;

const Hero = () => {
  const [activeTab, setActiveTab] = useState('developer.ts');

  const titles = [
    "Flutter App Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Specialist",
    "Node.js Backend Engineer"
  ];

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const current = titles[currentIndex];

    if (!isDeleting && currentTitle === current) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentTitle === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    } else {
      const timeout = setTimeout(() => {
        setCurrentTitle(
          isDeleting
            ? current.substring(0, currentTitle.length - 1)
            : current.substring(0, currentTitle.length + 1)
        );
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentTitle, isDeleting, currentIndex, titles]);

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <PromptBadge
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="prompt-char">&gt;_</span> harmik.init() — Available for hire
          </PromptBadge>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Harmik Rathod
          </Name>
          <TypewriterContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TypewriterText>{currentTitle}</TypewriterText>
            <Cursor />
          </TypewriterContainer>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            I design and build polished digital products that blend solid engineering
            with thoughtful UX. From web apps to mobile experiences, I focus on performance,
            reliability, and details that make products feel premium.
          </Description>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              primary
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects →
            </Button>
            <Button
              href="mailto:harmikrathod56@gmail.com?subject=Project%20Opportunity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let’s collaborate
            </Button>
          </ButtonGroup>
        </HeroContent>

        <VisualCardContainer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <IDEMainWindow>
            <IDETopBar>
              <WindowButtons>
                <div />
                <div />
                <div />
              </WindowButtons>
              <IDETabs>
                <IDETab active={activeTab === 'developer.ts'} onClick={() => setActiveTab('developer.ts')}>
                  <FiCode style={{ fontSize: '0.8rem' }} /> developer.ts
                </IDETab>
                <IDETab active={activeTab === 'main.dart'} onClick={() => setActiveTab('main.dart')}>
                  <FiTerminal style={{ fontSize: '0.8rem' }} /> main.dart
                </IDETab>
              </IDETabs>
            </IDETopBar>

            <IDEBody>
              <ProfileHeader>
                <AvatarWrapper>
                  {profileImage ? (
                    <img src={profileImage} alt="Harmik Rathod" />
                  ) : (
                    <AvatarFallback>HR</AvatarFallback>
                  )}
                </AvatarWrapper>
                <ProfileMeta>
                  <StatusPill>
                    <span className="pulse-dot"></span> STATUS: ACTIVE_DEV
                  </StatusPill>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F7FA', fontFamily: 'Space Grotesk' }}>
                    Harmik Rathod
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#71818A', fontFamily: 'JetBrains Mono' }}>
                    Rajkot, Gujarat, India
                  </span>
                </ProfileMeta>
              </ProfileHeader>

              {activeTab === 'developer.ts' ? (
                <CodeEditor>
                  <div className="line"><span className="num">01</span><span><span className="keyword">interface</span> Developer &#123;</span></div>
                  <div className="line"><span className="num">02</span><span>&nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Harmik Rathod"</span>;</span></div>
                  <div className="line"><span className="num">03</span><span>&nbsp;&nbsp;<span className="property">role</span>: <span className="string">"Flutter & Full Stack"</span>;</span></div>
                  <div className="line"><span className="num">04</span><span>&nbsp;&nbsp;<span className="property">cgpa</span>: <span className="number">8.53</span>; <span className="comment">// B.Tech CSE</span></span></div>
                  <div className="line"><span className="num">05</span><span>&nbsp;&nbsp;<span className="property">openToWork</span>: <span className="keyword">true</span>;</span></div>
                  <div className="line"><span className="num">06</span><span>&#125;</span></div>
                </CodeEditor>
              ) : (
                <CodeEditor>
                  <div className="line"><span className="num">01</span><span><span className="comment">// Flutter Mobile Entry</span></span></div>
                  <div className="line"><span className="num">02</span><span><span className="keyword">void</span> <span className="property">main</span>() &#123;</span></div>
                  <div className="line"><span className="num">03</span><span>&nbsp;&nbsp;<span className="property">runApp</span>(<span className="string">BloodifyApp</span>());</span></div>
                  <div className="line"><span className="num">04</span><span>&#125;</span></div>
                </CodeEditor>
              )}

              <TerminalBar>
                <FiCheckCircle style={{ color: '#00ffaa' }} />
                <span>[TERMINAL] flutter pub get — 0 errors</span>
              </TerminalBar>

              <TechBadges>
                <TechChip>.flutter</TechChip>
                <TechChip>.firebase</TechChip>
                <TechChip>.mern</TechChip>
                <TechChip>.nextjs</TechChip>
                <TechChip>.python</TechChip>
              </TechBadges>
            </IDEBody>
          </IDEMainWindow>
        </VisualCardContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
