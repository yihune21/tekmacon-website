import React from 'react';
import './Clients.css';
import { Client } from '../../types';

const Clients: React.FC = () => {
  const clients: Client[] = [
    { id: 1, name: "TechCorp", logo: "TC" },
    { id: 2, name: "BuildMax", logo: "BM" },
    { id: 3, name: "EnergyPro", logo: "EP" },
    { id: 4, name: "SafeNet", logo: "SN" },
    { id: 5, name: "GlobalTech", logo: "GT" },
    { id: 6, name: "PowerGrid", logo: "PG" },
    { id: 7, name: "InnovateLabs", logo: "IL" },
    { id: 8, name: "SecureBuilt", logo: "SB" }
  ];

  return (
    <section id="clients" className="section clients">
      <div className="container">
        <h2 className="section-title">Our Trusted Clients</h2>
        <p className="section-subtitle">
          Proud to work with industry leaders across various sectors
        </p>
        
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-logo">
                <span>{client.logo}</span>
              </div>
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;