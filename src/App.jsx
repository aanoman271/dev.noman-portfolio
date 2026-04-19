import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check if theme was previously saved or default to dark
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    // Update data-theme on html element for tailoring CSS variables
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Cinematic Hero */}
        <Hero />

        {/* Bento About */}
        <About />

        {/* Technical Arsenal Skills */}
        <Skills />

        {/* Evolution Timeline */}
        <Timeline />

        {/* Selected Projects */}
        <Projects />

        {/* Interaction Contact */}
        <Contact />
      </main>

      {/* Elegant Footer */}
      <Footer />
    </div>
  );
}

export default App;
