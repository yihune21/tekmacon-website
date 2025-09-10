import React, { useState } from 'react';
import './Projects.css';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Corporate Office Complex",
      description: "Complete electrical installation and automation for a 20-story corporate building.",
      image: "project1",
      category: "commercial"
    },
    {
      id: 2,
      title: "Manufacturing Plant Upgrade",
      description: "Industrial electrical system modernization with energy-efficient solutions.",
      image: "project2",
      category: "industrial"
    },
    {
      id: 3,
      title: "Luxury Residential Estate",
      description: "Smart home electrical systems for a 50-unit residential complex.",
      image: "project3",
      category: "residential"
    },
    {
      id: 4,
      title: "Hospital Power Infrastructure",
      description: "Critical power systems and backup solutions for healthcare facility.",
      image: "project4",
      category: "commercial"
    },
    {
      id: 5,
      title: "Solar Farm Installation",
      description: "50MW solar power generation facility with grid integration.",
      image: "project5",
      category: "industrial"
    },
    {
      id: 6,
      title: "Shopping Mall Lighting",
      description: "Energy-efficient LED lighting system for retail complex.",
      image: "project6",
      category: "commercial"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Showcasing our expertise through successful project deliveries
        </p>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('commercial')}
          >
            Commercial
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'industrial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('industrial')}
          >
            Industrial
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveFilter('residential')}
          >
            Residential
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="#E5E7EB"/>
                    <rect x="50" y="180" width="100" height="100" fill="#9CA3AF"/>
                    <rect x="170" y="150" width="80" height="130" fill="#9CA3AF"/>
                    <rect x="270" y="120" width="80" height="160" fill="#9CA3AF"/>
                    <text x="200" y="150" textAnchor="middle" fill="#6B7280" fontSize="14">{project.title}</text>
                  </svg>
                </div>
                <div className="project-overlay">
                  <button className="project-view-btn">View Details</button>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;