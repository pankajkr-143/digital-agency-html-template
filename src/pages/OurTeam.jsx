import { motion } from "framer-motion";

const teamMembers = [
  { name: "Pankaj Kr Gupta", role: "Founder & CEO", img: "/assets/ceo.jpg" },
  // { name: "Noshaba Khan", role: "HR", img: "/assets/hr.jpeg" },
  // { name: "Ghanshyam Dhote", role: "Lead Developer", img: "/assets/sunny.jpeg" },
  // { name: "Shubham Kumar Patel", role: "Software Developer (Co-Lead)", img: "/assets/panda.jpeg" },
  // { name: "Sumit Joshi", role: "Software Developer (Co-Lead)", img: "/assets/sumit.jpeg" },
  // { name: "Riya Nagar", role: "BDA", img: "/assets/riya.jpeg" },
  // { name: "Mehul Tamrakar", role: "Software Developer", img: "/assets/mehul.jpeg" },
  // { name: "Atif Khan", role: "Graphics Designer", img: "/assets/atif.jpeg" },
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

      {/* FOUNDER SECTION */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#111a2e] to-[#0f1929] rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* FOUNDER IMAGE - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="/assets/ceo.jpg"
                  alt="Pankaj Kr Gupta - Founder & CEO"
                  className="relative w-full h-full rounded-full object-cover border-4 border-blue-400/30 shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Founder & CEO
                </div>
              </div>
            </motion.div>

            {/* FOUNDER STORY - RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-blue-400">Founder</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-6">
                Pankaj Kr Gupta
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With a vision to transform digital landscapes, Pankaj embarked on an extraordinary journey from a passionate developer to a visionary entrepreneur. His story is one of perseverance, innovation, and unwavering commitment to excellence.
                </p>
                
                <p>
                  Starting with just a laptop and big dreams, he built this company from the ground up, facing every challenge head-on and turning obstacles into opportunities. His leadership philosophy centers around empowering teams and fostering a culture of continuous learning.
                </p>
                
                <p>
                  Today, under his guidance, we're not just building products – we're crafting digital experiences that make a difference. His journey reminds us that with passion, dedication, and the right team, impossible is just a word.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-blue-400 font-semibold">10+ Years</span>
                  <span className="text-gray-400 text-sm ml-2">Experience</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-blue-400 font-semibold">50+ Projects</span>
                  <span className="text-gray-400 text-sm ml-2">Delivered</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-blue-400 font-semibold">100% Client</span>
                  <span className="text-gray-400 text-sm ml-2">Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* TEAM GRID */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Amazing <span className="text-blue-400">Team</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Talented individuals working together to create extraordinary solutions.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
