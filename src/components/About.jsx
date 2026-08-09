import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiAward, FiCompass, FiTerminal } from 'react-icons/fi';
import { SiFlutter, SiReact, SiNextdotjs, SiPython, SiNodedotjs } from 'react-icons/si';

const AboutSection = styled.section`
  padding: 100px 5% 60px;
  background: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  letter-spacing: -1.5px;
  line-height: 1.15;
  max-width: 750px;

  span {
    background: linear-gradient(135deg, #38D9FF 0%, #D6A463 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HighlightMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.div)`
  background: #0B161B;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: rgba(56, 217, 255, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.45), 0 0 20px rgba(56, 217, 255, 0.1);
  }
`;

const MetricTopBar = styled.div`
  background: #071116;
  padding: 0.45rem 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dots {
    display: flex;
    gap: 0.3rem;
    div {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      &:nth-child(1) { background: #ff5f56; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #27c93f; }
    }
  }

  .metric-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: ${props => props.theme.gold};
    letter-spacing: 0.5px;
  }
`;

const MetricBody = styled.div`
  padding: 1.3rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const MetricValue = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${props => props.theme.cyan};
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .prompt-char {
    font-size: 1.4rem;
    color: ${props => props.theme.gold};
  }
`;

const MetricLabel = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: ${props => props.theme.textSecondary};
  font-weight: 500;
  margin-top: 0.3rem;
`;

const EditorialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IDECard = styled(motion.div)`
  background: #0B161B;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(56, 217, 255, 0.3);
    transform: translateY(-3px);
  }
`;

const IDETopBar = styled.div`
  background: #071116;
  padding: 0.65rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dots {
    display: flex;
    gap: 0.4rem;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      &:nth-child(1) { background: #ff5f56; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #27c93f; }
    }
  }

  .file-tab {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: ${props => props.theme.cyan};
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const CardBody = styled.div`
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;

const CardHeader = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .header-icon {
    color: ${props => props.theme.cyan};
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const CodeSnippet = styled.div`
  background: rgba(7, 17, 22, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.6;
  color: ${props => props.theme.textSecondary};

  .keyword { color: ${props => props.theme.gold}; }
  .property { color: ${props => props.theme.cyan}; }
  .string { color: #a5d6ff; }
  .comment { color: #5f7480; font-style: italic; }
`;

const BioText = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.7;
`;

const EducationTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const EducationItem = styled.div`
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid rgba(56, 217, 255, 0.2);

  &:last-child {
    border-left-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0.35rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.theme.cyan};
    box-shadow: 0 0 10px rgba(56, 217, 255, 0.6);
  }
`;

const Degree = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const Institution = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  color: ${props => props.theme.cyan};
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const Details = styled.p`
  font-size: 0.85rem;
  color: ${props => props.theme.textMuted};
  font-weight: 400;
`;

const TechCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
`;

const TechCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  cursor: default;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  .tech-icon {
    font-size: 1.6rem;
    color: ${props => props.theme.cyan};
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .tech-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: ${props => props.theme.text};
  }

  .tech-sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: ${props => props.theme.textMuted};
    line-height: 1.2;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.theme.cyan};
    background: linear-gradient(180deg, rgba(20, 43, 53, 0.95) 0%, rgba(16, 36, 45, 0.95) 100%);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.15);

    .tech-icon {
      transform: scale(1.15);
      filter: drop-shadow(0 0 8px rgba(56, 217, 255, 0.6));
    }
  }
