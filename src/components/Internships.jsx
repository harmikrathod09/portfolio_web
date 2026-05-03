import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import internshipsData from '../data/internships.json';

const InternshipsSection = styled.section`
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

const InternshipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InternshipCard = styled(motion.div).attrs({ className: 'glass-card' })`
  padding: 2.5rem 3rem;

  &:hover {
    h3 {
      color: white;
      transform: translateX(5px);
    }
  }
`;


const InternshipTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -1px;
`;

const Company = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.accent};
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Year = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.7;
  font-weight: 400;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const ViewMoreButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: black;
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  }
`;


const Internships = () => {
  const [showAll, setShowAll] = useState(false);

  const previewCount = 2;

  const hasMore = internshipsData.length > previewCount;
  const visibleInternships = showAll ? internshipsData : internshipsData.slice(0, previewCount);

  return (
    <InternshipsSection id="internships">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A timeline of my professional growth and technical contributions
        </SectionSubtitle>

        <InternshipsGrid>
          {visibleInternships.map((internship, index) => (
            <InternshipCard
              key={internship.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <InternshipTitle>{internship.title}</InternshipTitle>
              <Company>{internship.company}</Company>
              <Year>{internship.year}</Year>
              <Description>{internship.description}</Description>
            </InternshipCard>
          ))}
        </InternshipsGrid>
        {hasMore && (
          <Actions>
            <ViewMoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show less' : 'View more experience'}
            </ViewMoreButton>
          </Actions>
        )}
      </Container>
    </InternshipsSection>
  );
};

export default Internships;

