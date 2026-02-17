import { motion } from "framer-motion";

const projects = [
  {
    title: "NGO Platform",
    desc:
      "A modern NGO platform that supports donations, volunteering, event management, and social impact tracking.",
    img:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "CyberHex – Event Platform",
    desc:
      "An event organizing platform for hackathons, workshops, and tech events with real-time management.",
    img:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    tech: ["React", "Supabase", "Node.js", "TypeScript"],
  },
  {
    title: "Stock Management System",
    desc:
      "A scalable stock and inventory management system with multi-cloud infrastructure support.",
    img:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    tech: ["Python", "Django", "SQLite"],
  },
  {
    title: "AI Image Generator",
    desc:
      "Generate unique AI images using deep learning and modern AI algorithms.",
    img:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    title: "Blockchain Voting System",
    desc:
      "A secure and transparent blockchain-based voting system ensuring trust and immutability.",
    img:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1200",
    tech: ["Solidity", "Web3.js", "React", "Node.js"],
  },
  {
    title: "IoT Dashboard",
    desc:
      "Real-time monitoring and control dashboard for IoT devices using modern protocols.",
    img:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
    tech: ["React", "Node.js", "MQTT", "Socket.io"],
  },
  {
    title: "E-Learning Platform",
    desc:
      "An online learning platform with video courses, assessments, and certifications.",
    img:
      "https://plus.unsplash.com/premium_photo-1663957870511-05aa0c159962?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
  },
  {
    title: "Healthcare Management System",
    desc:
      "Digital healthcare solution for managing patients, appointments, and hospital operations.",
    img:
      "https://plus.unsplash.com/premium_photo-1661378496270-58eecbf3ad27?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Smart Home Automation",
    desc:
      "IoT-based smart home automation system with mobile and voice control.",
    img:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200",
    tech: ["React Native", "Node.js", "MQTT", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0b1220] py-20 px-6">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-blue-400">Projects</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A showcase of real-world solutions we’ve built using modern
          technologies and innovative thinking.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="
              bg-[#111a2e]
              rounded-2xl
              overflow-hidden
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              group
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="
                  h-48 w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      text-xs px-3 py-1 rounded-full
                      bg-blue-500/10 text-blue-400
                      border border-blue-400/20
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <button
                  className="
                    text-sm font-medium text-blue-400
                    hover:text-white transition
                    flex items-center gap-1
                  "
                >
                  View Project
                  <span className="text-lg">↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
