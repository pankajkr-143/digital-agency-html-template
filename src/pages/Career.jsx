import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import {
  Briefcase, GraduationCap, MapPin, Clock, Users, Star,
  ArrowRight, Zap, Heart, Rocket, Shield, Coffee, Award,
  Code, Brain, Cloud, Globe, Smartphone
} from "lucide-react";

/* ── WHY WORK WITH US ───────────────────────────────── */
const perks = [
  { icon: Rocket, title: "Fast Growth", desc: "Work on real client projects from Day 1. No busywork, just impact." },
  { icon: Brain, title: "Learn Every Day", desc: "Weekly tech sessions, access to premium courses, certifications sponsored." },
  { icon: Heart, title: "People First", desc: "Flexible hours, remote options, mental health days — we care about you." },
  { icon: Award, title: "Recognition", desc: "Monthly awards, performance bonuses, and transparent appraisals." },
  { icon: Coffee, title: "Chill Workspace", desc: "Creative office in Bhopal, casual Fridays, team outings, and fun events." },
  { icon: Shield, title: "Stability", desc: "Established IT company with diverse clients across India and globally." },
];

/* ── OPEN JOBS ───────────────────────────────────────── */
const jobs = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    mode: "Hybrid",
    location: "Bhopal, MP",
    experience: "3–5 years",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    desc: "Lead development of scalable web applications for our enterprise clients.",
  },
  {
    title: "AI / ML Engineer",
    type: "Full-time",
    mode: "Remote",
    location: "India (Remote)",
    experience: "2–4 years",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    skills: ["Python", "TensorFlow", "OpenAI API", "FastAPI"],
    desc: "Build AI-powered features for our SaaS products and client solutions.",
  },
  {
    title: "Cloud Infrastructure Engineer",
    type: "Full-time",
    mode: "Hybrid",
    location: "Bhopal, MP",
    experience: "2–4 years",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    desc: "Design and maintain secure, scalable cloud infrastructure for clients.",
  },
  {
    title: "Mobile App Developer",
    type: "Full-time",
    mode: "On-site",
    location: "Bhopal, MP",
    experience: "2–3 years",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-600",
    skills: ["React Native", "Flutter", "Firebase", "REST APIs"],
    desc: "Develop cross-platform mobile apps for Android and iOS.",
  },
  {
    title: "Digital Marketing Manager",
    type: "Full-time",
    mode: "Hybrid",
    location: "Bhopal, MP",
    experience: "2–4 years",
    icon: Globe,
    color: "from-orange-500 to-red-600",
    skills: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    desc: "Drive growth for MackysTech and our clients through data-driven marketing.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    mode: "Remote / Hybrid",
    location: "Bhopal, MP",
    experience: "1–3 years",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
    desc: "Create stunning, user-friendly designs for web and mobile products.",
  },
];

/* ── INTERNSHIPS ─────────────────────────────────────── */
const internships = [
  { title: "Full Stack Dev Intern", domain: "Engineering", duration: "3–6 months", mode: "Hybrid" },
  { title: "Android Dev Intern", domain: "Mobile", duration: "3–6 months", mode: "On-site" },
  { title: "AI Research Intern", domain: "R&D", duration: "6 months", mode: "Remote" },
  { title: "UI/UX Design Intern", domain: "Design", duration: "2–3 months", mode: "Hybrid" },
  { title: "Cybersecurity Intern", domain: "Security", duration: "2–4 months", mode: "Hybrid" },
  { title: "Digital Marketing Intern", domain: "Marketing", duration: "2–3 months", mode: "Remote" },
  { title: "Content Creator Intern", domain: "Content", duration: "2–3 months", mode: "Remote" },
  { title: "DevOps Intern", domain: "Infrastructure", duration: "3–6 months", mode: "Hybrid" },
];

/* ── HIRING PROCESS ──────────────────────────────────── */
const steps = [
  { step: "01", title: "Apply Online", desc: "Submit your resume and portfolio through our career form." },
  { step: "02", title: "Screening Call", desc: "Quick 15-minute call to understand your background and goals." },
  { step: "03", title: "Technical Round", desc: "Practical test or case study relevant to the role." },
  { step: "04", title: "Culture Fit", desc: "Meet your future team and see if we click." },
  { step: "05", title: "Offer & Onboard", desc: "Receive offer letter and begin your exciting journey with us!" },
];

export default function Career() {
  useSEO({
    title: "Career at MackysTech | IT Jobs & Internships in Bhopal | Join Our Team",
    description:
      "Join MackysTech! Explore full-time IT jobs and internship opportunities in software development, AI/ML, cloud, mobile, design and digital marketing in Bhopal, India.",
    canonical: "https://www.mackystech.in/career",
  });

  return (
    <main className="min-h-screen bg-[#060a12] text-white">

      {/* ── HERO ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-28 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-semibold mb-6">
            <Briefcase className="w-3.5 h-3.5" /> We're Hiring!
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build Your Career at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              MackysTech
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Join a passionate team of developers, designers, and innovators building
            future-ready digital solutions for clients across India and globally.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#jobs" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              View Open Positions
            </a>
            <a href="#internships" className="px-8 py-3 rounded-full border border-white/20 hover:border-blue-400 text-white/80 hover:text-white font-semibold transition">
              Internship Programs
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── STATS ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "50+", label: "Team Members" },
            { num: "30+", label: "Live Projects" },
            { num: "100%", label: "Growth YoY" },
            { num: "4.9★", label: "Glassdoor Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/8">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {s.num}
              </div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY JOIN ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Work at <span className="text-blue-400">MackysTech?</span>
          </h2>
          <p className="mt-4 text-gray-400">More than a job — a launchpad for your career.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#0d1221] border border-white/8 hover:border-blue-500/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 w-fit mb-4 group-hover:bg-blue-500/20 transition">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{perk.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── OPEN POSITIONS ────────────────────────────────── */}
      <div id="jobs" className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Open <span className="text-blue-400">Positions</span>
          </h2>
          <p className="mt-4 text-gray-400">Full-time roles for passionate professionals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => {
            const Icon = job.icon;
            return (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-[#0d1221] border border-white/8 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${job.color} opacity-90`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {job.type}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                      {job.mode}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{job.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.experience}</span>
                </div>
                <Link
                  to="/contact"
                  className={`mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${job.color} hover:opacity-90 transition`}
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── INTERNSHIPS ───────────────────────────────────── */}
      <div id="internships" className="bg-[#0a0f1a] py-20 px-6 mb-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Internship <span className="text-blue-400">Programs</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Kickstart your career with hands-on real-world experience and a certificate.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 rounded-xl bg-[#0d1221] border border-white/8 hover:border-blue-500/30 transition-all"
              >
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">
                  {intern.domain}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">{intern.title}</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" /> {intern.duration}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" /> {intern.mode}
                  </div>
                </div>
                <Link
                  to="/internship-form"
                  className="mt-4 block text-center text-xs font-semibold py-2 rounded-lg border border-blue-500/40 text-blue-400 hover:bg-blue-500 hover:text-white transition"
                >
                  Apply →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HIRING PROCESS ────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Hiring <span className="text-blue-400">Process</span>
          </h2>
          <p className="mt-4 text-gray-400">Simple, transparent, and fast. Usually 1–2 weeks.</p>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600/20 border-2 border-blue-500/40 flex items-center justify-center mx-auto mb-4 text-blue-400 font-black text-lg">
                  {step.step}
                </div>
                <h4 className="font-bold text-white text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <div className="border-t border-white/5 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Join Us?
          </span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Don't wait. Send us your resume and let's have a conversation about how you can grow with MackysTech.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          Send Your Resume <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
