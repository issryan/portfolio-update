import React, { useEffect } from 'react';
import './ParticleEffect.scss';

const ParticleEffect = () => {
  useEffect(() => {
    const container = document.querySelector('.container');
    
    // Generate 100 particle circles
    for (let i = 0; i < 75; i++) {
      const circleContainer = document.createElement('div');
      circleContainer.classList.add('circle-container');
      
      const circle = document.createElement('div');
      circle.classList.add('circle');
      
      // Add the circle into the container
      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
    }
  }, []);

  return <div className="container"></div>;
};

export default ParticleEffect;