import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function Community() {
  useSEO({
    title: "Developer Community | MackysTech WhatsApp Group | Join IT Community Bhopal",
    description: "Join MackysTech developer community on WhatsApp! Connect with developers, designers and IT professionals from Bhopal and across India. Share projects, find collaborators, get mentorship.",
    canonical: "https://www.mackystech.in/community",
  });

  const channels = [
    {
      title: "Macky's Tech Official",
      type: "WhatsApp Community",
      desc: "Join the official MackysTech WhatsApp community to stay updated on notifications, live workshops, internships, and company updates directly on your phone.",
      color: "from-green-500/20 to-emerald-500/5",
      borderColor: "hover:border-green-500/50",
      buttonText: "Join Official Community",
      url: "https://chat.whatsapp.com/invite/mackystech-official",
    },
    {
      title: "Macky's Society",
      type: "WhatsApp Group",
      desc: "Connect with our wider student developer society. Ask software development questions, share coding resources, find team partners, and collaborate.",
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "hover:border-emerald-500/50",
      buttonText: "Join Society Group",
      url: "https://chat.whatsapp.com/invite/mackys-society",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-gray-300 py-28 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/10 bg-green-500/5 text-xs text-green-400 font-semibold mb-6">
            <Users className="w-3.5 h-3.5" /> WhatsApp Networks
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Connect with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Community</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Choose your community platform. Join Macky's Tech channels to discuss software development, projects, and careers.
          </p>
        </motion.div>

        {/* Communities List */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {channels.map((chan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group p-8 rounded-3xl bg-[#0a0f1a] border border-white/5 ${chan.borderColor} transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${chan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
                    {/* WhatsApp styled icon */}
                    <svg
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="w-8 h-8"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                    {chan.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-6 group-hover:text-white transition-colors">
                  {chan.title}
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
                  {chan.desc}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <a
                  href={chan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)]"
                >
                  {chan.buttonText} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
