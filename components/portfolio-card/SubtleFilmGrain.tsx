"use client";

import React, { useEffect, useRef } from 'react';

const SubtleFilmGrain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let frame = 0;

    // Very subtle film grain effect
    const drawGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Create very sparse, subtle noise
      for (let i = 0; i < data.length; i += 4) {
        const random = Math.random();
        
        // Only show noise on very few pixels
        if (random > 0.995) { // Only 0.5% of pixels
          const intensity = Math.floor(random * 20 + 10); // Low intensity
          const alpha = Math.floor(random * 6 + 2); // Very low alpha
          
          data[i] = intensity;     // R
          data[i + 1] = intensity; // G
          data[i + 2] = intensity; // B
          data[i + 3] = alpha;     // A
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Very slow refresh rate for subtle effect
    const animate = () => {
      if (frame % 4 === 0) { // Update every 4 frames
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrain();
      }
      
      frame++;
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
      className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]"
      style={{
        mixBlendMode: 'overlay',
        filter: 'contrast(0.8)',
      }}
    />
  );
};

export default SubtleFilmGrain;
