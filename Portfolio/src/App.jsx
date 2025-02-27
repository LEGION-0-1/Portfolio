import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './HomePage/Homepage.jsx';
import AboutMe from './AboutMe/aboutMe.jsx';
import Projects from './Projects/Projects.jsx';
import Skills  from './Skills/Skills.jsx';
import Contact from './Contact/Contact.jsx'
import DarkIcon from './assets/circle-half-stroke-solid.svg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      {loading && <div className="loading-screen">Loading...</div>}

      <header className="navbar">
        <nav>
          <h1>Dilpreet Singh</h1>
          <button onClick={() => scrollToSection("about")}>About Me</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="dark-mode-btn"
          >
            <img src={DarkIcon} alt="Toggle Dark Mode" />
          </button>
        </nav>
      </header>

      <main>
        <Homepage />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2025 Dilpreet Singh | <a href="https://github.com/yourprofile">GitHub</a></p>
      </footer>

      {showScroll && (
        <button 
          className="scroll-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;