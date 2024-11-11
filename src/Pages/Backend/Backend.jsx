import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';

const Backend = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'services', instant: true } });
  };

  return (
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Backend Development</h1>

        <p>Backend development is the programming that powers a website (Or other applications, also called server) </p>
        <p>It focuses on logic, general architecture and storing and fetching from databases. To shorten it <span>TONS</span> of CRUD (Create-Read-Update-Delete) is used, and also alot of endpoint logic combined with its MVC logic with Services-Repositories-Model classes among others and remembering what this specific database needed for its connection.</p> 
        <p>Below you can view some of my accomplished and mastered (well, atleast some) skills:</p>
        
        <ul className="dotted-list">
          <li>API (Restful)</li>
          <li>Databases - Relational and Documental</li>
          <li>Basic Architecture - UML and Scalability, SOLID Design principles</li>
          <li>Quality - Unittesting with JUnit among others</li>
          <li>Security/IAM - JWT, OAuth</li>
          <li>Cloud - Deploying to both Azure, AWS and Netlify</li>
          <li>CI/CD - Jenkins, Github Actions</li>
          <li>Containerization - Docker</li>
          <li>Microservices - Apache Kafka</li>
        </ul>

      </div>
    </div>
  );
};

export default Backend;