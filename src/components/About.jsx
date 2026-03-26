import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 5%;
  background: ${props => props.theme.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  margin-bottom: 4rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(214, 164, 99, 0.05);
  border: 1px solid rgba(214, 164, 99, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
`;

const EducationItem = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Institution = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.5rem;
`;

const Details = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.accent};
  font-weight: 600;
`;

const SkillsCard = styled(motion.div)`
  background: rgba(214, 164, 99, 0.05);
  border: 1px solid rgba(214, 164, 99, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryTitle = styled.h4`
  font-size: 1.1rem;
  color: ${props => props.theme.accent};
  margin-bottom: 0.8rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(214, 164, 99, 0.1);
  border: 1px solid rgba(214, 164, 99, 0.3);
  border-radius: 20px;
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(214, 164, 99, 0.2);
    transform: translateY(-2px);
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
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get to know more about my background and skills
        </SectionSubtitle>

        <ContentGrid>
          <EducationCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>Education</CardTitle>
            <EducationItem>
              <Degree>B.Tech Computer Science & Engineering</Degree>
              <Institution>Darshan University - Rajkot</Institution>
              <Details>CGPA: 8.51 | Expected Graduation: 2027</Details>
            </EducationItem>
            <EducationItem>
              <Degree>Diploma in Computer Engineering</Degree>
              <Institution>GMB Polytechnic - Rajula</Institution>
              <Details>CGPA: 9.33 | Graduated: 2024</Details>
            </EducationItem>

            <EducationItem>
              <Degree>Secondary School (10th)</Degree>
              <Institution>Shree Swami Narayan Gurukul - Rajula</Institution>
              <Details>Percentage/CGPA: 70% | Year: 2021</Details>
            </EducationItem>
          </EducationCard>

          <SkillsCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>Skills & Interests</CardTitle>
            <SkillCategory>
              <CategoryTitle>Technical Skills</CategoryTitle>
              <SkillTags>
                {technicalSkills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>Soft Skills</CategoryTitle>
              <SkillTags>
                {softSkills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>Interests</CategoryTitle>
              <SkillTags>
                {interests.map((interest, index) => (
                  <SkillTag key={index}>{interest}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          </SkillsCard>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About;

