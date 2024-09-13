import React from 'react';

const imageSrc = 'src/assets/images/organa_landing.png'

const Intro: React.FC = () => {
  return (
    <div className="intro-container">
      <img src={imageSrc} alt={'imageLanding'} style={{ width:'1200px', height:'800px', objectFit:'contain' }} />

    </div>
  );
};

export default Intro;
