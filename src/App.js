import React from 'react';

// import animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// import components
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  // aos initialization
  AOS.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
