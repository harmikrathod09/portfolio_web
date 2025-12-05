import styled from 'styled-components';
import { motion } from 'framer-motion';
import certificatesData from '../data/certificates.json';

const CertificatesSection = styled.section`
  padding: 8rem 5%;
  background: linear-gradient(135deg, #0f1419 0%, #1a472a 100%);
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

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled(motion.div)`
  background: rgba(15, 20, 25, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(214, 164, 99, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(214, 164, 99, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.accent};
    box-shadow: 0 20px 40px rgba(214, 164, 99, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const CertificateIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, ${props => props.theme.accent} 0%, ${props => props.theme.primary} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  box-shadow: 0 10px 30px rgba(214, 164, 99, 0.3);
`;

const CertificateTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
  font-weight: 700;
`;

const CertificateDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Year = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(214, 164, 99, 0.2);
  border: 1px solid rgba(214, 164, 99, 0.4);
  border-radius: 20px;
  color: ${props => props.theme.accent};
  font-size: 0.9rem;
  font-weight: 600;
`;

const Certificates = () => {
  return (
    <CertificatesSection id="certificates">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates & Achievements
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Recognition for my work and achievements
        </SectionSubtitle>

        <CertificatesGrid>
          {certificatesData.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
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

