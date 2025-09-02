import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Page-Global.css';

import x from '../../assets/x.ico';
import profile_img from '../../assets/profile_img.png';

const Cloud = () => {
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
        <h1>Cloud</h1>

        <p>Certified Cloud Practitioner at AWS [CLF-C02] from 1/9 2025 with validity up to 3 years.</p> 
        <p>This is the first certification i took at AWS and plans are ahead to take atleast 2 more within this year. </p>
        <p>AWS is a real comfortable cloud provider with lots of services and tweaks to help having your application global, available and cost-optimized practically with any device you wish, and it also isnt that hard to understand once you figure out the base-concepts and UI, which is why i like it. This compared to both Azure and GCP have alot of similarities but different names of services etc hence why i think understanding one you can easier understand another. However i also like cloud technology.</p>

      </div>
    </div>
  );
};

export default Cloud;