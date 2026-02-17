import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const internships = [
  {
    title: "Backend Developer Intern (PostgreSQL)",
    duration: "3-6 months",
    domain: "Engineering",
    desc: "Work with backend team to build scalable APIs and data-driven systems.",
  },
  {
    title: "Android Developer Intern",
    duration: "3-6 months",
    domain: "Mobile Development",
    desc: "Build and enhance Android applications using Kotlin or Java.",
  },
  {
    title: "Social Media Marketing Intern",
    duration: "2-3 months",
    domain: "Marketing",
    desc: "Manage social platforms, campaigns and grow brand presence.",
  },
  {
    title: "Full Stack Developer Intern",
    duration: "3-6 months",
    domain: "Engineering",
    desc: "Work on both frontend and backend using React & Node.js.",
  },
  {
    title: "UI/UX Designer Intern",
    duration: "2-3 months",
    domain: "Design",
    desc: "Design user-friendly interfaces and improve user experience.",
  },
  {
    title: "Cyber Security Intern",
    duration: "2-4 months",
    domain: "Security",
    desc: "Assess, monitor and improve security posture of applications.",
  },
  {
    title: "Content Creator Intern",
    duration: "2-3 months",
    domain: "Content/Marketing",
    desc: "Create blogs, social media content and marketing creatives.",
  },
  {
    title: "AI Research Intern",
    duration: "6 months",
    domain: "R&D",
    desc: "Work on AI/ML research projects and real-world applications.",
  },
  {
    title: "DevOps Intern",
    duration: "3-6 months",
    domain: "Infrastructure",
    desc: "Learn CI/CD, cloud infrastructure and automation tools.",
  },
];

export default function Internships() {
  return (
    <section className="min-h-screen bg-[#0b1220] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">
          INTERNSHIP OPPORTUNITIES
        </h1>
        <p className="text-center text-gray-400 mb-14">
          Launch your career with hands-on experience in cutting-edge technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {internships.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-[#0f1a30] border border-blue-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-sm text-blue-400 mb-2">
                {item.domain} • {item.duration}
              </p>

              <p className="text-gray-300 text-sm mb-6">{item.desc}</p>

              <Link
                to="/internship-form"
                className="block text-center border border-blue-500 text-blue-400 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition"
              >
                APPLY NOW
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
