import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Resume/Resume.css';
import '../Global.css';
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
        <h2 className="left-column">Download my resume:</h2>
        <ul className="right-column">
          <li><a href="/Resume_swedish.pdf" download>Resume (Swedish)</a></li>
          <li><a href="/Resume_english.pdf" download>Resume (English)</a></li>
        </ul>
        <h2 className="left-column">Download my certificate degree:</h2>
        <ul className="right-column">
          <li><a href="/Certificate_degree.pdf" download>Certificate Degree</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;