import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Tekmacon PLC</h2>
        <p className="section-subtitle">
          Building a legacy of excellence in electrical engineering since 2014
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              For over a decade, Tekmacon PLC has been at the forefront of electrical engineering excellence. 
              Founded with a vision to deliver innovative electrical solutions, we have grown to become a trusted 
              partner for businesses and organizations across various industries.
            </p>
            <p>
              Our journey began with a simple mission: to provide reliable, efficient, and safe electrical 
              services that exceed client expectations. Today, we stand proud as industry leaders, having 
              successfully completed over 500 projects while maintaining our commitment to quality and innovation.
            </p>
            
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h4>Excellence</h4>
                <p>Delivering superior quality in every project we undertake</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🛡️</div>
                <h4>Safety First</h4>
                <p>Prioritizing safety standards in all our operations</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h4>Innovation</h4>
                <p>Embracing cutting-edge technology and solutions</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Reliability</h4>
                <p>Building lasting relationships through trust and dependability</p>
              </div>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <h4>Our Mission</h4>
              <p>
                To provide exceptional electrical engineering services that power progress, 
                ensure safety, and contribute to sustainable development while exceeding 
                client expectations at every turn.
              </p>
            </div>
            
            <div className="highlight-card">
              <h4>Our Vision</h4>
              <p>
                To be the leading electrical engineering company recognized for innovation, 
                reliability, and excellence in service delivery across all sectors.
              </p>
            </div>
            
            <div className="certifications">
              <h4>Certifications & Memberships</h4>
              <div className="cert-badges">
                <span className="cert-badge">ISO 9001:2015</span>
                <span className="cert-badge">NICEIC Approved</span>
                <span className="cert-badge">ECA Member</span>
                <span className="cert-badge">SafeContractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;