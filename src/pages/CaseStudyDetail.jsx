import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useEffect } from "react";

export default function CaseStudyDetail() {
  const { id } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Rich case study data — 5 original + 8 new from BuildTechnology
  const caseStudiesData = {
    "1": {
      title: "High-Traffic E-commerce Marketplace",
      client: "Global Retail Inc.",
      industry: "Retail & E-commerce",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "Our client needed to scale their e-commerce platform to handle Black Friday level traffic year-round without downtime, while improving their overall mobile conversion rates.",
      challenge: "Their legacy monolithic architecture was slow, prone to crashing under heavy load, and provided a poor mobile checkout experience.",
      solution: "We migrated their infrastructure to a headless microservices architecture using React, Node.js, and AWS. We completely redesigned the mobile checkout flow for maximum frictionless conversion.",
      results: [
        "40% increase in mobile conversion rates.",
        "Zero downtime during peak traffic events.",
        "Page load speeds improved by 65%.",
        "Seamless integration with their existing ERP."
      ],
      technology: ["React", "Node.js", "AWS", "MongoDB", "Redis"]
    },
    "2": {
      title: "Real-time Driver Tracking Application",
      client: "Swift Logistics",
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A national logistics firm needed a reliable mobile application to track their fleet in real-time, even in areas with poor network connectivity.",
      challenge: "The existing tracking solution constantly lost signal, resulting in delayed updates and inaccurate ETAs for customers.",
      solution: "We developed a robust cross-platform mobile application using React Native and Firebase, featuring an offline-first architecture that locally caches GPS data and syncs automatically when the network is restored.",
      results: [
        "99.9% accurate location tracking.",
        "Offline sync saved over 500 hours of manual logging monthly.",
        "Driver satisfaction score increased by 80%.",
        "Customer ETA complaints reduced by 90%."
      ],
      technology: ["React Native", "Firebase", "Google Maps API", "SQLite"]
    },
    "3": {
      title: "B2B Analytics Dashboard",
      client: "FinServe Partners",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A financial services company needed a unified dashboard to visualize complex investment data for their B2B clients in a clean, digestible format.",
      challenge: "Data was scattered across multiple legacy databases, making it difficult to aggregate and display in real-time without severe performance bottlenecks.",
      solution: "We built a custom Next.js frontend paired with a highly optimized Python/Django backend. We utilized advanced data caching and WebSockets for real-time portfolio updates.",
      results: [
        "Real-time data visualization with sub-second latency.",
        "Client engagement on the portal increased by 150%.",
        "Automated reporting saved the analyst team 20 hours/week.",
        "Highly secure, enterprise-grade authentication implemented."
      ],
      technology: ["Next.js", "Tailwind CSS", "Python", "Django", "PostgreSQL"]
    },
    "4": {
      title: "Patient Workflow Automation",
      client: "HealthPlus Network",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A network of clinics struggled with immense administrative overhead related to patient intake, document sorting, and appointment scheduling.",
      challenge: "Manual data entry was leading to errors, long patient wait times, and staff burnout.",
      solution: "We implemented an AI-driven workflow automation system. Using Python and TensorFlow, the system automatically extracts data from intake forms and routes them to the correct department.",
      results: [
        "Reduced manual data entry by 85%.",
        "Patient wait times decreased by an average of 15 minutes.",
        "Zero data extraction errors after the initial training phase.",
        "HIPAA-compliant secure architecture."
      ],
      technology: ["Python", "TensorFlow", "React", "AWS HealthLake"]
    },
    "5": {
      title: "Enterprise ERP Modernization",
      client: "Apex Manufacturing",
      industry: "Corporate",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A large manufacturing corporation needed to overhaul their outdated ERP system to streamline workflows across HR, Finance, and Supply Chain departments.",
      challenge: "The old system was siloed, meaning departments couldn't easily share data, leading to costly delays in the manufacturing pipeline.",
      solution: "We built a modern, unified web-based ERP using Node.js and PostgreSQL. We designed custom modules for each department while ensuring a single source of truth for all corporate data.",
      results: [
        "Cross-department workflows became 300% faster.",
        "Supply chain bottlenecks were identified and resolved in real-time.",
        "Employee onboarding time reduced by half due to an intuitive UI.",
        "Significant reduction in IT maintenance costs."
      ],
      technology: ["Node.js", "Express", "PostgreSQL", "React", "Docker"]
    },
    "ecommerce": {
      title: "Multi-Vendor E-commerce Platform",
      client: "ShopBridge India",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "We built a full-scale multi-vendor e-commerce marketplace enabling hundreds of sellers to list, sell, and manage orders — all from a single admin-controlled platform.",
      challenge: "The client needed a scalable marketplace with real vendor onboarding, separate dashboards, commission management, and integrated payments — built from scratch in a tight timeline.",
      solution: "We designed and developed a complete multi-vendor marketplace with a customer app, vendor dashboard, admin panel, payment gateway integration, inventory management, delivery tracking, and coupon systems.",
      results: [
        "300+ vendors onboarded in the first quarter.",
        "Order processing time reduced by 60%.",
        "Integrated Razorpay & COD payment workflows.",
        "Mobile-responsive with PWA support."
      ],
      technology: ["React", "Node.js", "MongoDB", "Razorpay", "Firebase", "AWS S3"]
    },
    "food-delivery": {
      title: "Complete Food Delivery Platform",
      client: "QuickBite Technologies",
      industry: "Food & Restaurant",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "End-to-end food delivery ecosystem built for a restaurant chain — including a customer ordering app, restaurant management dashboard, kitchen display system, delivery partner app, and admin panel.",
      challenge: "Managing orders across multiple restaurant branches, coordinating delivery partners, and providing real-time tracking to customers — all without delays.",
      solution: "We built a complete ecosystem: Customer App (iOS/Android), Restaurant Dashboard, Kitchen Display System (KDS), Delivery Partner App, POS integration, and Admin Analytics Panel. Real-time order tracking powered by WebSockets.",
      results: [
        "Average order fulfillment time reduced to 28 minutes.",
        "3x increase in order volume handled without infrastructure issues.",
        "Real-time GPS tracking live for every delivery.",
        "90%+ restaurant partner satisfaction in first 6 months."
      ],
      technology: ["Flutter", "Node.js", "Socket.io", "MongoDB", "Google Maps API", "Firebase"]
    },
    "lms": {
      title: "Learning Management System (LMS)",
      client: "EduPath Academy",
      industry: "Education Technology",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A comprehensive LMS platform enabling institutes to deliver online courses, conduct live classes, manage student progress, process fees, and issue digital certificates.",
      challenge: "The institute was struggling with disorganized content delivery, manual fee collection, no student tracking system, and high dropout rates due to poor engagement.",
      solution: "We built a full LMS with student portals, teacher dashboards, live class integration, recorded lectures, quiz & assessment engine, automated fee management, attendance tracking, and digital certificate generation.",
      results: [
        "Course completion rate increased from 34% to 78%.",
        "Fee collection automated — zero manual errors.",
        "2,000+ students enrolled in first semester.",
        "Teacher workload reduced by 40% through automation."
      ],
      technology: ["React", "Node.js", "MongoDB", "Zoom SDK", "Razorpay", "AWS S3"]
    },
    "crm": {
      title: "Custom CRM for Sales Teams",
      client: "GrowthForce Solutions",
      industry: "Sales & Business Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A purpose-built CRM system enabling sales teams to manage leads, track follow-ups, run pipelines, assign tasks, and generate reports — all from a single dashboard.",
      challenge: "The team was using spreadsheets to track 500+ leads per month, leading to missed follow-ups, lost deals, and zero pipeline visibility for management.",
      solution: "We designed a custom CRM with lead capture from multiple sources, pipeline stages, WhatsApp follow-up automation, task assignment, call logging, reporting dashboards, and role-based access control.",
      results: [
        "Lead response time improved from 4 hours to under 20 minutes.",
        "Sales conversions improved by 35% in 3 months.",
        "Full pipeline visibility for management in real-time.",
        "WhatsApp automation saved 3 hours of manual follow-up daily."
      ],
      technology: ["React", "Node.js", "PostgreSQL", "WhatsApp Business API", "Twilio"]
    },
    "marketplace": {
      title: "Service Marketplace Platform",
      client: "HireLocal App",
      industry: "Marketplace & Services",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A two-sided marketplace connecting skilled service providers (plumbers, electricians, cleaners, carpenters) with customers who need home services — bookable on demand.",
      challenge: "Building trust between unknown service providers and customers, handling real-time availability, dynamic pricing, and ensuring quality through reviews.",
      solution: "We built a complete marketplace with provider profiles, real-time booking, GPS-based provider matching, escrow payments, review system, admin panel for dispute resolution, and a provider mobile app.",
      results: [
        "500+ service providers onboarded in 3 months.",
        "Average booking-to-service time: 45 minutes.",
        "4.6/5 average customer rating.",
        "Zero payment disputes due to escrow model."
      ],
      technology: ["React", "React Native", "Node.js", "Stripe", "Google Maps", "MongoDB"]
    },
    "automation": {
      title: "Business Process Automation System",
      client: "OperateX Corp",
      industry: "Business Automation",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "We automated 12 core business processes for a mid-sized company — from lead assignment and invoice generation to WhatsApp notifications and monthly reporting.",
      challenge: "Staff were spending 60% of their time on repetitive manual tasks — data entry, sending follow-up emails, generating invoices, and compiling reports by hand.",
      solution: "We mapped all processes, built automation workflows using custom APIs, integrated WhatsApp Business API, automated invoice generation via PDF triggers, and built a live reporting dashboard.",
      results: [
        "60% reduction in manual task hours per week.",
        "Invoice generation time: from 30 minutes to 30 seconds.",
        "WhatsApp follow-up open rate: 94%.",
        "Monthly reports auto-generated and emailed by midnight."
      ],
      technology: ["Node.js", "WhatsApp Business API", "Puppeteer", "PostgreSQL", "n8n", "React"]
    },
    "healthcare": {
      title: "Hospital Management System",
      client: "CarePoint Hospitals",
      industry: "Healthcare Technology",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A complete hospital management system covering OPD management, doctor appointments, patient records, lab management, pharmacy, billing, and admin analytics.",
      challenge: "Paper-based records, appointment confusion, billing errors, and lack of data visibility were creating operational chaos across multiple departments.",
      solution: "We developed a unified HMS with patient registration, OPD queue management, doctor scheduling, lab order tracking, pharmacy inventory, discharge summaries, billing & insurance management, and an analytics dashboard.",
      results: [
        "OPD processing time reduced by 55%.",
        "Billing accuracy reached 99.8%.",
        "Lab turnaround time improved by 40%.",
        "Data fully digitized — zero paper dependency."
      ],
      technology: ["React", "Node.js", "PostgreSQL", "Razorpay", "AWS", "HL7 FHIR"]
    },
    "cab-mobility": {
      title: "Cab & Mobility Platform",
      client: "RideSwift Technologies",
      industry: "Transportation & Mobility",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1600&h=800",
      overview: "A complete ride-hailing ecosystem with a passenger app, driver app, dispatcher dashboard, real-time tracking, surge pricing, and an analytics admin panel.",
      challenge: "Building real-time GPS matching, surge pricing logic, driver availability management, and a smooth booking experience — all within a competitive market.",
      solution: "We built a full cab platform: Passenger App (iOS/Android), Driver App with earnings tracker, Admin Dispatch Dashboard, real-time GPS with WebSockets, dynamic pricing engine, and payment integration.",
      results: [
        "Average driver match time: under 90 seconds.",
        "95% ride completion rate.",
        "Driver earnings transparency improved satisfaction by 70%.",
        "Processed 10,000+ rides in first 60 days."
      ],
      technology: ["Flutter", "Node.js", "Socket.io", "Google Maps Platform", "Razorpay", "Redis"]
    }
  };

  const project = caseStudiesData[id];

  useSEO({
    title: project ? `${project.title} | Case Study | MackysTech` : "Case Study Not Found | MackysTech",
    description: project ? project.overview : "Case study details",
    canonical: `https://www.mackystech.in/case-studies/${id}`
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center text-center p-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Case Study Not Found</h1>
        <Link to="/" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              {project.industry}
            </span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Client: {project.client}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
            {project.title}
          </h1>
          
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.section>

            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Results</h3>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
