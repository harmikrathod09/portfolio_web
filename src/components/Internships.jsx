import styled from 'styled-components';
import { motion } from 'framer-motion';
import internshipsData from '../data/internships.json';

const InternshipsSection = styled.section`
  padding: 8rem 5%;
  background: ${props => props.theme.primary};
  min-height: 100vh;
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

const InternshipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InternshipCard = styled(motion.div)`
  background: rgba(214, 164, 99, 0.05);
  border: 1px solid rgba(214, 164, 99, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.accent};
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.accent};
    box-shadow: 0 15px 35px rgba(214, 164, 99, 0.2);
  }
`;

const InternshipTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.accent};
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Year = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(214, 164, 99, 0.2);
  border: 1px solid rgba(214, 164, 99, 0.4);
  border-radius: 15px;
  color: ${props => props.theme.accent};
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-top: 1rem;
`;

const Internships = () => {
  return (
    <InternshipsSection id="internships">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Internships & Experience
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional experiences that shaped my career
        </SectionSubtitle>

        <InternshipsGrid>
          {internshipsData.map((internship, index) => (
            <InternshipCard
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <InternshipTitle>{internship.title}</InternshipTitle>
              <Company>{internship.company}</Company>
              <Year>{internship.year}</Year>
              <Description>{internship.description}</Description>
            </InternshipCard>
          ))}
        </InternshipsGrid>
      </Container>
    </InternshipsSection>
  );
};

export default Internships;

