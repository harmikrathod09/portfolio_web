import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiCode } from 'react-icons/fi';
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

const SectionHeader = styled.div`
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  letter-spacing: -1.5px;
  line-height: 1.1;

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

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.textSecondary};
  margin-top: 0.8rem;
  max-width: 600px;
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: rgba(56, 217, 255, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.08);

    .icon-box {
      background: ${props => props.theme.cyan};
      color: #071116;
      border-color: ${props => props.theme.cyan};
      box-shadow: 0 0 20px rgba(56, 217, 255, 0.4);
      transform: scale(1.05) rotate(5deg);
    }
  }
`;

const CardTopBar = styled.div`
  background: #0B161B;
  padding: 0.6rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: ${props => props.theme.textMuted};

  .file-name {
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
  gap: 1.2rem;
  flex: 1;
`;

const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CertificateIcon = styled.div.attrs({ className: 'icon-box' })`
  width: 52px;
  height: 52px;
  background: rgba(56, 217, 255, 0.08);
  border: 1px solid rgba(56, 217, 255, 0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: ${props => props.theme.cyan};
  transition: all 0.3s ease;
`;

const YearTag = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: rgba(214, 164, 99, 0.1);
  border: 1px solid rgba(214, 164, 99, 0.25);
  border-radius: 100px;
  color: ${props => props.theme.gold};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;
`;

const CertificateTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  color: ${props => props.theme.text};
  font-weight: 700;
  letter-spacing: -0.8px;
  line-height: 1.2;
`;

const CertificateDescription = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const VerifiedBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #00ffaa;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const Certificates = () => {
  return (
    <CertificatesSection id="certificates">
      <Container>
        <SectionHeader>
          <div className="section-label">
            <span className="num">04</span>
            <span className="slash">/</span>
            <span>CERTIFICATES</span>
            <span className="ide-tag">hackathon_badges.json</span>
          </div>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications &amp; <span>Hackathons</span>
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hackathon recognitions, competitive programming badges, and verified technical milestones.
          </SectionSubtitle>
        </SectionHeader>

        <CertificatesGrid>
          {certificatesData.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardTopBar>
                <span className="file-name">
                  <FiCode /> certificate_#{certificate.id}.json
                </span>
                <span>VERIFIED_CREDENTIAL</span>
              </CardTopBar>

              <CardBody>
                <CardTopRow>
                  <CertificateIcon>
                    <FiAward />
                  </CertificateIcon>
                  <YearTag>{certificate.year}</YearTag>
                </CardTopRow>
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateDescription>{certificate.description}</CertificateDescription>

                <VerifiedBadge>
                  <FiCheckCircle /> STATUS: HACKATHON_HONOR_ROLL
                </VerifiedBadge>
              </CardBody>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </Container>
    </CertificatesSection>
  );
};

export default Certificates;
