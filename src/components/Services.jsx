import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

export default function Services() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = {
    stiffness: 75,
    damping: 20,
    mass: 1.2,
  };

  /* ================= DESKTOP ANIMATION ================= */

  const box1X = useSpring(
    useTransform(scrollYProgress, [0.08, 0.18, 0.38, 0.6], [0, -40, -80, -120]),
    smooth
  );

  const box2X = useSpring(
    useTransform(
      scrollYProgress,
      [0.16, 0.26, 0.46, 0.68],
      ["110vw", "0px", "-40px", "-80px"]
    ),
    smooth
  );

  const box2Opacity = useSpring(
    useTransform(scrollYProgress, [0.16, 0.19], [0, 1]),
    smooth
  );

  const box3X = useSpring(
    useTransform(scrollYProgress, [0.3, 0.4, 0.62], ["110vw", "0px", "-40px"]),
    smooth
  );

  const box3Opacity = useSpring(
    useTransform(scrollYProgress, [0.3, 0.33], [0, 1]),
    smooth
  );

  const box4X = useSpring(
    useTransform(scrollYProgress, [0.44, 0.56], ["110vw", "0px"]),
    smooth
  );

  const box4Opacity = useSpring(
    useTransform(scrollYProgress, [0.44, 0.47], [0, 1]),
    smooth
  );

  return (
    <section
      ref={sectionRef}
      /* ✅ NORMAL SCROLL MOBILE | LONG SCROLL DESKTOP */
      className="relative min-h-screen lg:min-h-[500vh]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(5,10,20,0.85), rgba(5,10,20,0.9)),
          url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Sticky ONLY desktop */}
      <div className="lg:sticky lg:top-0 min-h-screen flex items-center overflow-hidden">

        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10 px-5 lg:px-12">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Crafted With <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Precision & Code.
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-lg max-w-lg mx-auto lg:mx-0">
              We build scalable platforms and secure digital systems engineered
              for performance and growth.
            </p>

            <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full mx-auto lg:mx-0"></div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 lg:h-[400px]">

            {/* -------- MOBILE + TABLET (NORMAL CARDS) -------- */}
            <div className="flex flex-col gap-6 lg:hidden">
              <PremiumCard
                title="Web Development"
                desc="Modern web systems with secure architecture."
                items={["React", "Next.js", "APIs", "Optimization"]}
              />

              <PremiumCard
                title="App Development"
                desc="High-performance cross-platform applications."
                items={["Flutter", "Firebase", "Realtime", "Deployment"]}
              />

              <PremiumCard
                title="Cloud Architecture"
                desc="Scalable infrastructure with CI/CD automation."
                items={["AWS", "Docker", "Monitoring", "Security"]}
              />

              <PremiumCard
                title="Digital Security"
                desc="Advanced validation and encryption systems."
                items={["Encryption", "QR Verify", "Admin", "API"]}
              />
            </div>

            {/* -------- DESKTOP ANIMATION -------- */}
            <div className="hidden lg:block relative h-full">

              <AnimatedCard x={box1X} z={10}>
                <PremiumCard
                  title="Web Development"
                  desc="Modern web systems with secure architecture."
                  items={["React", "Next.js", "APIs", "Optimization"]}
                />
              </AnimatedCard>

              <AnimatedCard x={box2X} opacity={box2Opacity} z={20}>
                <PremiumCard
                  title="App Development"
                  desc="High-performance cross-platform applications."
                  items={["Flutter", "Firebase", "Realtime", "Deployment"]}
                />
              </AnimatedCard>

              <AnimatedCard x={box3X} opacity={box3Opacity} z={30}>
                <PremiumCard
                  title="Cloud Architecture"
                  desc="Scalable infrastructure with CI/CD automation."
                  items={["AWS", "Docker", "Monitoring", "Security"]}
                />
              </AnimatedCard>

              <AnimatedCard x={box4X} opacity={box4Opacity} z={40}>
                <PremiumCard
                  title="Digital Security"
                  desc="Advanced validation and encryption systems."
                  items={["Encryption", "QR Verify", "Admin", "API"]}
                />
              </AnimatedCard>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= ANIMATED WRAPPER ================= */

function AnimatedCard({ x, opacity = 1, z, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{ x, opacity, zIndex: hovered ? 999 : z }}
      className="absolute inset-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        scale: hovered ? 1.08 : 1,
        y: hovered ? -18 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* ================= CARD ================= */

function PremiumCard({ title, desc, items }) {
  return (
    <div className="h-full w-full rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl">
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm mt-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
