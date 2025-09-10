import React from 'react';
import './Services.css';
import { Service } from '../../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Electrical Installation",
      description: "Complete electrical installation services for residential, commercial, and industrial projects. From wiring to panel installation, we ensure safe and efficient power distribution.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "System Design",
      description: "Custom electrical system design tailored to your specific needs. Our expert engineers create efficient, scalable, and code-compliant electrical layouts.",
      icon: "📐"
    },
    {
      id: 3,
      title: "Consultancy Services",
      description: "Professional electrical consultancy to optimize your power systems, reduce energy costs, and ensure regulatory compliance for your projects.",
      icon: "💼"
    },
    {
      id: 4,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance programs and emergency repair services to keep your electrical systems running at peak performance 24/7.",
      icon: "🔧"
    },
    {
      id: 5,
      title: "Energy Solutions",
      description: "Sustainable energy solutions including solar installations, energy audits, and efficiency upgrades to reduce your carbon footprint.",
      icon: "🌱"
    },
    {
      id: 6,
      title: "Safety Inspections",
      description: "Thorough electrical safety inspections and testing to ensure compliance with regulations and prevent potential hazards.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive electrical solutions tailored to meet your unique requirements
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Need a Custom Solution?</h3>
          <p>We offer tailored electrical engineering solutions to meet your specific requirements.</p>
          <button className="btn btn-primary" onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;