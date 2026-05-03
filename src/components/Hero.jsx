import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import profile image - add your image as 'profile.jpg' in the assets folder
// If the image doesn't exist, the placeholder will be shown
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
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding-top: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Greeting = styled(motion.div)`
  font-size: 0.9rem;
  color: ${props => props.theme.accent};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: rgba(0, 210, 255, 0.1);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  width: fit-content;
  border: 1px solid rgba(0, 210, 255, 0.2);

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const Name = styled(motion.h1)`
  font-size: 6rem;
  font-weight: 900;
  color: ${props => props.theme.text};
  margin: 0;
  line-height: 0.9;
  letter-spacing: -4px;
  background: linear-gradient(to bottom, #ffffff 30%, #555555 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: -2px;
  }
`;

const TypewriterContainer = styled(motion.div)`
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  min-height: 3rem;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const TypewriterText = styled.span`
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 4px;
  height: 2.2rem;
  background: ${props => props.theme.accent};
  margin-left: 8px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  max-width: 650px;
  font-weight: 400;
  
  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 100px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  ${props => props.primary ? `
    background: white;
    color: black;
    border: 1px solid white;
  ` : `
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  `}

  &:hover {
    transform: translateY(-3px);
    ${props => props.primary ? `
      box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
    ` : `
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
    `}
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImage = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 40px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 52px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle, ${props => props.theme.accent}22 0%, transparent 70%);
    z-index: -1;
    filter: blur(20px);
  }
`;

const LocationBadge = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  right: -20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  padding: 0.8rem 1.4rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    bottom: 20px;
    right: 0;
    padding: 0.6rem 1rem;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  box-shadow: 0 0 10px #00ff88;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

const LocationText = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
`;



const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Flutter App Developer",
    "Next.js Developer",
    "Node.js Backend Developer"
  ];

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
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
          <Greeting
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Available for hire
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harmik Rathod
          </Name>
          <TypewriterContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypewriterText>{currentTitle}</TypewriterText>
            <Cursor />
          </TypewriterContainer>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I design and build polished digital products that blend solid engineering
            with thoughtful UX. From web apps to mobile experiences, I focus on performance,
            reliability, and details that make products feel premium.
          </Description>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              primary
              href="mailto:harmikrathod56@gmail.com?subject=Project%20Opportunity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s collaborate
            </Button>
            <Button
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View projects
            </Button>
          </ButtonGroup>
        </HeroContent>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ImageWrapper
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {profileImage ? (
              <ProfileImage
                src={profileImage}
                alt="Harmik Rathod"
              />
            ) : (
              <div style={{ width: 380, height: 380, background: 'linear-gradient(135deg, #00d2ff, #9d50bb)', borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', fontWeight: 800 }}>HR</div>
            )}
          </ImageWrapper>
        </ImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

