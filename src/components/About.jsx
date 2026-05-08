import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: -2px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  margin-bottom: 6rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const GlassCard = styled(motion.div).attrs({ className: 'glass-card' })`
  padding: 3.5rem;
`;


const CardTitle = styled.h3`
  font-size: 2.2rem;
  color: white;
  margin-bottom: 2.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  letter-spacing: -1.5px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const EducationItem = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  padding-left: 1.8rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: ${props => props.theme.gradient};
    border-radius: 10px;
    opacity: 0.5;
  }

  &:last-child {
    margin-bottom: 0;
    &::before {
      bottom: 70%;
    }
  }
`;

const Degree = styled.h4`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 0.4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Institution = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.accent};
  margin-bottom: 0.4rem;
  font-weight: 600;
`;

const Details = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};
  font-weight: 400;
`;

const SkillCategory = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.6rem 1.4rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: white;
    color: black;
    border-color: white;
    transform: translateY(-3px);
  }
`;


const About = () => {
  const technicalSkills = ['C', 'C++', 'Java', 'Python', 'MERN', 'Flutter', 'Next.js', 'Nest.js', 'API Integration'];
  const softSkills = ['Leadership', 'Teamwork', 'Problem-Solving', 'Creativity'];
  const interests = ['Programming', 'Photography', 'Editing', 'Music Listening',];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My educational journey and professional skills
        </SectionSubtitle>

        <ContentGrid>
          <GlassCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CardTitle>Education</CardTitle>
            <EducationItem>
              <Degree>B.Tech Computer Science & Engineering</Degree>
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
          </GlassCard>

          <GlassCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CardTitle>Skills & Interests</CardTitle>
            <SkillCategory>
              <CategoryTitle>Technical</CategoryTitle>
              <SkillTags>
                {technicalSkills.map((skill, index) => (
                  <SkillTag key={index} whileHover={{ y: -5 }}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>Soft Skills</CategoryTitle>
              <SkillTags>
                {softSkills.map((skill, index) => (
                  <SkillTag key={index} whileHover={{ y: -5 }}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>Interests</CategoryTitle>
              <SkillTags>
                {interests.map((interest, index) => (
                  <SkillTag key={index} whileHover={{ y: -5 }}>{interest}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          </GlassCard>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About;

