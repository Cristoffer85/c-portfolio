import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import arrowIcon from '../../assets/arrow_icon.svg';

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'work', instant: true } });
  };

  return (
    <div className="subpage-container">
      <img src={arrowIcon} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Portfolio</h1>

  
        <p>Add content</p>


      </div>
    </div>
  );
};

export default Portfolio;