import styled from 'styled-components';
import { motion } from 'framer-motion';
import certificatesData from '../data/certificates.json';

const CertificatesSection = styled.section`
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

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled(motion.div).attrs({ className: 'glass-card' })`
  padding: 2.5rem 3rem;
  text-align: center;

  &:hover {
    .icon-wrapper {
      transform: scale(1.1) rotate(5deg);
      background: white;
      color: black;
      border-color: white;
    }
  }
`;


const CertificateIcon = styled.div.attrs({ className: 'icon-wrapper' })`
  width: 60px;
  height: 60px;
  margin: 0 auto 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const CertificateTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.2;
`;

const CertificateDescription = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

const Year = styled.span`
  display: inline-block;
  padding: 0.6rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: ${props => props.theme.accent};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;


const Certificates = () => {
  return (
    <CertificatesSection id="certificates">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional certifications and technical milestones
        </SectionSubtitle>

        <CertificatesGrid>
          {certificatesData.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <CertificateIcon>🏆</CertificateIcon>
              <CertificateTitle>{certificate.title}</CertificateTitle>
              <CertificateDescription>{certificate.description}</CertificateDescription>
              <Year>{certificate.year}</Year>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </Container>
    </CertificatesSection>
  );
};

export default Certificates;

