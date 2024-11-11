import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';
import profile_img from '../../assets/profile_img.png';

const Friend = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'services', instant: true } });
  };

  return (
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Friend</h1>

        <p>And like i also said earlier if you dont want or need anything of the above at all right now i can also be a real good friend!</p> 
        <p>Feel utterly free to connect with me or hit me up on upcoming ByteBook! I will announce more in detail and update this portfolio when its up.</p>

        <img src={profile_img}alt="Me myself and I" title="Yes, thats actually me!"/>

      </div>
    </div>
  );
};

export default Friend;