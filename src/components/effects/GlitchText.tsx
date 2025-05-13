import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  delay = 0,
  intensity = 'medium',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchCharacters = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let timeout: number;
    
    if (delay > 0) {
      timeout = window.setTimeout(() => {
        setIsGlitching(true);
      }, delay);
    } else {
      setIsGlitching(true);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [delay]);

  useEffect(() => {
    if (!isGlitching) return;
    
    // Configure the glitch effect intensity
    const intervalTime = {
      low: 200,
      medium: 100,
      high: 50
    }[intensity];
    
    const glitchChance = {
      low: 0.05,
      medium: 0.1,
      high: 0.2
    }[intensity];
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, idx) => {
            if (Math.random() < glitchChance) {
              return glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)];
            }
            return char;
          })
          .join('')
      );
      
      // Reset back to original text occasionally
      if (Math.random() > 0.9) {
        setTimeout(() => setDisplayText(text), 50);
      }
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [text, isGlitching, intensity]);

  return (
    <span
      className={`inline-block ${className}`}
      data-text={text}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;