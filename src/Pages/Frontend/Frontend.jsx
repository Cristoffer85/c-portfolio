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

  
        <p>Add content</p>


      </div>
    </div>
  );
};

export default Frontend;