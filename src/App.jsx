import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Internships />
      <Certificates />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
