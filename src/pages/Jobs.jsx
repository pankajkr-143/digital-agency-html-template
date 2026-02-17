import { useState } from "react";
import { motion } from "framer-motion";
import ApplyModal from "../components/ApplyModal";

const jobs = [
  {
    title: "Senior Full Stack Developer",
    tags: ["Engineering", "San Francisco, CA", "Full-time"],
    desc: "Lead the development of our core platform using modern web technologies.",
    points: [
      "5+ years of full-stack experience",
      "React & Node.js expertise",
      "AWS / GCP experience",
      "Strong system design skills",
    ],
    icon: "< />",
  },
  {
    title: "AI / ML Engineer",
    tags: ["R&D", "Remote", "Full-time"],
    desc: "Develop and deploy machine learning solutions for our products.",
    points: [
      "Strong ML/AI background",
      "TensorFlow / PyTorch",
      "Research experience",
      "Data modeling skills",
    ],
    icon: "🧠",
  },
  {
    title: "Cloud Infrastructure Engineer",
    tags: ["DevOps", "New York, NY", "Full-time"],
    desc: "Design and maintain scalable cloud infrastructure.",
    points: [
      "AWS / GCP expertise",
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "Security best practices",
    ],
    icon: "☁️",
  },
  {
    title: "Security Engineer",
    tags: ["Security", "Boston, MA", "Full-time"],
    desc: "Implement and maintain security systems across infrastructure.",
    points: [
      "CISSP / CEH preferred",
      "Penetration testing",
      "Incident response",
      "Compliance frameworks",
    ],
    icon: "🛡️",
  },
  {
    title: "Database Administrator",
    tags: ["Infrastructure", "Austin, TX", "Full-time"],
    desc: "Manage and optimize enterprise database systems.",
    points: [
      "PostgreSQL expertise",
      "Performance tuning",
      "Backup & recovery",
      "High availability design",
    ],
    icon: "🗄️",
  },
  {
    title: "DevOps Engineer",
    tags: ["Infrastructure", "Seattle, WA", "Full-time"],
    desc: "Build automation and CI/CD pipelines.",
    points: [
      "Linux background",
      "CI/CD tools",
      "Monitoring & logging",
      "Configuration management",
    ],
    icon: "⚙️",
  },
];

export default function Jobs() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  return (
    <section className="bg-gradient-to-b from-[#0b1220] to-[#05080f] py-24 px-6">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-blue-400 font-mono mb-3">
          $ ./careers --list-positions
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          OPEN POSITIONS
        </h1>
        <p className="text-gray-400 mt-4">
          Join our team of innovators and help shape the future of technology.
        </p>
      </div>

      {/* JOB CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-2xl p-6
              bg-[#0f172a]/80
              border border-blue-500/30
              shadow-[0_0_25px_rgba(59,130,246,0.25)]
              hover:shadow-[0_0_45px_rgba(59,130,246,0.45)]
              transition
            "
          >
            <div className="text-blue-400 text-2xl mb-4">
              {job.icon}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {job.title}
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-sm mt-4">
              {job.desc}
            </p>

            <div className="mt-4">
              <p className="text-white text-sm font-semibold mb-2">
                Requirements:
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                {job.points.map((p, id) => (
                  <li key={id}>• {p}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setSelectedJob(job.title);
                setOpen(true);
              }}
              className="
                mt-6 w-full py-2 rounded-lg
                border border-blue-500/40
                text-blue-400 font-medium
                hover:bg-blue-500/10
                transition
              "
            >
              APPLY NOW
            </button>
          </motion.div>
        ))}
      </div>

      {/* APPLY MODAL */}
      <ApplyModal
        open={open}
        onClose={() => setOpen(false)}
        position={selectedJob}
      />
    </section>
  );
}
