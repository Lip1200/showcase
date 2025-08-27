"use client";

import React, { useEffect, useRef } from 'react';

const AnimatedNoiseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match screen
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Noise parameters
    let time = 0;
    const gridSize = 8; // Larger grid for better performance and simplicity
    const speed = 0.015;

    // Simplified noise calculation
    const getNoiseValue = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.008 + t) * Math.cos(y * 0.008 + t * 0.7);
    };

    // Generate noise pattern - simplified
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const noiseValue = getNoiseValue(x, y, time);
          const intensity = Math.floor((noiseValue + 1) * 127.5);
          const alpha = Math.min(25, Math.abs(noiseValue * 50));
          
          const index = (y * canvas.width + x) * 4;
          if (index < data.length) {
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
      
      const imageData = generateNoise();
      ctx.putImageData(imageData, 0, 0);
      
      time += speed;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
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
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-soft-light"
      style={{
        filter: 'blur(0.5px) contrast(1.2)',
      }}
    />
  );
};

export default AnimatedNoiseBackground;
