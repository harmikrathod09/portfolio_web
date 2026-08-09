import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGitCommit, FiTerminal } from 'react-icons/fi';
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

const TerminalContainer = styled.div`
  background: #0B161B;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(56, 217, 255, 0.06);
`;

const TerminalTopBar = styled.div`
  background: #071116;
  padding: 0.75rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dots {
    display: flex;
    gap: 0.45rem;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      &:nth-child(1) { background: #ff5f56; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #27c93f; }
    }
  }

  .title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: ${props => props.theme.textMuted};
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const TerminalContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CommandPromptLine = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88rem;
  color: ${props => props.theme.cyan};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .user { color: ${props => props.theme.gold}; }
  .path { color: ${props => props.theme.textMuted}; }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background: linear-gradient(180deg, ${props => props.theme.cyan} 0%, rgba(56, 217, 255, 0.2) 100%);
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: -2rem;
  top: 1.2rem;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.isGold ? props.theme.gold : props.theme.cyan};
  border: 3px solid #0B161B;
  box-shadow: 0 0 12px ${props => props.isGold ? 'rgba(214, 164, 99, 0.6)' : 'rgba(56, 217, 255, 0.6)'};
  z-index: 2;
`;

const InternshipCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.8rem 2.2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(56, 217, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.08);
  }

  @media (max-width: 768px) {
    padding: 1.4rem;
  }
`;

const CardTopMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CommitHash = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: ${props => props.theme.cyan};
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(56, 217, 255, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(56, 217, 255, 0.2);
`;

const YearBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.8rem;
  background: ${props => props.isCurrent ? 'rgba(0, 255, 170, 0.1)' : 'rgba(214, 164, 99, 0.1)'};
  border: 1px solid ${props => props.isCurrent ? 'rgba(0, 255, 170, 0.3)' : 'rgba(214, 164, 99, 0.25)'};
  border-radius: 100px;
  color: ${props => props.isCurrent ? '#00ffaa' : props.theme.gold};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 600;
`;

const InternshipTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 0.3rem;
`;

const Company = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  color: ${props => props.theme.cyan};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.65;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ViewMoreButton = styled(motion.button)`
  padding: 0.85rem 2.2rem;
  border-radius: 100px;
  border: 1px solid rgba(56, 217, 255, 0.3);
  background: rgba(16, 36, 45, 0.8);
  color: ${props => props.theme.text};
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.cyan};
    color: #071116;
    border-color: ${props => props.theme.cyan};
    box-shadow: 0 0 25px rgba(56, 217, 255, 0.3);
    transform: translateY(-2px);
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
        <SectionHeader>
          <div className="section-label">
            <span className="num">03</span>
            <span className="slash">/</span>
            <span>EXPERIENCE</span>
            <span className="ide-tag">career_log.sys</span>
          </div>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work &amp; <span>Leadership Experience</span>
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A terminal commit timeline documenting my engineering roles, teaching assistantships, and technical club contributions.
          </SectionSubtitle>
        </SectionHeader>

        <TerminalContainer>
          <TerminalTopBar>
            <div className="dots">
              <div />
              <div />
              <div />
            </div>
            <div className="title">
              <FiTerminal /> bash — git log --career
            </div>
          </TerminalTopBar>

          <TerminalContent>
            <CommandPromptLine>
              <span className="user">harmik@dev-station</span>:<span className="path">~/experience</span>$ cat career_timeline.log
            </CommandPromptLine>

            <TimelineContainer>
              {visibleInternships.map((internship, index) => {
                const isCurrent = internship.year.includes('Present');

                return (
                  <TimelineItem
                    key={internship.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TimelineNode isGold={isCurrent} />
                    <InternshipCard>
                      <CardTopMeta>
                        <CommitHash>
                          <FiGitCommit /> commit #{internship.id}a9f0
                        </CommitHash>
                        <YearBadge isCurrent={isCurrent}>{internship.year}</YearBadge>
                      </CardTopMeta>

                      <InternshipTitle>{internship.title}</InternshipTitle>
                      <Company>@ {internship.company}</Company>
                      <Description>{internship.description}</Description>
                    </InternshipCard>
                  </TimelineItem>
                );
              })}
            </TimelineContainer>

            {hasMore && (
              <Actions>
                <ViewMoreButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'Show less' : 'View more experience'}
                </ViewMoreButton>
              </Actions>
            )}
          </TerminalContent>
        </TerminalContainer>
      </Container>
    </InternshipsSection>
  );
};

export default Internships;
