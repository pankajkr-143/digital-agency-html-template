import { useRef, useState, useEffect } from "react";

export default function SpotlightHero() {
  const textRef = useRef(null);

  const [mouse, setMouse] = useState({ x: -500, y: -500 });
  const [smoothMouse, setSmoothMouse] = useState({ x: -500, y: -500 });
  const [intensity, setIntensity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  /* Smooth spotlight movement */
  useEffect(() => {
    let frame;

    const animate = () => {
      setSmoothMouse((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.15,
        y: prev.y + (mouse.y - prev.y) * 0.15,
      }));

      setIntensity((prev) =>
        isHovering ? Math.min(prev + 0.08, 1) : prev * 0.85
      );

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [mouse, isHovering]);

  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      style={{
        height: "50vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={textRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {/* Base Text */}
        <h1
          style={{
            fontSize: "clamp(60px, 12vw, 180px)",
            fontWeight: "900",
            letterSpacing: "14px",
            color: "rgba(255,255,255,0.05)",
            whiteSpace: "nowrap",
            userSelect: "none",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MACKY'S TECH
        </h1>

        {/* Improved Smooth Spotlight */}
        <h1
          style={{
            position: "absolute",
            inset: 0,
            fontSize: "clamp(60px, 12vw, 180px)",
            fontWeight: "900",
            letterSpacing: "14px",
            whiteSpace: "nowrap",
            fontFamily: "system-ui, sans-serif",
            background:
              "linear-gradient(90deg,#ffffff,#f5f5f5,#ffffff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            pointerEvents: "none",
            opacity: intensity,

            WebkitMaskImage: `radial-gradient(
              circle 280px at ${smoothMouse.x}px ${smoothMouse.y}px,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.95) 30%,
              rgba(0,0,0,0.75) 55%,
              rgba(0,0,0,0.4) 75%,
              transparent 100%
            )`,
            maskImage: `radial-gradient(
              circle 280px at ${smoothMouse.x}px ${smoothMouse.y}px,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.95) 30%,
              rgba(0,0,0,0.75) 55%,
              rgba(0,0,0,0.4) 75%,
              transparent 100%
            )`,
          }}
        >
          MACKY'S TECH
        </h1>
      </div>
    </section>
  );
}
