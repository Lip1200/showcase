"use client";

import React, { useEffect, useRef } from 'react';

const FilmGrainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame = 0;

    // Film grain effect - very subtle like Keita Yamada
    const drawFilmGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Generate very fine random noise
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random();
        
        // Very subtle noise - barely visible
        if (noise > 0.97) { // Only 3% of pixels get noise
          const intensity = Math.floor(Math.random() * 15 + 5); // Very low intensity
          data[i] = intensity;     // R
          data[i + 1] = intensity; // G
          data[i + 2] = intensity; // B
          data[i + 3] = Math.random() * 8 + 2; // Very low alpha (2-10)
        } else {
          data[i + 3] = 0; // Transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Animation loop - very fast refresh for flickering effect
    const animate = () => {
      // Only update every few frames for performance
      if (animationFrame % 3 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFilmGrain();
      }
      
      animationFrame++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-[0.4] mix-blend-overlay"
      style={{
        filter: 'contrast(1.5)',
      }}
    />
  );
};

export default FilmGrainBackground;
