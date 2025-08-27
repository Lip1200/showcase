"use client";

import React from 'react';

const StrongNoiseBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Primary moving noise layer */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='noise1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise1)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          animation: 'strong-noise-movement 8s linear infinite',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Secondary grain layer */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.0' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          animation: 'strong-grain-drift 6s ease-in-out infinite reverse',
          mixBlendMode: 'soft-light',
        }}
      />
      
      {/* Tertiary wave layer */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='noise3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise3)' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: '250px 250px',
          animation: 'strong-wave-flow 12s linear infinite',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

export default StrongNoiseBackground;
