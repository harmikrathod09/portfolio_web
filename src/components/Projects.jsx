import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(15, 20, 25, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(214, 164, 99, 0.2);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(214, 164, 99, 0.1) 0%, transparent 100%);
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

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(214, 164, 99, 0.2);
  border: 1px solid rgba(214, 164, 99, 0.4);
  border-radius: 20px;
  color: ${props => props.theme.accent};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.4rem 0.8rem;
  background: rgba(214, 164, 99, 0.1);
  border: 1px solid rgba(214, 164, 99, 0.3);
  border-radius: 15px;
  color: ${props => props.theme.text};
  font-size: 0.85rem;
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.accent};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    gap: 1rem;
  }
`;

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of projects I've built with passion and dedication
        </SectionSubtitle>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryBadge>{project.category}</CategoryBadge>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              {/* <ProjectLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
              >
                View on GitHub →
              </ProjectLink> */}
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

