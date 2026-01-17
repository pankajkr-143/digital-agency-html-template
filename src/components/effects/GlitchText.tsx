import React from 'react';

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
  // All glitch effects removed - just display text normally for professional look
  return (
    <span
      className={`inline-block ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;