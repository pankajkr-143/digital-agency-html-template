import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import { HelpCircle, ChevronDown, MessageSquare, Mail, Phone } from "lucide-react";

const faqCategories = [
  {
    category: "General",
    color: "from-blue-500 to-indigo-600",
    faqs: [
      {
        q: "What services does MackysTech provide?",
        a: "MackysTech provides a comprehensive range of IT services including custom software development, website development, mobile app development (Android & iOS), cloud computing (AWS), cybersecurity, AI & ML solutions, ERP/CRM development, digital marketing, IT training, and internship programs.",
      },
      {
        q: "Where is MackysTech located?",
        a: "Our main office is at 44C, Indrapuri Sector C, Bhopal, Madhya Pradesh 462022. We serve clients across India and internationally, with remote project delivery available pan-India.",
      },
      {
        q: "How long has MackysTech been in operation?",
        a: "MackysTech was founded in 2024 by Pankaj Kr Gupta with a vision to deliver enterprise-grade IT solutions to businesses across India. Despite being a young company, we have already delivered 50+ projects.",
      },
      {
        q: "Can I get a free consultation?",
        a: "Yes! We offer a free 30-minute consultation to understand your project requirements. Contact us via our website contact form, email at info@mackystech.in, or call +91 8235910315.",
      },
    ],
  },
  {
    category: "Software Development",
    color: "from-purple-500 to-pink-600",
    faqs: [
      {
        q: "What technologies does MackysTech use for development?",
        a: "We use modern, battle-tested technologies: React.js, Next.js, Node.js, Python, Django, Flutter, React Native for frontend/mobile; PostgreSQL, MongoDB, MySQL for databases; AWS, GCP for cloud; Docker, Kubernetes for DevOps.",
      },
      {
        q: "How long does it take to build a website or app?",
        a: "A basic website takes 1–2 weeks. A full web application takes 4–8 weeks. A mobile app typically takes 6–12 weeks. Complex enterprise software may take 3–6 months. We always define timelines clearly before starting.",
      },
      {
        q: "Do you provide source code ownership after project delivery?",
        a: "Yes! Upon full payment, you receive complete source code ownership along with deployment files, database schemas, API documentation, and a 30-day support period at no extra cost.",
      },
      {
        q: "Do you sign an NDA for project confidentiality?",
        a: "Absolutely. We sign a Non-Disclosure Agreement (NDA) before discussing any project details. Client confidentiality is one of our core commitments.",
      },
      {
        q: "What is your development process?",
        a: "We follow an Agile methodology: (1) Requirement gathering & analysis, (2) Wireframing & UI design, (3) Development in 2-week sprints, (4) QA Testing, (5) Client review & feedback, (6) Deployment, (7) Post-launch support.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    color: "from-emerald-500 to-teal-600",
    faqs: [
      {
        q: "How much does it cost to build a website?",
        a: "Pricing depends on project complexity: Basic website (5–7 pages): ₹15,000–₹40,000. Business website with CMS: ₹40,000–₹1,00,000. E-commerce store: ₹60,000–₹2,00,000. Custom web application: ₹1,50,000+. Contact us for a detailed quote.",
      },
      {
        q: "What is the payment structure?",
        a: "We follow a milestone-based payment structure: 40% advance to start the project, 30% on design approval/midpoint delivery, and 30% on final delivery. For long-term projects, monthly billing is available.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Bank Transfer (NEFT/RTGS/IMPS), UPI (GPay, PhonePe, Paytm), Razorpay (cards), and Cash for local Bhopal clients. GST invoice is provided for all payments.",
      },
      {
        q: "Do you provide EMI or deferred payment options?",
        a: "For projects above ₹1,00,000, we can discuss flexible payment schedules on a case-by-case basis. Contact us to discuss your requirements.",
      },
    ],
  },
  {
    category: "Internship & Training",
    color: "from-orange-500 to-red-600",
    faqs: [
      {
        q: "What internship programs does MackysTech offer?",
        a: "We offer internships in: Full Stack Development, Android Development, AI/ML Research, UI/UX Design, Cybersecurity, Digital Marketing, Content Creation, and DevOps. Duration ranges from 2 to 6 months.",
      },
      {
        q: "Is the internship paid or unpaid?",
        a: "We offer performance-based stipends for selected interns. Outstanding interns may receive job offers upon completion. All interns receive a verified certificate and a letter of recommendation.",
      },
      {
        q: "Can students from outside Bhopal apply for internship?",
        a: "Yes! We offer both on-site (Bhopal) and remote internship options. Students from any state can apply. Remote interns get the same project exposure and mentorship as on-site interns.",
      },
      {
        q: "How do I apply for an internship?",
        a: "Visit our Internship page, fill out the application form with your details, resume, and area of interest. Shortlisted candidates will be contacted within 3–5 business days for a screening call.",
      },
      {
        q: "Do you provide training courses separately?",
        a: "Yes! Visit training.mackystech.in for our dedicated training programs including AWS Cloud, Full Stack Web Development, and more. Courses include live classes, projects, and certification.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    color: "from-cyan-500 to-blue-600",
    faqs: [
      {
        q: "Do you provide post-launch support?",
        a: "Yes! All projects include 30 days of free support after delivery for bug fixes and minor adjustments. After that, we offer Annual Maintenance Contracts (AMC) at competitive rates.",
      },
      {
        q: "What does the AMC (Annual Maintenance Contract) include?",
        a: "Our AMC covers: bug fixes, security updates, server monitoring, backups, minor content updates, performance optimization, and priority email/phone support. Pricing starts at ₹4,999/year.",
      },
      {
        q: "How do I report a bug or issue with my project?",
        a: "You can report issues via WhatsApp, email at support@mackystech.in, or call +91 8235910315. For AMC clients, we maintain a dedicated support ticket system with guaranteed response times.",
      },
    ],
  },
];

export default function FAQ() {
  useSEO({
    title: "FAQ | Frequently Asked Questions | MackysTech IT Company Bhopal",
    description:
      "Find answers to common questions about MackysTech IT services, software development pricing, internship programs, payment structure, support and maintenance. Bhopal IT company.",
    canonical: "https://www.mackystech.in/faq",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqCategories.flatMap((cat) =>
        cat.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        }))
      ),
    },
  });

  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

  const currentFaqs = faqCategories.find((c) => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#060a12] text-white">

      {/* ── HERO ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-semibold mb-6">
            <HelpCircle className="w-3.5 h-3.5" /> Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Questions
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Everything you need to know about MackysTech services, pricing, internships,
            and support. Can't find your answer?{" "}
            <Link to="/contact" className="text-blue-400 hover:underline">
              Contact us directly.
            </Link>
          </p>
        </motion.div>
      </div>

      {/* ── CATEGORY TABS ────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {faqCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                setActiveCategory(cat.category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.category
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : "border border-white/15 text-white/60 hover:border-blue-400/50 hover:text-white"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* ── FAQ ACCORDION ────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {currentFaqs?.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-500/50 bg-[#0d1525]"
                      : "border-white/8 bg-[#0d1221] hover:border-blue-500/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-white pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isOpen ? "text-blue-400" : "text-gray-500"
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── STILL HAVE QUESTIONS ─────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#0d1525] to-[#111827] border border-blue-500/20 p-10 text-center">
          <MessageSquare className="w-10 h-10 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Our team is happy to help. Reach out via email, phone, or just fill the contact form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@mackystech.in"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition font-medium text-sm"
            >
              <Mail className="w-4 h-4" /> info@mackystech.in
            </a>
            <a
              href="tel:+918235910315"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition font-medium text-sm"
            >
              <Phone className="w-4 h-4" /> +91 8235910315
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition font-medium text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Contact Form →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
