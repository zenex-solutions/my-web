import React, { useState } from 'react';
import '../styles/projects.css'; // Importing CSS

const projectsData = [
  { id: 1, title: 'AirCalling Landing Page Design', category: 'Web Design', image: 'aircalling.png' },
  { id: 2, title: 'Business Landing Page Design', category: 'Web Design', image: 'business.png' },
  { id: 3, title: 'Ecom Web Page Design', category: 'Web Design', image: 'ecom.png' },
  { id: 4, title: 'Mobile App Design', category: 'App Design', image: 'app.png' },
  { id: 5, title: 'UI/UX Dashboard Design', category: 'UI/UX', image: 'uiux.png' },
  { id: 6, title: 'Graphic Design Portfolio', category: 'Graphic Design', image: 'graphic.png' },
];

const categories = ['All', 'Web Design', 'App Design', 'UI/UX', 'Graphic Design'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      <div className="tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
