import React from 'react';
import { useHistory } from 'react-router-dom';
import './Frontend.css';

const Frontend = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/MyWork');
  };

  return (
    <div className="frontend-container">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <div className="content-grid">
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Frontend;