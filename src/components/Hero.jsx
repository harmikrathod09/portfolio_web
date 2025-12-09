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
  padding: 8rem 5% 5rem;
  background: linear-gradient(135deg, #0a1424 0%, #13294b 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(214, 164, 99, 0.1) 0%, transparent 50%);
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: ${props => props.theme.accent};
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypewriterContainer = styled(motion.div)`
  font-size: 1.8rem;
  color: ${props => props.theme.text};
  min-height: 2.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TypewriterText = styled.span`
  color: ${props => props.theme.accent};
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.5rem;
  background: ${props => props.theme.accent};
  margin-left: 4px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  max-width: 600px;
`;

const BadgeRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0.5rem 0 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled(motion.span)`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(241, 194, 125, 0.14);
  border: 1px solid rgba(241, 194, 125, 0.4);
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.primary ? props.theme.accent : 'transparent'};
  background: ${props => props.primary ? props.theme.accent : 'transparent'};
  color: ${props => props.primary ? props.theme.primary : props.theme.accent};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(241, 194, 125, 0.35);
  }
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const StatCard = styled(motion.div).attrs(props => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: props.delay || 0 },
}))`
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(241, 194, 125, 0.25);
  backdrop-filter: blur(8px);
`;

const StatValue = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: ${props => props.theme.textSecondary};
  margin-top: 0.25rem;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${props => props.theme.accent};
  box-shadow: 0 20px 60px rgba(241, 194, 125, 0.35),
              0 0 0 10px rgba(241, 194, 125, 0.12),
              0 0 0 20px rgba(241, 194, 125, 0.06);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, ${props => props.theme.accent}, ${props => props.theme.primary});
    opacity: 0.3;
    z-index: 0;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ImagePlaceholder = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.accent} 0%, ${props => props.theme.primary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${props => props.theme.text};
  box-shadow: 0 20px 60px rgba(241, 194, 125, 0.35);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(214, 164, 99, 0.1), transparent);
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    font-size: 3rem;
  }
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

  const stats = [
    { label: 'Projects delivered', value: '12+' },
    { label: 'Hackathons', value: '4' },
    { label: 'Happy clients', value: '6' },
  ];

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I’m
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Harmik Rathod
          </Name>
         { /* <BadgeRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Badge>Based in Gujarat, India</Badge>
            <Badge>Open to full-time & freelance</Badge>
            <Badge>Responds within 24 hrs</Badge>
          </BadgeRow> */}
          <TypewriterContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypewriterText>{currentTitle}</TypewriterText>
            <Cursor />
          </TypewriterContainer>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I design and build polished digital products that blend solid engineering
            with thoughtful UX. From web apps to mobile experiences, I focus on performance,
            reliability, and details that make products feel premium.
          </Description>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
              View portfolio
            </Button>
          </ButtonGroup>
          {/* <Stats
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {stats.map((item, idx) => (
              <StatCard key={item.label} delay={idx * 0.05}>
                <StatValue>{item.value}</StatValue>
                <StatLabel>{item.label}</StatLabel>
              </StatCard>
            ))}
          </Stats> */}
        </HeroContent>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {profileImage ? (
            <ImageWrapper>
              <ProfileImage
                src={profileImage}
                alt="Harmik Rathod - Full Stack Developer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </ImageWrapper>
          ) : (
            <ImagePlaceholder>HR</ImagePlaceholder>
          )}
        </ImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

