import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypewriterEffectProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  startDelay?: number;
  backDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  startDelay = 300,
  backDelay = 1500,
  loop = true,
  showCursor = true,
  className = '',
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        startDelay,
        backDelay,
        loop,
        showCursor,
        cursorChar: '_',
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, startDelay, backDelay, loop, showCursor]);

  return <span ref={el} className={className}></span>;
};

export default TypewriterEffect;