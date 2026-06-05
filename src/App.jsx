import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Academic from './components/Academic';
import CoverLetterModal from './components/CoverLetterModal';
import Footer from './components/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'academic', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <ThreeBackground isDark={isDark} />
      
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <Hero 
        isDark={isDark} 
        scrollToSection={scrollToSection}
        onDownloadCV={() => setShowCoverLetter(true)}
      />
      
      <Projects isDark={isDark} />
      
      <Skills isDark={isDark} />

      <Academic isDark={isDark} />

      <Contact isDark={isDark} />
      
      <Footer isDark={isDark} />
      
      {showCoverLetter && (
        <CoverLetterModal 
          isDark={isDark} 
          onClose={() => setShowCoverLetter(false)} 
        />
      )}
    </div>
  );
};

export default App;