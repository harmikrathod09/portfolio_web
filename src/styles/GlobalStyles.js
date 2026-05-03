import { createGlobalStyle, keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Outfit', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    background: ${props => props.theme.background};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    overflow-x: hidden;
    line-height: 1.6;
    min-height: 100vh;
  }

  /* Animated Background Orbs */
  .bg-orbs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    background: radial-gradient(circle at 50% 50%, #030014 0%, #000000 100%);
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: ${float} 20s infinite ease-in-out;
  }

  .orb-1 {
    top: -10%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    background: ${props => props.theme.accent};
    animation-delay: 0s;
  }

  .orb-2 {
    bottom: -10%;
    right: -10%;
    width: 35vw;
    height: 35vw;
    background: ${props => props.theme.accentSecondary};
    animation-delay: -5s;
  }

  .orb-3 {
    top: 40%;
    left: 40%;
    width: 30vw;
    height: 30vw;
    background: ${props => props.theme.accentTertiary};
    animation-delay: -10s;
  }

  code {
    font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.accent};
    background-clip: content-box;
  }

  section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    scroll-margin-top: 80px;
    
    @media (max-width: 768px) {
      padding: 60px 20px;
      scroll-margin-top: 60px;
    }
  }



  h1, h2, h3, h4 {
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.1;
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 1.1rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 32px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 32px;
      padding: 1px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent, rgba(255, 255, 255, 0.05));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
      transform: translateY(-8px);
    }
  }

  .text-gradient {
    background: ${props => props.theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;


export default GlobalStyles;
