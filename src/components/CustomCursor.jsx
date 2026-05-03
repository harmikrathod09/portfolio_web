import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  box-shadow: 0 0 10px rgba(0, 210, 255, 0.8), 0 0 20px rgba(0, 210, 255, 0.4);
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(0, 210, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
  }
`;

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 400 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 400 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
      return mobile;
    };

    const isMobileDevice = checkMobile();
    if (isMobileDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.glass-card') ||
        target.closest('[role="button"]');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <CursorDot
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
        }}
      />
      <CursorRing
        animate={{
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          borderColor: isHovering ? 'rgba(0, 210, 255, 0.6)' : 'rgba(0, 210, 255, 0.3)',
          backgroundColor: isHovering ? 'rgba(0, 210, 255, 0.05)' : 'rgba(0, 210, 255, 0)',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;

