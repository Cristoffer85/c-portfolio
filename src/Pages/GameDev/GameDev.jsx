import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';
import DesignSpritesheet from '../../assets/DesignSpritesheet.png';
import HoneyCombOdyssey from '../../assets/HoneyCombOdyssey.png';

const GameDev = () => {
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
        <h1>Game Development</h1>

        <p>And the last of my "real" services is then actually also game development. In my sparetime and hobbywise i have completed one full game and another ongoing. </p>
        <p>The first fully completed game is made in Java (Swing) and is an entire 2D RPG game with various interactions and quests and a story to follow. [Quite exhilarating!!] and the Second is an ongoing creation of a game in C++ using SFML library.</p>
        
        <p>Below you can view screenshots of them in action:</p>

        <img src={HoneyCombOdyssey} alt="" title="Java 2D Game"/>
        <img src={DesignSpritesheet} alt="" title="Spritesheet C++ game"/>
      </div>
    </div>
  );
};

export default GameDev;