import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
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
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Resume</h1>
        <h2>Download my resumes:</h2>
        <ul>
          <li><a href="/Resume_swedish.pdf" download>Resume (Swedish)</a></li>
          <li><a href="/Resume_english.pdf" download>Resume (English)</a></li>
        </ul>
        <h2>Download my certificate degree:</h2>
        <ul>
          <li><a href="/Certificate_degree.pdf" download>Certificate Degree</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;