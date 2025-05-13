import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    
    const alphabet = katakana + latin + nums + symbols;
    
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100); // Start above the canvas randomly
    }
    
    // Function to draw the matrix effect
    const draw = () => {
      // Set semi-transparent black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set green text color with glow
      ctx.fillStyle = '#00FF41';
      ctx.font = `${fontSize}px monospace`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(0, 255, 65, 0.5)';
      
      // Loop over each column
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        // Calculate bright vs. dim characters
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#FFFFFF'; // Occasionally make characters bright white
        } else {
          // Vary the green intensity based on position
          const greenIntensity = Math.min(255, Math.floor(150 + (drops[i] % 50)));
          ctx.fillStyle = `rgba(0, ${greenIntensity}, 65, 0.8)`;
        }
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -100);
        }
        
        // Move drop
        drops[i]++;
      }
      
      // Reset shadow for next frame
      ctx.shadowBlur = 0;
    };
    
    // Animation loop
    const interval = setInterval(draw, 45);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default MatrixRain;