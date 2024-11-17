import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';

const Fullstack = () => {
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
        <h1>Fullstack Development</h1>

        <p>Fullstack development is basically a combination of both frontend and backend development. Combine these two together and you have a fully functional application.</p>
        <p>This in total means = Safe-storage for your information hidden in the background, while you have a nice and easy-to-use interface for you as a human (except if youre maybe a robot..? *suspicious eyes*) to interact with.</p>
        <p>Kindly view both Backend development and Frontend development pages in the Services section for more detailed info about this.</p>

      </div>
    </div>
  );
};

export default Fullstack;