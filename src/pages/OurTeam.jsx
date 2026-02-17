import { motion } from "framer-motion";

const teamMembers = [
  { name: "Pankaj Kr Gupta", role: "Founder & CEO", img: "/assets/ceo.jpg" },
  { name: "Noshaba Khan", role: "HR", img: "/assets/hr.jpeg" },
  { name: "Ghanshyam Dhote", role: "Lead Developer", img: "/assets/sunny.jpeg" },
  { name: "Shubham Kumar Patel", role: "Software Developer (Co-Lead)", img: "/assets/panda.jpeg" },
  { name: "Sumit Joshi", role: "Software Developer (Co-Lead)", img: "/assets/sumit.jpeg" },
  { name: "Riya Nagar", role: "BDA", img: "/assets/riya.jpeg" },
  { name: "Mehul Tamrakar", role: "Software Developer", img: "/assets/mehul.jpeg" },
  { name: "Atif Khan", role: "Graphics Designer", img: "/assets/atif.jpeg" },
  { name: "Priya Vardhan", role: "Backend Developer", img: "/assets/priya.jpeg" },
  { name: "Muskan Keshri", role: "AI Engineer", img: "/assets/muskan.jpeg" },
  { name: "Prashant Kumar", role: "Backend Developer", img: "/assets/prashant.jpeg" },
];

export default function OurTeam() {
  return (
    <section className="min-h-screen bg-[#0b1220] py-20 px-6">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Meet Our <span className="text-blue-400">Team</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A passionate team of developers, designers, and innovators building
          future-ready digital solutions.
        </p>
      </div>

      {/* TEAM GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -10 }}
            className="
              bg-[#111a2e]
              rounded-2xl
              p-6
              text-center
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              group
            "
          >
            {/* IMAGE */}
            <div className="relative mx-auto w-28 h-28 rounded-full overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-400/40"></div>
            </div>

            {/* INFO */}
            <h3 className="mt-4 text-xl font-semibold text-white">
              {member.name}
            </h3>
            <p className="text-sm text-blue-400 mt-1">
              {member.role}
            </p>

            {/* SOCIALS (dummy) */}
        
          </motion.div>
        ))}
      </div>
    </section>
  );
}
