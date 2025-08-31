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
  const [cursorVisible, setCursorVisible] = useState(true);

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

  // Animation de clignotement du cursor
  useEffect(() => {
    if (!isTypingComplete) return;

    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530); // 530ms pour un clignotement naturel

    return () => clearInterval(blinkInterval);
  }, [isTypingComplete]);

  return (
    <span className="typewriter-container">
      <span ref={elementRef}></span>
      {showCursor && (
        <span 
          className={`text-black dark:text-white transition-opacity duration-75 ${
            isTypingComplete && !cursorVisible ? 'opacity-0' : 'opacity-100'
          }`}
        >
          |
        </span>
      )}
    </span>
  );
};

export default Typewriter;
