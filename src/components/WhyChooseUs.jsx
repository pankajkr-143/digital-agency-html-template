import { motion } from "framer-motion";

const features = [
  {
    title: "Experienced Team",
    desc: "Our developers and engineers bring real-world experience to every project we build.",
    icon: "👨‍💻",
  },
  {
    title: "Modern Technology",
    desc: "We use the latest tools and frameworks to deliver fast, scalable, and secure solutions.",
    icon: "⚡",
  },
  {
    title: "Client-Centric Approach",
    desc: "We focus on understanding your needs and delivering solutions that actually solve problems.",
    icon: "🤝",
  },
  {
    title: "Reliable & Secure",
    desc: "From cloud infrastructure to certificate verification, security is always our priority.",
    icon: "🔒",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: 150,
    y: 150,
    rotate: 8,
    scale: 0.85,
    filter: "blur(6px)",
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // cinematic smooth easing
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{fontFamily: "'Outfit', sans-serif"}}>
            Why Choose Macky's Tech
          </h2>
          <p className="mt-6 text-gray-400 text-sm md:text-base lg:text-base" style={{fontFamily: "'Outfit', sans-serif"}}>
            We combine technology, creativity, and strategy to deliver
            solutions that help businesses grow.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="relative bg-[#111] border border-white/10 
              rounded-xl p-8 shadow-2xl"
            >
              <div className="text-3xl text-blue-400">{item.icon}</div>

              <h3 className="mt-6 text-base md:text-lg font-semibold text-white" style={{fontFamily: "'Outfit', sans-serif"}}>
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed" style={{fontFamily: "'Outfit', sans-serif"}}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
