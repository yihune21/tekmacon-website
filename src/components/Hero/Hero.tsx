import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-pattern"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Powering Your Future with
            <span className="highlight"> Expert Electrical Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Professional electrical installation, innovative design, and trusted consultancy services. 
            With over 10 years of excellence, we bring power, safety, and efficiency to your projects.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get in Touch
            </button>
            <button className="btn btn-secondary" onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
            }}>
              Our Services
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#E5E7EB"/>
              <path d="M200 100L250 150L200 200L150 150L200 100Z" fill="#9CA3AF"/>
              <circle cx="200" cy="150" r="30" fill="#6B7280"/>
              <text x="200" y="250" textAnchor="middle" fill="#4B5563" fontSize="14">Electrical Engineering</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;