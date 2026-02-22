import { motion } from "framer-motion";

const projects = [
  {
    title: "Home Service App",
    desc:
      "An on-demand home service platform for booking electricians, plumbers, cleaners, and other professionals.",
    img:
      "https://i.ibb.co/pHrvMgw/image.png",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.smartersvision.home_services",
  },
  {
    title: "Order Management System",
    desc:
      "A centralized order management system to track orders, inventory, invoices, and customer data efficiently.",
    img:
      "https://i.ibb.co/k60Ms5xt/image.png",
    tech: ["Next.js", "Express.js", "MySQL", "AWS"],
    link: "https://laundry.blarve.com/",
  },
  {
    title: "Quick Delivery App",
    desc:
      "A hyperlocal quick delivery application for fast delivery of parcels and essentials within minutes.",
    img:
      "https://i.ibb.co/qMnMWFN0/image.png",
    tech: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
    link: "https://play.google.com/store/apps/details?id=com.divinetechs.dtbasket&client_id=329732617.1755090634&session_id=1771731931",
  },
  {
    title: "E-Commerce App",
    desc:
      "A full-featured e-commerce platform with product listings, cart, payment gateway integration, and order tracking.",
    img:
      "https://i.ibb.co/gL9yyxYs/image.png",
    tech: ["Next.js", "Laravel", "MySQL", "Stripe"],
    link: "https://omnimart.geniusdevs.com/",
  },
  {
    title: "Grocery App",
    desc:
      "An online grocery shopping app with real-time inventory, doorstep delivery, and digital payments.",
    img:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay"],
    link: "https://play.google.com/store/apps/details?id=com.buildapponline.grocerystore",
  },
  {
    title: "Food Delivery App",
    desc:
      "A food ordering and delivery app with restaurant listings, live tracking, and multiple payment options.",
    img:
      "https://i.ibb.co/jPzbLRw1/image.png",
    tech: ["Flutter", "Django", "PostgreSQL", "Firebase"],
    link: "https://drive.google.com/drive/folders/1cXsKn9Lv60zpOiGeCNJnEDfDqtuY3iUe",
  },
  {
    title: "Taxi Booking App",
    desc:
      "A ride-hailing application with real-time driver tracking, fare calculation, and secure payment integration.",
    img:
      "https://i.ibb.co/Ps37MX54/image.png",
    tech: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    link: "https://play.google.com/store/apps/details?hl=en_IN&id=com.sizh.rideon.driver.taxiapp",
  },
  {
    title: "Astrology App",
    desc:
      "An astrology consultation app offering horoscope readings, live chat with astrologers, and kundli generation.",
    img:
      "https://i.ibb.co/wrj7fDp4/image.png",
    tech: ["Flutter", "Laravel", "MySQL", "Firebase"],
    link: "https://astro.ftafat.in/",
  },
  {
    title: "GYM App",
    desc:
      "Fitness Wellness Yoga Workout Meditation Mental Health Tracker Personal Training Coach Class Booking",
    img:
      "https://i.ibb.co/tMkCNKxW/image.pngs",
    tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
    link: "https://example.com/coaching-app",
  },
  {
    title: "School Management App",
    desc:
      "A comprehensive school management system with attendance tracking, fee management, results, and parent-teacher communication.",
    img:
      "https://i.ibb.co/PsmMmyxf/image.png",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://i.ibb.co/PsmMmyxf/image.png",
  },
  {
    title: "NGO Platform",
    desc:
      "A modern NGO platform that supports donations, volunteering, event management, and social impact tracking.",
    img:
      "https://i.ibb.co/FLvHrywG/image.png?q=80&w=1200",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://arsdf.com/",
  },
  {
    title: "CyberHex – Cyber Education Platform",
    desc:
      "An event organizing platform for hackathons, workshops, and tech events with real-time management.",
    img:
      "https://i.ibb.co/4ZQkFHRk/image.png?q=80&w=1200",
    tech: ["React", "Supabase", "Node.js", "TypeScript"],
    link: "https://cyberhx.com/",
  },
  {
    title: "Stock Management System",
    desc:
      "A scalable stock and inventory management system with multi-cloud infrastructure support.",
    img:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    tech: ["Python", "Django", "SQLite"],
    link: "https://github.com/pankajkr-143/Stock-Management-System",
  },
  {
    title: "E-Learning Platform",
    desc:
      "An online learning platform with video courses, assessments, and certifications.",
    img:
      "https://s3.envato.com/files/384490216/01_preview_edumall.__large_preview.jpg?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
    link: "https://dtlearningweb.divinetechs.com/",
  },
  {
    title: "Multi Hospital - SaaS - AI Treatment",
    desc:
      "Digital healthcare solution for managing patients, appointments, and hospital operations.",
    img:
      "https://i.ibb.co/3mWwWkDh/image.png?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://democa.store/demo/multi-hms/?client_id=329732617.1755090634&session_id=1771731931",
  },
  {
    title: "Smart Home Automation",
    desc:
      "IoT-based smart home automation system with mobile and voice control.",
    img:
      "https://i.ibb.co/Rkt2R8Z2/image.png?q=80&w=1200",
    tech: ["React Native", "Node.js", "MQTT", "MongoDB"],
    link: "https://drive.google.com/file/d/1JRg-g2VU4J0R0xSdt8nTTpMOpuxIRisq/view?client_id=329732617.1755090634&session_id=1771731931",
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm font-medium text-blue-400
                    hover:text-white transition
                    flex items-center gap-1
                    inline-block
                  "
                >
                  View Project
                  <span className="text-lg">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
