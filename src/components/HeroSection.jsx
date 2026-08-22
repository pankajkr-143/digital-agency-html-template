import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "/images/hero/hero_it.jpg",
    "/images/hero/hero_marketing.jpg",
    "/images/hero/hero_construction.jpg"
  ];

  // 🔥 Delay before wave starts & Image auto-slider
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaveTrigger(true);
    }, 3500);

    const imageInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(imageInterval);
    };
  }, [heroImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardHeight = useTransform(scrollYProgress, [0, 1], ["30vh", "100vh"]);
  const boxHeight = useTransform(scrollYProgress, [0, 0.8], ["200px", "85vh"]);
  const boxWidth = useTransform(scrollYProgress, [0, 0.8], ["95%", "95%"]);
  const boxRadius = useTransform(scrollYProgress, [0, 0.8], ["12px", "10px"]);

  const brightness = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-150%"]);

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
            y: textY,
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
          <div className="flex flex-col items-center justify-center text-center px-4 z-10 relative w-full max-w-4xl" style={{ marginBottom: "clamp(30px, 6vw, 60px)" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 56px)",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                fontFamily: "'Outfit', sans-serif",
                background: "linear-gradient(to right, #ffffff, #a5b4fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="mb-4 leading-tight"
            >
              One Hub. Everything Your Business Needs to Grow.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mb-8 font-medium leading-relaxed">
              Get customers. Generate verified leads. Build powerful technology. Automate your business. Scale faster with Macky’s Tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center">
                Start Growing <span className="ml-2 font-bold">&rarr;</span>
              </Link>
              <Link to="/services" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
                Explore Solutions
              </Link>
            </div>
          </div>

          <motion.div
            style={{
              height: boxHeight,
              width: boxWidth,
              borderRadius: boxRadius,
              background: "#000",
              overflow: "hidden",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
              margin: "0 16px",
              maxWidth: "calc(100vw - 32px)",
              position: "relative"
            }}
          >
            <div className="w-full h-full p-2 md:p-4 grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2 md:gap-4 bg-gray-950">
              <div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group">
                 <img src="/images/case-studies/web.png" alt="High-Traffic Marketplace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
                 <img src="/images/case-studies/mobile.png" alt="Mobile Logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group hidden md:block">
                 <img src="/images/case-studies/saas.png" alt="SaaS Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group hidden md:block">
                 <img src="/images/case-studies/ai.png" alt="AI Interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
                 <img src="/images/case-studies/erp.png" alt="Enterprise ERP" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group">
                 <img src="/images/case-studies/marketing.png" alt="Marketing Analytics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
