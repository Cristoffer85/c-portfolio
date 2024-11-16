import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';
import Logodesign from '../../assets/Logodesign.png';
import Logodesign2 from '../../assets/Logodesign2.png';
import DesignFireEagle from '../../assets/DesignFireEagle.png';
import DesignNavUnderlinePixelCircuitPlay from '../../assets/DesignNavUnderlinePixelCircuitPlay.png';
import DesignSpritesheet from '../../assets/DesignSpritesheet.png';
import DesignArchangelandlion from '../../assets/DesignArchangelandlion.png';



const GraphDesign = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'services', instant: true } });
  };

  return (
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Graphics Design</h1>

        <p>Yes! believe it or not like i said earlier im actually quite creative as well (come from various creative backgrounds) and i have a-not-too shabby sense of creating things both manually and digitally.</p> 
        <p>Since i was a young boy i started with music (Fiddle) which later moved on to guitar and singing but also drawing both manually and in software like Photoshop and GIMP to name a few.</p>
          
        <p>Below you can view some of my various design projects:</p>

        <img src={Logodesign} alt="" title="Designing for logo for this page in GIMP"/>
        <img src={DesignFireEagle} alt="" title="Manual drawing of a fire-eagle"/>
        <img src={DesignNavUnderlinePixelCircuitPlay} alt="" title="Pixel-play desiging an underline in this application"/>
        <img src={DesignSpritesheet} alt="" title="Yes i have pixel by pixel made an entire spritesheet as well."/>
        <img src={DesignArchangelandlion} alt="" title="One of my earlist drawings. As you can see im improving!"/>
        <img src={Logodesign2} alt="" title="Logodesign GIMP. Take two."/>

      </div>
    </div>
  );
};

export default GraphDesign;