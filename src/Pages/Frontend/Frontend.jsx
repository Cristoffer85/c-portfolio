import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';

const Frontend = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'services', instant: true } });
  };

  return (
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Frontend Development</h1>

        <p>Frontend development is the part of webdevelopment (or an application) that is responsible for mostly the user interface and user experience of a website.</p>
        <p>It is the part of a website or application that a user interacts with, and is usually built with combined technologies like HTML, CSS and JavaScript to form the body (HTML = skeleton, Javascript = Brain, CSS = Skin) The frontend is the part that the user interacts with the backend (server).</p>
        <p>Below you can view some of my skills:</p>

        <ul className="dotted-list">
          <li>API-connection (communicating with an endpoint from an Url)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Responsive Design</li>
          <li>(Basic) UX/UI</li>
        </ul>

      </div>
    </div>
  );
};

export default Frontend;