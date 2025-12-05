import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.accent};
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  box-shadow: 0 0 20px ${props => props.theme.accent},
              0 0 40px ${props => props.theme.accent},
              0 0 60px ${props => props.theme.accent};
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.theme.accent};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.opacity};
  box-shadow: 0 0 10px ${props => props.theme.accent};
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
      return mobile;
    };
    
    const isMobileDevice = checkMobile();
    
    if (isMobileDevice) return;
    
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create particles
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          opacity: 1
        };
        setParticles(prev => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 500);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    window.addEventListener('resize', checkMobile);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <CursorContainer>
      <CursorDot
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {particles.map(particle => (
        <Particle
          key={particle.id}
          opacity={particle.opacity}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        />
      ))}
    </CursorContainer>
  );
};

export default CustomCursor;

