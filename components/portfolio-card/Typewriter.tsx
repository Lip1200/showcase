"use client";

import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  typeSpeed?: number;
  showCursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 400, 
  typeSpeed = 70,
  showCursor = true
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    let currentIndex = 0;
    const element = elementRef.current;
    element.textContent = "";
    setIsTypingComplete(false);

    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          element.textContent += text[currentIndex];
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTypingComplete(true);
        }
      }, typeSpeed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, typeSpeed]);

  return (
    <span className="typewriter-container">
      <span ref={elementRef}></span>
      {showCursor && (
        <span 
          className={`typewriter-cursor ${isTypingComplete ? 'blinking' : ''}`}
        >
          |
        </span>
      )}
    </span>
  );
};

export default Typewriter;
