import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const ProjectsSection = styled.section`
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
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div).attrs({ className: 'glass-card' })`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  &:hover {
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, ${props => props.theme.accent}, transparent, ${props => props.theme.accentSecondary});
    }

    h3 {
      color: white;
      transform: translateX(5px);
    }
  }
`;


const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: ${props => props.theme.accent};
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  width: fit-content;
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-weight: 800;
  transition: all 0.3s ease;
  letter-spacing: -1.5px;
  line-height: 1.1;
`;

const ProjectDescription = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 2.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const TechTag = styled.span`
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
  }
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


const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const previewCount = 4;

  const hasMore = projectsData.length > previewCount;
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, previewCount);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Work
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A selection of my recent projects, showcasing my skills in full-stack development and app design.
        </SectionSubtitle>

        <ProjectsGrid>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <CategoryBadge>{project.category}</CategoryBadge>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        {hasMore && (
          <Actions>
            <ViewMoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show less' : 'View all projects'}
            </ViewMoreButton>
          </Actions>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

