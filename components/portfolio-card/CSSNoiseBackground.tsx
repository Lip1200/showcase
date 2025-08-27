"use client";

import React from 'react';

const CSSNoiseBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1: Static noise base */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          animation: 'noise-drift 20s linear infinite',
        }}
      />
      
      {/* Layer 2: Moving noise waves */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)' opacity='0.4'/%3E%3C/svg%3E")`,
          animation: 'noise-flow 30s linear infinite reverse',
        }}
      />
      
      {/* Layer 3: Fine grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise3)' opacity='0.2'/%3E%3C/svg%3E")`,
          animation: 'noise-subtle 40s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default CSSNoiseBackground;
