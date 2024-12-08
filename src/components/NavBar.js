import React, { useState } from 'react';
import '../styles/navbar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = () => {
    // Replace FILE_ID with the actual ID from your Google Drive link
    window.open('https://drive.google.com/file/d/1BFvMptz_lJlK-DzZg_9jiGf3R-SE2x0h/view?usp=sharing', '_blank');
};


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">Pathum Lakshan</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#blogs" onClick={toggleMenu}>Blogs</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          <li className="mobile-cv-button">
            <button onClick={handleDownloadCV}>Download CV</button>
          </li>
        </ul>

        <button 
          className="cv-button desktop-cv-button" 
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
      </div>
    </nav>
  );
}