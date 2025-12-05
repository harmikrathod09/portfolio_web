import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    overflow-x: hidden;
    cursor: none;
  }

  code {
    font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Hide default cursor on desktop */
  @media (min-width: 769px) {
    * {
      cursor: none !important;
    }
  }

  /* Show default cursor on mobile */
  @media (max-width: 768px) {
    body {
      cursor: auto;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.accent};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(214, 164, 99, 0.8);
  }
`;

export default GlobalStyles;

