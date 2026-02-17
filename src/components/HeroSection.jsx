import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const letters = ["M","A","C","K","Y","'","S"," ","T","E","C","H"];

const containerAnim = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const letterAnim = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [waveTrigger, setWaveTrigger] = useState(false);

  // 🔥 Delay before wave starts
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaveTrigger(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardHeight = useTransform(scrollYProgress, [0, 1], ["30vh", "100vh"]);
  const boxHeight = useTransform(scrollYProgress, [0, 0.8], ["200px", "60vh"]);
  const boxWidth = useTransform(scrollYProgress, [0, 0.8], ["95%", "90%"]);
  const boxRadius = useTransform(scrollYProgress, [0, 0.8], ["12px", "10px"]);

  const brightness = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const heroOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!videoRef.current) return;
    if (latest > 0.3) videoRef.current.play();
    else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  });

  return (
    <section
      ref={containerRef}
      style={{
        height: "200vh",
        position: "relative",
        background: "#000",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* 🎬 VIDEO */}
        <motion.video
          autoPlay
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: `brightness(${brightness})`,
          }}
          src="/assets/hero4.mp4"
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />

        {/* 🔥 TEXT */}
        <motion.div
          style={{
            opacity: heroOpacity,
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
            top: "-30%"
            
            
          }}
        >
          <motion.h1
            variants={containerAnim}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              color: "white",
              fontSize: "clamp(20px, 5vw, 80px)",
              fontWeight: "900",
              letterSpacing: "clamp(1px, 1.5vw, 6px)",
              textAlign: "center",
              padding: "0 16px",
              maxWidth: "100vw",
              lineHeight: "1.2",
              fontFamily: "'Outfit', sans-serif"
              
            }}
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnim}
                animate={
                  waveTrigger
                    ? {
                        y: [0, -15, 0],
                        transition: {
                          duration: 0.6,
                          delay: index * 0.05, // ripple effect
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
                style={{
                  margin: "0 clamp(1px, 0.8vw, 4px)",
                  display: "inline-block",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* ===== SECOND SLIDE (UNCHANGED) ===== */}
        <motion.div
          style={{
            height: cardHeight,
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "30px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 48px)",
              marginBottom: "clamp(30px, 6vw, 80px)",
              fontWeight: "400",
              letterSpacing: "1px",
              padding: "0 16px",
              textAlign: "center",
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            Powering your digital tomorrow
          </h2>

          <motion.div
            style={{
              height: boxHeight,
              width: boxWidth,
              borderRadius: boxRadius,
              background: "#000",
              overflow: "hidden",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
              margin: "0 16px",
              maxWidth: "calc(100vw - 32px)"
            }}
          >
            <video
            loop
              ref={videoRef}
              src="/assets/final22.mp4"
              muted
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
