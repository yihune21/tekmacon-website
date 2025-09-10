import React from 'react';
import './Testimonials.css';
import { Testimonial } from '../../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Johnson",
      company: "TechCorp Industries",
      quote: "Tekmacon PLC transformed our entire electrical infrastructure. Their expertise and professionalism exceeded our expectations. The project was completed on time and within budget.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "Green Energy Solutions",
      quote: "Outstanding service from start to finish. The team's knowledge of sustainable energy solutions helped us reduce our energy costs by 40%. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      company: "Metropolitan Hospital",
      quote: "When it comes to critical power systems, we trust no one but Tekmacon. Their 24/7 support and maintenance have been invaluable to our operations.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title">Happy Clients</h2>
        <p className="section-subtitle">
          What our clients say about our services and expertise
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;