`;

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryLabel = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: ${props => props.theme.gold};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;

const SimpleChipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const SimpleChip = styled(motion.span)`
  padding: 0.45rem 1rem;
  background: rgba(11, 22, 27, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${props => props.theme.textSecondary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${props => props.theme.cyan};
    color: ${props => props.theme.cyan};
    background: rgba(56, 217, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const About = () => {
  const technicalSkills = [
    { name: 'Flutter', sub: 'Mobile Development', icon: <SiFlutter /> },
    { name: 'MERN', sub: 'Full Stack Web', icon: <SiReact /> },
    { name: 'Next.js', sub: 'React Framework', icon: <SiNextdotjs /> },
    { name: 'Python', sub: 'Backend & AI/ML', icon: <SiPython /> },
    { name: 'Java', sub: 'OOP Core', icon: <FiCode /> },
    { name: 'C++', sub: 'Data Structures', icon: <FiCode /> },
    { name: 'C', sub: 'Systems Logic', icon: <FiCode /> },
    { name: 'Nest.js', sub: 'Node.js Framework', icon: <SiNodedotjs /> },
    { name: 'API Integration', sub: 'REST & Cloud Services', icon: <FiCode /> }
  ];

  const softSkills = [
    { name: 'Leadership', emoji: '🎯' },
    { name: 'Teamwork', emoji: '🤝' },
    { name: 'Problem-Solving', emoji: '🧩' },
    { name: 'Creativity', emoji: '💡' }
  ];

  const interests = [
    { name: 'Programming', emoji: '💻' },
    { name: 'Photography', emoji: '📸' },
    { name: 'Editing', emoji: '🎬' },
    { name: 'Music Listening', emoji: '🎧' }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <div className="section-label">
            <span className="num">01</span>
            <span className="slash">/</span>
            <span>ABOUT</span>
            <span className="ide-tag">developer_spec.ts</span>
          </div>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Engineering <span>scalable apps</span> &amp; intuitive user experiences.
          </SectionTitle>
        </SectionHeader>

        <HighlightMetrics>
          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <MetricTopBar>
              <div className="dots">
                <div />
                <div />
                <div />
              </div>
              <span className="metric-tag">SYS_STAT #01</span>
            </MetricTopBar>
            <MetricBody>
              <MetricValue><span className="prompt-char">&gt;</span> 8.53</MetricValue>
              <MetricLabel>B.Tech CGPA</MetricLabel>
            </MetricBody>
          </MetricCard>

          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <MetricTopBar>
              <div className="dots">
                <div />
                <div />
                <div />
              </div>
              <span className="metric-tag">SYS_STAT #02</span>
            </MetricTopBar>
            <MetricBody>
              <MetricValue><span className="prompt-char">&gt;</span> 9.33</MetricValue>
              <MetricLabel>Diploma CGPA</MetricLabel>
            </MetricBody>
          </MetricCard>

          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
          >
            <MetricTopBar>
              <div className="dots">
                <div />
                <div />
                <div />
              </div>
              <span className="metric-tag">SYS_STAT #03</span>
            </MetricTopBar>
            <MetricBody>
              <MetricValue><span className="prompt-char">&gt;</span> 11+</MetricValue>
              <MetricLabel>Projects Built</MetricLabel>
            </MetricBody>
          </MetricCard>

          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <MetricTopBar>
              <div className="dots">
                <div />
                <div />
                <div />
              </div>
              <span className="metric-tag">SYS_STAT #04</span>
            </MetricTopBar>
            <MetricBody>
              <MetricValue><span className="prompt-char">&gt;</span> 4+</MetricValue>
              <MetricLabel>Roles &amp; Internships</MetricLabel>
            </MetricBody>
          </MetricCard>
        </HighlightMetrics>

        <EditorialGrid>
          <Column>
            <IDECard
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IDETopBar>
                <div className="dots">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="file-tab">
                  <FiCompass /> bio_overview.ts
                </div>
              </IDETopBar>

              <CardBody>
                <CardHeader>
                  <FiCompass className="header-icon" /> Background &amp; Engineering Philosophy
                </CardHeader>

                <CodeSnippet>
                  <div><span className="keyword">class</span> DeveloperProfile &#123;</div>
                  <div>&nbsp;&nbsp;<span className="property">readonly</span> location = <span className="string">"Rajkot, Gujarat, India"</span>;</div>
                  <div>&nbsp;&nbsp;<span className="property">readonly</span> focus = [<span className="string">"Flutter"</span>, <span className="string">"MERN"</span>, <span className="string">"Next.js"</span>];</div>
                  <div>&#125;</div>
                </CodeSnippet>

                <BioText>
                  I am a Computer Science &amp; Engineering student at Darshan University with a passion for constructing performant web and mobile products.
                  My focus spans cross-platform mobile development with <strong>Flutter</strong> and full-stack web applications using <strong>MERN</strong>, <strong>Next.js</strong>, and <strong>Python</strong>.
                  I thrive on solving complex technical challenges, writing clean maintainable code, and crafting elegant interfaces that leave a lasting impression.
                </BioText>
              </CardBody>
            </IDECard>

            <IDECard
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <IDETopBar>
                <div className="dots">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="file-tab">
                  <FiBookOpen /> education_history.json
                </div>
              </IDETopBar>

              <CardBody>
                <CardHeader>
                  <FiBookOpen className="header-icon" /> Education Timeline
                </CardHeader>
                <EducationTimeline>
                  <EducationItem>
                    <Degree>B.Tech Computer Science &amp; Engineering</Degree>
                    <Institution>Darshan University - Rajkot</Institution>
                    <Details>CGPA: 8.53 | Expected Graduation: 2027</Details>
                  </EducationItem>
                  <EducationItem>
                    <Degree>Diploma in Computer Engineering</Degree>
                    <Institution>GMB Polytechnic - Rajula</Institution>
                    <Details>CGPA: 9.33 | Graduated: 2024</Details>
                  </EducationItem>
                  <EducationItem>
                    <Degree>Secondary School (10th)</Degree>
                    <Institution>Shree Swami Narayan Gurukul - Rajula</Institution>
                    <Details>Percentage/CGPA: 64% | Year: 2021</Details>
                  </EducationItem>
                </EducationTimeline>
              </CardBody>
            </IDECard>
          </Column>

          <Column>
            <IDECard
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IDETopBar>
                <div className="dots">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="file-tab">
                  <FiCode /> tech_stack.config.json
                </div>
              </IDETopBar>

              <CardBody>
                <CardHeader>
                  <FiCode className="header-icon" /> Technical Toolkit
                </CardHeader>
                <CategoryBlock>
                  <CategoryLabel>Core Technologies</CategoryLabel>
                  <TechCardsGrid>
                    {technicalSkills.map((skill, index) => (
                      <TechCard key={index} whileHover={{ y: -4 }}>
                        <span className="tech-icon">{skill.icon}</span>
                        <span className="tech-name">{skill.name}</span>
                        <span className="tech-sub">{skill.sub}</span>
                      </TechCard>
                    ))}
                  </TechCardsGrid>
                </CategoryBlock>
              </CardBody>
            </IDECard>

            <IDECard
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <IDETopBar>
                <div className="dots">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="file-tab">
                  <FiAward /> personal_attributes.ts
                </div>
              </IDETopBar>

              <CardBody>
                <CardHeader>
                  <FiAward className="header-icon" /> Soft Skills &amp; Personal Interests
                </CardHeader>
                <CategoryBlock style={{ marginBottom: '1.5rem' }}>
                  <CategoryLabel>Soft Skills</CategoryLabel>
                  <SimpleChipGrid>
                    {softSkills.map((skill, index) => (
                      <SimpleChip key={index}>
                        <span>{skill.emoji}</span>
                        <span>{skill.name}</span>
                      </SimpleChip>
                    ))}
                  </SimpleChipGrid>
                </CategoryBlock>

                <CategoryBlock>
                  <CategoryLabel>Interests</CategoryLabel>
                  <SimpleChipGrid>
                    {interests.map((interest, index) => (
                      <SimpleChip key={index}>
                        <span>{interest.emoji}</span>
                        <span>{interest.name}</span>
                      </SimpleChip>
                    ))}
                  </SimpleChipGrid>
                </CategoryBlock>
              </CardBody>
            </IDECard>
          </Column>
        </EditorialGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
