"use client";

import React from 'react';

const SimpleNoiseBackground: React.FC = () => {
  return (
    <>
      {/* Static noise texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'noise-movement 15s linear infinite',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Animated grain overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'grain-drift 12s ease-in-out infinite reverse',
          mixBlendMode: 'soft-light',
        }}
      />
      
      {/* Moving noise waves */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cfilter id='waves'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23waves)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
          animation: 'wave-flow 25s linear infinite',
          mixBlendMode: 'multiply',
        }}
      />
    </>
  );
};

export default SimpleNoiseBackground;
