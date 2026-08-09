import { createGlobalStyle, keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(15px, -25px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    background: ${props => props.theme.background};
    color-scheme: dark;
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

  /* Sophisticated Background Layers with IDE Grid Lines */
  .bg-orbs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    background: #071116;
  }

  .bg-radial-glow {
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
    height: 650px;
    background: radial-gradient(ellipse at center, rgba(56, 217, 255, 0.09) 0%, rgba(214, 164, 99, 0.04) 40%, rgba(7, 17, 22, 0) 75%);
    filter: blur(60px);
    pointer-events: none;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
  }

  .orb-cyan {
    top: 15%;
    right: -10%;
    width: 45vw;
    height: 45vw;
    max-width: 500px;
    max-height: 500px;
    background: rgba(56, 217, 255, 0.07);
    animation: ${float} 22s infinite ease-in-out;
  }

  .orb-gold {
    bottom: 10%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    max-width: 450px;
    max-height: 450px;
    background: rgba(214, 164, 99, 0.05);
    animation: ${float} 18s infinite ease-in-out reverse;
  }

  /* IDE Grid Lines & Code Matrix subtle background */
  .bg-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(56, 217, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 217, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
    pointer-events: none;
    opacity: 0.7;
  }

  h1, h2, h3, h4, .font-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: ${props => props.theme.text};
  }

  code, pre, .font-mono {
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 1.05rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.25s ease;
  }

  /* Custom IDE scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #071116;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.cyan};
  }

  section {
    padding: 100px 5%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    scroll-margin-top: 100px;
    
    @media (max-width: 768px) {
      padding: 70px 5%;
      scroll-margin-top: 70px;
    }
  }

  .glass-card {
    background: ${props => props.theme.cardBackground};
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      border-color: rgba(56, 217, 255, 0.35);
      transform: translateY(-4px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 217, 255, 0.08);
    }
  }

  /* IDE Window Controls Utility */
  .ide-window-header {
    background: #0D1B22;
    padding: 0.65rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .ide-dots {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &:nth-child(1) { background: #ff5f56; }
        &:nth-child(2) { background: #ffbd2e; }
        &:nth-child(3) { background: #27c93f; }
      }
    }

    .ide-tab {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: ${props => props.theme.cyan};
      background: rgba(56, 217, 255, 0.08);
      padding: 0.2rem 0.7rem;
      border-radius: 6px;
      border: 1px solid rgba(56, 217, 255, 0.2);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${props => props.theme.cyan};
    margin-bottom: 0.8rem;

    .num {
      color: ${props => props.theme.cyan};
      opacity: 0.9;
    }

    .slash {
      color: ${props => props.theme.textMuted};
      opacity: 0.5;
    }

    .ide-tag {
      font-size: 0.75rem;
      color: ${props => props.theme.gold};
      background: rgba(214, 164, 99, 0.1);
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      border: 1px solid rgba(214, 164, 99, 0.2);
    }
  }
`;

export default GlobalStyles;
