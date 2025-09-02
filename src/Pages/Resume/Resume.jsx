import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Page-Global.css';
import './Resume.css';

import x from '../../assets/x.ico';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'services', instant: true } });
  };

  return (
    <div className="resume-subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="resume-content-grid">

        <h1 className="both-columns">Resume</h1>
        <h2 className="left-column">Download resumes [PDF]:</h2>
        <ul className="right-column">
          <li><a href="/Resume_Java_swedish.pdf" download>Java Resume (Swedish)</a></li>
          <li><a href="/Resume__Java_english.pdf" download>Java Resume (English)</a></li><br />
          <li><a href="/Resume_Cs_swedish.pdf" download>C# Resume (Swedish)</a></li>
        </ul>

        <h2 className="left-column">Download certificate degree [PDF]:</h2>
        <ul className="right-column">
          <li><a href="/Certificate_degree.pdf" download>Certificate Degree</a></li>
        </ul>
            
        <h2 className="left-column">AWS certifications (credly.com):</h2>
        <ul className="right-column">
          <li><a href="https://www.credly.com/badges/a431f886-304c-4c70-bab1-f4f50072af8b/linked_in?t=t1wru1" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner [CLF-C02]</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;