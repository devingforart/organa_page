import React from 'react';
import './ImageLanding.css';

const imageSrc = 'src/assets/images/organa_landing.png';

const Intro: React.FC = () => {
  return (
    <div className="intro-container">
      <img className="landing-image" src={imageSrc} alt="Organa Landing" />
    </div>
  );
};

export default Intro;
