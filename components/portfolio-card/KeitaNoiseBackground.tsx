"use client";

import React from 'react';

const KeitaNoiseBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Fine film grain texture like Keita Yamada */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='finegrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23finegrain)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
          animation: 'keita-grain-flicker 0.1s linear infinite',
        }}
      />
      
      {/* Secondary very fine noise */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Cfilter id='ultrafine'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.0' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ultrafine)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '25px 25px',
          animation: 'keita-grain-shimmer 0.15s ease-in-out infinite alternate',
        }}
      />
    </div>
  );
};

export default KeitaNoiseBackground;
