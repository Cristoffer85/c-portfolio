import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';
import Githubrepomain from '../../assets/Githubrepomain.png';

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'work', instant: true } });
  };

  return (
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Portfolio</h1>

        <img src={Githubrepomain} alt="" />


      </div>
    </div>
  );
};

export default Portfolio;