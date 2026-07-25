import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 bg-[#021C2A]"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(176, 237, 249, 0.06) 0%, transparent 60%)'
      }}
    />
  );
};

export default ParticleBackground;