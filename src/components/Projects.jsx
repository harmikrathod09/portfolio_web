import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowUpRight, FiHeart, FiSearch, FiFolder, FiFileText, FiPlay, FiChevronDown, FiCode } from 'react-icons/fi';
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

const SectionHeader = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  letter-spacing: -1.5px;
  line-height: 1.15;

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
  max-width: 650px;
  line-height: 1.6;
`;

/* Android Studio IDE Window Wrapper */
const IDEWindow = styled.div`
  background: #0B161B;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(56, 217, 255, 0.06);
  display: flex;
  flex-direction: column;
`;

const IDETopBar = styled.div`
  background: #071116;
  padding: 0.75rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const WindowControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    
    &:nth-child(1) { background: #ff5f56; }
    &:nth-child(2) { background: #ffbd2e; }
    &:nth-child(3) { background: #27c93f; }
  }

  .title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: ${props => props.theme.textMuted};
    margin-left: 0.5rem;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  max-width: 320px;
  width: 100%;

  .search-icon {
    position: absolute;
    left: 0.9rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.textMuted};
    font-size: 0.9rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.45rem 1rem 0.45rem 2.4rem;
  background: rgba(16, 36, 45, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  color: ${props => props.theme.text};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.25s ease;

  &::placeholder {
    color: ${props => props.theme.textMuted};
  }

  &:focus {
    border-color: ${props => props.theme.cyan};
  }
`;

/* IDE Main Workspace Grid (Left Explorer Pane + Right Editor Pane) */
const IDEWorkspace = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  min-height: 550px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

/* Left File Explorer Pane */
const ExplorerPane = styled.div`
  background: #0D1B22;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 968px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const ExplorerHeader = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${props => props.theme.gold};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`;

const FilterChip = styled.button`
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${props => props.active ? props.theme.cyan : 'rgba(255, 255, 255, 0.08)'};
  background: ${props => props.active ? 'rgba(56, 217, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => props.active ? props.theme.cyan : props.theme.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.cyan};
    color: ${props => props.theme.cyan};
  }
`;

const TreeFolder = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: ${props => props.theme.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0;
  font-weight: 600;
`;

const ProjectTreeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 0.3rem;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

const ProjectTreeItem = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  padding: 0.55rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid ${props => props.active ? (props.isBloodify ? 'rgba(255, 80, 80, 0.4)' : 'rgba(56, 217, 255, 0.3)') : 'transparent'};
  background: ${props => props.active
    ? (props.isBloodify ? 'rgba(255, 60, 60, 0.15)' : 'rgba(56, 217, 255, 0.1)')
    : 'transparent'};
  color: ${props => props.active ? props.theme.text : props.theme.textSecondary};

  .item-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .file-icon {
    color: ${props => props.isBloodify ? '#ff6b6b' : props.theme.cyan};
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .ext-tag {
    font-size: 0.68rem;
    color: ${props => props.theme.textMuted};
    background: rgba(255, 255, 255, 0.04);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
  }

  &:hover {
    background: ${props => props.active
      ? (props.isBloodify ? 'rgba(255, 60, 60, 0.2)' : 'rgba(56, 217, 255, 0.15)')
      : 'rgba(255, 255, 255, 0.04)'};
    color: ${props => props.theme.text};
  }
`;

/* Right Code Editor Pane */
const EditorPane = styled.div`
  background: #10242D;
  display: flex;
  flex-direction: column;
`;

const EditorTabHeader = styled.div`
  background: #0B161B;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  overflow-x: auto;
`;

const EditorTab = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  padding: 0.6rem 1.2rem;
  background: #10242D;
  color: ${props => props.isBloodify ? '#ff8080' : props.theme.cyan};
  border-top: 2px solid ${props => props.isBloodify ? '#ff5252' : props.theme.cyan};
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;

  .close-icon {
    font-size: 0.75rem;
    color: ${props => props.theme.textMuted};
  }
`;

const EditorBody = styled.div`
  padding: 2.2rem;
  display: flex;
  gap: 1.5rem;
  flex: 1;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 0.8rem;
  }
`;

const LineNumbers = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: ${props => props.theme.textMuted};
  opacity: 0.35;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
  padding-right: 0.8rem;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
`;

const ProjectDetailsContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const DetailsHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.85rem;
  background: ${props => props.isBloodify ? 'rgba(255, 75, 75, 0.12)' : 'rgba(56, 217, 255, 0.08)'};
  border: 1px solid ${props => props.isBloodify ? 'rgba(255, 75, 75, 0.3)' : 'rgba(56, 217, 255, 0.2)'};
  border-radius: 100px;
  color: ${props => props.isBloodify ? '#ff6b6b' : props.theme.cyan};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.2rem;
  color: ${props => props.theme.text};
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const DocstringBlock = styled.div`
  background: rgba(7, 17, 22, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${props => props.isBloodify ? '#ff5252' : props.theme.cyan};
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88rem;
  line-height: 1.65;
  color: ${props => props.theme.textSecondary};

  .comment-header {
    color: ${props => props.theme.gold};
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;

const CodeSnippetBlock = styled.div`
  background: rgba(7, 17, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${props => props.theme.textSecondary};

  .block-label {
    font-size: 0.72rem;
    color: ${props => props.theme.textMuted};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.6rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const TechTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  padding: 0.35rem 0.85rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  color: ${props => props.theme.cyan};
  font-size: 0.8rem;
  font-weight: 500;
`;

const RunBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const RunButton = styled(motion.a)`
  padding: 0.75rem 1.8rem;
  background: ${props => props.isBloodify ? '#ff5252' : '#38D9FF'};
  color: #071116;
  border-radius: 100px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.25s ease;
  box-shadow: ${props => props.isBloodify ? '0 4px 15px rgba(255, 80, 80, 0.3)' : '0 4px 15px rgba(56, 217, 255, 0.3)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.isBloodify ? '0 8px 25px rgba(255, 80, 80, 0.5)' : '0 8px 25px rgba(56, 217, 255, 0.5)'};
  }
`;

const GitHubIconLink = styled.a`
  color: ${props => props.theme.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.cyan};
  }
`;

const EmptyState = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  color: ${props => props.theme.textSecondary};
  font-family: 'JetBrains Mono', monospace;
  flex: 1;
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[1] || projectsData[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Mobile App', 'Full Stack', 'AI Project', 'MERN Stack', 'Hackathon', 'ML Project', 'Web App'];

  const getFileExtension = (project) => {
    if (!project) return '.js';
    if (project.tech.includes('Flutter')) return '.dart';
    if (project.tech.includes('Python')) return '.py';
    if (project.tech.includes('React') || project.tech.includes('Next.js')) return '.tsx';
    if (project.tech.includes('Java')) return '.java';
    if (project.tech.includes('C++')) return '.cpp';
    return '.js';
  };

  const getFileIcon = (project) => {
    if (!project) return <FiFileText />;
    if (project.id === 2 || project.title.toLowerCase().includes('bloodify')) return <FiHeart />;
    if (project.tech.includes('Flutter')) return <FiFileText />;
    if (project.category.includes('AI') || project.category.includes('ML')) return <FiCode />;
    return <FiFileText />;
  };

  // Filter projects by category and search query
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  // Keep selectedProject in sync when filters change
  useEffect(() => {
    if (filteredProjects.length > 0) {
      const exists = filteredProjects.some(p => p.id === selectedProject?.id);
      if (!exists) {
        setSelectedProject(filteredProjects[0]);
      }
    }
  }, [selectedCategory, searchQuery, filteredProjects, selectedProject]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    if (window.innerWidth <= 968) {
      const editor = document.getElementById('project-editor-pane');
      if (editor) {
        editor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const isSelectedBloodify = selectedProject?.id === 2 || selectedProject?.title?.toLowerCase().includes('bloodify');

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <div className="section-label">
            <span className="num">02</span>
            <span className="slash">/</span>
            <span>PROJECTS</span>
            <span className="ide-tag">Android Studio Workspace</span>
          </div>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Project Explorer &amp; <span>Case Studies</span>
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select any project from the Android Studio workspace tree on the left to inspect detailed architecture, dependencies, and source links.
          </SectionSubtitle>
        </SectionHeader>

        <IDEWindow>
          <IDETopBar>
            <WindowControls>
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <span className="title">Android Studio 2026 — harmik_projects/src</span>
            </WindowControls>

            <SearchWrapper>
              <FiSearch className="search-icon" />
              <SearchInput
                type="text"
                placeholder="Filter files by name, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchWrapper>
          </IDETopBar>

          <IDEWorkspace>
            {/* Left File Explorer Window */}
            <ExplorerPane>
              <ExplorerHeader>
                <FiFolder /> PROJECT EXPLORER ({filteredProjects.length})
              </ExplorerHeader>

              <FilterBar>
                {categories.map((cat, index) => (
                  <FilterChip
                    key={index}
                    active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </FilterChip>
                ))}
              </FilterBar>

              <TreeFolder>
                <FiChevronDown /> src/main/projects/
              </TreeFolder>

              <ProjectTreeList>
                {filteredProjects.map((project) => {
                  const isBloodify = project.id === 2 || project.title.toLowerCase().includes('bloodify');
                  const ext = getFileExtension(project);
                  const isSelected = selectedProject?.id === project.id;

                  return (
                    <ProjectTreeItem
                      key={project.id}
                      active={isSelected}
                      isBloodify={isBloodify}
                      onClick={() => handleSelectProject(project)}
                    >
                      <div className="item-title">
                        <span className="file-icon">{getFileIcon(project)}</span>
                        <span>{project.title}</span>
                      </div>
                      <span className="ext-tag">{ext}</span>
                    </ProjectTreeItem>
                  );
                })}
              </ProjectTreeList>
            </ExplorerPane>

            {/* Right Code Editor & Inspector View */}
            <EditorPane id="project-editor-pane">
              {selectedProject && filteredProjects.length > 0 ? (
                <>
                  <EditorTabHeader>
                    <EditorTab isBloodify={isSelectedBloodify}>
                      {isSelectedBloodify ? <FiHeart style={{ color: '#ff6b6b' }} /> : <FiFileText />}
                      <span>{selectedProject.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}{getFileExtension(selectedProject)}</span>
                      <span className="close-icon">✕</span>
                    </EditorTab>
                  </EditorTabHeader>

                  <EditorBody>
                    <LineNumbers>
                      <div>01</div>
                      <div>02</div>
                      <div>03</div>
                      <div>04</div>
                      <div>05</div>
                      <div>06</div>
                      <div>07</div>
                      <div>08</div>
                      <div>09</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                    </LineNumbers>

                    <AnimatePresence mode="wait">
                      <ProjectDetailsContent
                        key={selectedProject.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DetailsHeaderRow>
                          <CategoryBadge isBloodify={isSelectedBloodify}>
                            {isSelectedBloodify ? <FiHeart style={{ color: '#ff6b6b' }} /> : <FiCode />}
                            {isSelectedBloodify ? 'BLOOD DONOR APPLICATION' : selectedProject.category}
                          </CategoryBadge>

                          <GitHubIconLink href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                            <FiGithub /> github.com/harmikrathod09
                          </GitHubIconLink>
                        </DetailsHeaderRow>

                        <ProjectTitle>{selectedProject.title}</ProjectTitle>

                        <DocstringBlock isBloodify={isSelectedBloodify}>
                          <div className="comment-header">/** Project Specification &amp; Architecture */</div>
                          <div>{selectedProject.description}</div>
                        </DocstringBlock>

                        <CodeSnippetBlock>
                          <div className="block-label">dependencies &amp; tech stack</div>
                          <TechStack>
                            {selectedProject.tech.map((tech, techIndex) => (
                              <TechTag key={techIndex}>{tech}</TechTag>
                            ))}
                          </TechStack>
                        </CodeSnippetBlock>

                        <RunBar>
                          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#71818A' }}>
                            ID: #{selectedProject.id} | BUILD: SUCCESS
                          </span>
                        </RunBar>
                      </ProjectDetailsContent>
                    </AnimatePresence>
                  </EditorBody>
                </>
              ) : (
                <EmptyState>
                  <p style={{ fontSize: '1.05rem', fontWeight: 600 }}>No project matches your search.</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Clear the search query or pick another category.</p>
                </EmptyState>
              )}
            </EditorPane>
          </IDEWorkspace>
        </IDEWindow>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
