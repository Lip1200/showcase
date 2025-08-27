"use client";

import React, { useEffect, useRef } from 'react';

const NoiseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Noise animation parameters
    let time = 0;
    const noiseScale = 0.005;
    const timeScale = 0.02;
    const amplitude = 0.1;

    // Simple noise function (Perlin-like)
    const noise = (x: number, y: number, t: number) => {
      const frequency = noiseScale;
      const n = Math.sin(x * frequency + t) * Math.cos(y * frequency + t * 0.7) * 
                Math.sin((x + y) * frequency * 0.5 + t * 0.3);
      return n * amplitude;
    };

    // Create noise pattern
    const createNoisePattern = (time: number) => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          const noiseValue = noise(x, y, time);
          const intensity = Math.floor((noiseValue + 1) * 127.5);
          const alpha = Math.abs(noiseValue) * 15; // Very subtle
          
          const index = (y * canvas.width + x) * 4;
          if (index < data.length) {
            // Use CSS variable colors for theming
            data[index] = intensity;     // R
            data[index + 1] = intensity; // G
            data[index + 2] = intensity; // B
            data[index + 3] = alpha;     // A
          }
        }
      }

      return imageData;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const imageData = createNoisePattern(time);
      ctx.putImageData(imageData, 0, 0);
      
      time += timeScale;
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
      className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0"
      style={{
        filter: 'blur(0.5px)',
      }}
    />
  );
};

export default NoiseBackground;
