import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="bg-orbs">
        <div className="bg-radial-glow"></div>
        <div className="bg-grid"></div>
        <div className="orb orb-cyan"></div>
        <div className="orb orb-gold"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Internships />
      <Certificates />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
