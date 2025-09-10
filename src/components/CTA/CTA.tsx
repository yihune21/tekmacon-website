import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Power Your Next Project?</h2>
          <p>Let's discuss how our electrical engineering expertise can bring your vision to life.</p>
          <button className="btn btn-secondary" onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;