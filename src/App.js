import React, { useState, useEffect } from 'react';

const SpinningMath = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
      setScale(1 + 0.05 * Math.sin(Date.now() / 1000));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: '200px',
    height: '200px',
    position: 'relative',
    margin: '0 auto'
  };

  const baseSymbolStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: '"Cambria Math", "STIX Two Math", "Latin Modern Math", "Asana Math", serif',
    color: '#1a1a1a'
  };

  const sumStyle = {
    ...baseSymbolStyle,
    fontSize: '48px',
  };

  const integralStyle = {
    ...baseSymbolStyle,
    fontSize: '64px', // Even larger font size for the integral
  };

  return (
    <div style={containerStyle}>
      <div 
        style={{
          ...sumStyle,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`
        }}
      >
        ∑
      </div>
      <div 
        style={{
          ...integralStyle,
          transform: `translate(-50%, -50%) rotate(${-rotation * 2}deg) scale(${1/scale})`
        }}
      >
        ∫
      </div>
    </div>
  );
};

export default SpinningMath;