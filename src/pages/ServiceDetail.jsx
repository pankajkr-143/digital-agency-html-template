import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import BookingForm from "../components/BookingForm";
import {
  Laptop,
  Megaphone,
  Cpu,
  Brain,
  Shield,
  TrendingUp,
  Wallet,
  Building2,
  Users,
  BookOpen,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  DollarSign,
  Activity,
  Layers,
  FileText
} from "lucide-react";

/* ================= LARGE DETAILED CUSTOM SVGS ================= */

function SoftwareDevArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <defs>
        <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#sphereGlow)" />
      {/* Grid base */}
      <path d="M 30,130 L 100,90 L 170,130 L 100,170 Z" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4,4" />
      <path d="M 50,110 L 100,70 L 150,110 L 100,150 Z" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      {/* Floating lines */}
      <motion.g animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
        <rect x="75" y="50" width="50" height="50" rx="10" fill="#0b1329" stroke="#22d3ee" strokeWidth="2" />
        <line x1="85" y1="65" x2="115" y2="65" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
        <line x1="85" y1="75" x2="105" y2="75" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        <line x1="85" y1="85" x2="115" y2="85" stroke="#22d3ee" strokeWidth="2" strokeDasharray="3,3" />
      </motion.g>
    </svg>
  );
}

function DigitalMarketingArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="70" fill="none" stroke="#ec4899" strokeWidth="1" strokeDasharray="4,8" />
      {/* Dashboard Graph */}
      <motion.g animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
        <rect x="50" y="60" width="100" height="80" rx="8" fill="#0b1329" stroke="#ec4899" strokeWidth="2" />
        <path d="M 60,120 L 80,95 L 100,105 L 120,80 L 140,90" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="120" cy="80" r="5" fill="#ec4899" />
      </motion.g>
    </svg>
  );
}

function AIArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="80" fill="none" stroke="#a855f7" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5,10" />
      <motion.g animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
        <circle cx="100" cy="100" r="30" fill="#0b1329" stroke="#a855f7" strokeWidth="2" />
        <circle cx="100" cy="100" r="10" fill="#3b82f6" />
      </motion.g>
    </svg>
  );
}

function RoboticsArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <path d="M 40,150 L 160,150" stroke="#f59e0b" strokeWidth="2" />
      <motion.g animate={{ rotate: [-5, 5, -5] }} style={{ transformOrigin: "100px 150px" }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
        <line x1="100" y1="150" x2="80" y2="90" stroke="#f59e0b" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="80" cy="90" r="6" fill="#030712" stroke="#fbbf24" strokeWidth="2" />
        <line x1="80" y1="90" x2="130" y2="50" stroke="#fbbf24" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="130" cy="50" r="5" fill="#f59e0b" />
      </motion.g>
    </svg>
  );
}

function CyberSecurityArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="75" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="6,12" />
      <motion.path
        d="M 100,50 C 122,50 135,58 135,58 C 135,95 125,125 100,140 C 75,125 65,95 65,58 C 65,58 78,50 100,50 Z"
        fill="#0b1329"
        stroke="#22d3ee"
        strokeWidth="3.5"
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <rect x="91" y="85" width="18" height="13" rx="2" fill="#fff" />
      <path d="M 94,85 V 80 C 94,76 97,74 100,74 C 103,74 106,76 106,80 V 85" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function StockMarketArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <line x1="30" y1="150" x2="170" y2="150" stroke="#374151" strokeWidth="2" />
      <line x1="30" y1="50" x2="170" y2="50" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />
      <motion.path
        d="M 40,130 L 70,110 L 100,120 L 130,80 L 160,50"
        fill="none"
        stroke="#10b981"
        strokeWidth="4.5"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2 }}
      />
      <circle cx="160" cy="50" r="6" fill="#10b981" />
    </svg>
  );
}

function FinanceArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <motion.g animate={{ rotateY: [0, 15, 0], y: [-5, 5, -5] }} style={{ transformOrigin: "100px 100px" }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
        <rect x="40" y="60" width="120" height="75" rx="10" fill="#0b1329" stroke="#3b82f6" strokeWidth="2.5" />
        <rect x="40" y="75" width="120" height="15" fill="#1e293b" />
        <rect x="55" y="100" width="20" height="15" rx="2" fill="#fbbf24" />
      </motion.g>
    </svg>
  );
}

function ConstructionArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <path d="M 30,150 L 170,150" stroke="#f59e0b" strokeWidth="2" />
      <motion.g animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
        <path d="M 100,50 L 60,80 L 60,140 L 140,140 L 140,80 Z" fill="#0b1329" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M 100,50 L 140,80 L 100,110 L 60,80 Z" fill="#fbbf24" opacity="0.3" />
      </motion.g>
    </svg>
  );
}

function SalesMarketingArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <path d="M 40,50 L 160,50 L 140,90 L 60,90 Z" fill="#0b1329" stroke="#3b82f6" strokeWidth="2" />
      <path d="M 60,95 L 140,95 L 120,135 L 80,135 Z" fill="#0b1329" stroke="#10b981" strokeWidth="2" />
      <motion.g animate={{ y: [-10, 5, -10] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
        <circle cx="150" cy="40" r="10" fill="#fb923c" />
      </motion.g>
    </svg>
  );
}

function EdTechArt() {
  return (
    <svg className="w-full max-w-[320px] aspect-square" viewBox="0 0 200 200" fill="none">
      <motion.g animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
        <path d="M 100,140 C 70,120 40,130 30,140 L 30,80 C 40,70 70,60 100,80 Z" fill="#0b1329" stroke="#818cf8" strokeWidth="2" />
        <path d="M 100,140 C 130,120 160,130 170,140 L 170,80 C 160,70 130,60 100,80 Z" fill="#0b1329" stroke="#818cf8" strokeWidth="2" />
      </motion.g>
      <motion.g animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
        <path d="M 100,30 L 150,45 L 100,60 L 50,45 Z" fill="#ec4899" stroke="#ec4899" strokeWidth="2" />
        <path d="M 75,53 L 75,68 C 75,75 125,75 125,68 L 125,53" fill="none" stroke="#ec4899" strokeWidth="2" />
      </motion.g>
    </svg>
  );
}

/* ================= 10 DEDICATED DATA SETS ================= */

const servicesData = {
  "software-development": {
    title: "Software Development",
    seoTitle: "Enterprise Software Development Services | Macky's Tech",
    seoDesc: "Build scalable, secure web, mobile, and custom enterprise software products with Macky's Tech. Custom ERP, SaaS dashboards, and cloud integrations.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    illustration: SoftwareDevArt,
    icon: Laptop,
    overview: "We architect next-generation enterprise software, cross-platform mobile apps, and robust API endpoints. Our products are built for speed, secured with military-grade standards, and hosted on dynamic cloud containers to scale automatically with your business volume.",
    solutions: [
      { name: "Website Development", desc: "Premium Next.js, React, and headless architectures optimized for SEO and conversion." },
      { name: "Custom Software", desc: "Full-stack tailored code targeting complex office automations and workflows." },
      { name: "Enterprise ERP & CRM", desc: "Automate accounting, HR, and sales channels under one secure portal dashboard." },
      { name: "SaaS Development", desc: "Build multi-tenant cloud systems with robust metering billing integrations." },
      { name: "Mobile Applications", desc: "Beautiful Flutter/React Native builds delivering flawless native experiences on iOS/Android." },
      { name: "API & Cloud Integrations", desc: "Configure microservices, robust REST/GraphQL endpoints, and AWS cloud deploys." }
    ],
    techs: ["React", "Next.js", "Node.js", "Flutter", "Go", "Python", "PostgreSQL", "AWS", "Docker"],
    industries: ["FinTech", "EdTech", "Healthcare", "E-commerce", "Logistics", "Real Estate"],
    pricing: [
      { tier: "Startup", price: "Contact Us", features: ["1 Custom Web/App Build", "Basic database setup", "Standard API Integration", "3 Months Support"] },
      { tier: "Growth", price: "Contact Us", features: ["Web & Mobile Multi-Platform", "Advanced dashboard logs", "CRM/ERP Core Modules", "6 Months Support"] },
      { tier: "Enterprise", price: "Contact Us", features: ["Dedicated DevOps team", "High-frequency scaling", "Full SLA & Uptime Guarantee", "Ongoing 24/7 support"] }
    ],
    faqs: [
      { q: "What tech stack do you recommend for SaaS?", a: "We generally suggest Next.js/React for visual interfaces, Node.js or Go for backend APIs, and PostgreSQL or MongoDB for databases, deployed on AWS or GCP." },
      { q: "Do you support cross-platform apps?", a: "Yes, we specialize in Flutter and React Native, which write a single codebase that runs on both iOS and Android." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    seoTitle: "SEO & Digital Performance Marketing | Macky's Tech",
    seoDesc: "Drive conversions and organic sales with professional SEO, branding campaigns, Paid Ads management, and growth automation structures.",
    gradient: "from-pink-500 via-rose-500 to-red-600",
    illustration: DigitalMarketingArt,
    icon: Megaphone,
    overview: "Turn digital impressions into actual paying customers. We design data-focused lead campaigns, high-impact brand symbols, and technical SEO setups that push your pages to the top of Google indices.",
    solutions: [
      { name: "Technical SEO", desc: "Core Web Vitals tuning, page speed fixes, and automated index crawling." },
      { name: "Performance Paid Ads", desc: "Highly targeted lead campaigns on Meta, Google PPC, and LinkedIn." },
      { name: "Branding & Graphics", desc: "Design systems, logos, packaging, and custom visual templates." },
      { name: "Lead Automation", desc: "Nurturing funnels that capture email/SMS/WhatsApp details and trigger automatically." }
    ],
    techs: ["Google Ads", "Meta Business Manager", "SEMrush", "Google Analytics", "Zapier", "Figma"],
    industries: ["B2B SaaS", "Retail", "E-commerce", "Education", "Legal Services", "Finance"],
    pricing: [
      { tier: "Local SEO Setup", price: "Contact Us", features: ["Local keyword mappings", "Google My Business setup", "On-page metadata fixes", "Monthly keyword tracking"] },
      { tier: "Growth Channels", price: "Contact Us", features: ["Meta & Google Ads design", "Ad copy copywriting", "Lead pipeline automation", "Weekly conversions logs"] },
      { tier: "Omni-Channel Lead", price: "Contact Us", features: ["Complete digital campaign management", "Brand identity guides", "Monthly SEO content generation", "Dedicated account rep"] }
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "On average, technical and on-page SEO modifications take between 3 to 6 months to display consistent ranking boosts on Google." },
      { q: "Do ad budgets include your setup fees?", a: "No, advertising spend is paid directly to platforms like Google/Meta, while our pricing covers setup and tracking." }
    ]
  },
  "robotics": {
    title: "Robotics",
    seoTitle: "Robotics Prototyping & Industrial Automation | Macky's Tech",
    seoDesc: "Custom embedded firmware, IoT microcontrollers, sensor arrays, mechanical automation, and engineering project designs.",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    illustration: RoboticsArt,
    icon: Cpu,
    overview: "We build hardware prototypes, custom printed circuit board (PCB) designs, and smart microchip sensors. Our engineering teams deploy embedded code to enable real-time telemetry, robotics control, and warehouse automations.",
    solutions: [
      { name: "Embedded Firmware", desc: "C/C++ programming for STM32, Arduino, ESP32, and Raspberry Pi." },
      { name: "Sensory IoT Nodes", desc: "Configure sensor arrays mapping humidity, heat, tilt, and GPS data over Wi-Fi." },
      { name: "Industrial Automation", desc: "Motor controllers, telemetry hubs, and robotic control scripts." },
      { name: "Research Prototyping", desc: "Dedicated guidance and design packages for academic research and IoT products." }
    ],
    techs: ["C/C++", "Python", "ROS (Robot OS)", "Raspberry Pi", "Arduino", "Altium (PCB)", "Keil"],
    industries: ["Manufacturing", "Agriculture", "Logistics", "Smart Home", "Defense", "Academia"],
    pricing: [
      { tier: "Prototype Design", price: "Contact Us", features: ["Circuit diagram design", "Firmware code blueprint", "Sensor testing sandbox", "3 Hardware reviews"] },
      { tier: "Custom IoT Deploy", price: "Contact Us", features: ["Multi-node sensor mapping", "Custom PCB schematic", "Cloud web dashboard integration", "1 Month hardware support"] },
      { tier: "Industrial Automation", price: "Contact Us", features: ["PLC integration setup", "ROS robotics coordinates mapping", "High-frequency telemetry log", "On-site/remote testing support"] }
    ],
    faqs: [
      { q: "Can you assist with custom PCB manufacturing?", a: "Yes, we design the schematics and files (Gerber files) and work with standard fab partners to get them printed." },
      { q: "What communication protocols do you use?", a: "We work with MQTT, HTTP Rest, Modbus, I2C, SPI, and BLE depending on the project constraint." }
    ]
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    seoTitle: "Generative AI Agents & Machine Learning | Macky's Tech",
    seoDesc: "Deploy AI Agents, custom LLM solutions, Claude & Gemini integrations, RAG database pipelines, and smart predictive analytics engines.",
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    illustration: AIArt,
    icon: Brain,
    overview: "Integrate cognitive technologies directly into your business channels. From LLM prompts and conversational bots to machine learning databases, we help you automate workflows, process document files, and forecast trends.",
    solutions: [
      { name: "AI Agent Automation", desc: "Autonomous bots that execute actions based on triggers." },
      { name: "LLM & API Integrations", desc: "Deploy OpenAI, Gemini, and Claude connections to read or parse data." },
      { name: "RAG Databases", desc: "Vector indexing (Pinecone, pgvector) to feed custom company data to AI agents." },
      { name: "Predictive Analytics", desc: "Build regression and pattern engines to estimate user growth and inventory demands." }
    ],
    techs: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API", "Gemini API", "pgvector"],
    industries: ["SaaS", "Finance", "Education", "Healthcare", "Legal", "Operations Support"],
    pricing: [
      { tier: "AI Integration", price: "Contact Us", features: ["OpenAI/Claude API setup", "Prompt engineering tuning", "Customer support chatbot UI", "1 Month monitoring"] },
      { tier: "Custom RAG Setup", price: "Contact Us", features: ["Vector Database sync", "Internal doc search agent", "Fine-tuned response guards", "User query panel"] },
      { tier: "Enterprise AI Agents", price: "Contact Us", features: ["Multi-agent system pipelines", "Custom model training support", "Scale optimization tuning", "Premium SLA & 24/7 audits"] }
    ],
    faqs: [
      { q: "What is RAG (Retrieval-Augmented Generation)?", a: "RAG indexes your custom business files (PDFs, docs) into a vector database, allowing the AI to query this private repository to output highly accurate, custom answers." },
      { q: "Is our data secure with AI integrations?", a: "Yes, we implement strict private hosting containers or enterprise API scopes that guarantee your data is never used for training public models." }
    ]
  },
  "cyber-security": {
    title: "Cyber Security",
    seoTitle: "Security Auditing, VAPT & Ethical Hacking | Macky's Tech",
    seoDesc: "Protect your database, web systems, and cloud infrastructure with pen testing, code audits, threat logging, and ISO compliance reviews.",
    gradient: "from-cyan-500 via-blue-500 to-emerald-500",
    illustration: CyberSecurityArt,
    icon: Shield,
    overview: "Audit and shield your software. We run active penetration testing (VAPT), verify code architectures, set up cloud system firewalls, and prepare your business for SOC2 and ISO compliance milestones.",
    solutions: [
      { name: "VAPT Testing", desc: "Detailed web, API, and cloud vulnerability scans with threat reports." },
      { name: "Secure Code Audits", desc: "Audit repositories line-by-line to prevent injections, leaks, and authentication gaps." },
      { name: "SOC/SIEM Setup", desc: "Configure active logs, threat monitors, and security access controls." },
      { name: "ISO & Compliance Assurance", desc: "Gap analysis, security guides, and auditing preparation." }
    ],
    techs: ["Kali Linux", "OWASP ZAP", "Wireshark", "Burp Suite", "Nmap", "Metasploit"],
    industries: ["FinTech", "SaaS", "Government", "E-commerce", "Enterprise IT", "Logistics"],
    pricing: [
      { tier: "Web Security Check", price: "Contact Us", features: ["OWASP Top 10 web scan", "Vulnerability report card", "Remediation suggestions", "Standard SSL audit"] },
      { tier: "Full VAPT Assessment", price: "Contact Us", features: ["API & Database penetrations", "System code scan", "Detailed threat log", "Re-testing patch review"] },
      { tier: "Compliance Shield", price: "Contact Us", features: ["SOC2/ISO auditing path setup", "IAM security policy designs", "SIEM threat monitoring log", "24/7 on-call response team"] }
    ],
    faqs: [
      { q: "What is the difference between vulnerability scanning and pen testing?", a: "Vulnerability scanning is automated software checking for known bugs, whereas penetration testing is manual, ethical hacking attempting to bypass security systems." },
      { q: "How often should we perform security audits?", a: "We recommend yearly audits, or after any major release containing significant database/API structural changes." }
    ]
  },
  "stock-market": {
    title: "Stock Marketing",
    seoTitle: "Algorithmic Trading & Candlestick Dashboards | Macky's Tech",
    seoDesc: "Build custom trading algorithms, backtesting systems, live chart feeds, signal engines, and investment trackers.",
    gradient: "from-emerald-400 via-teal-500 to-green-600",
    illustration: StockMarketArt,
    icon: TrendingUp,
    overview: "We design high-frequency pricing dashboards, strategy backtesting suites, and algorithmic execution setups. Connect with leading brokers via APIs to automate trading indicators and portfolio risks.",
    solutions: [
      { name: "Trading Dashboards", desc: "Real-time charting, candlestick components, and transaction grids." },
      { name: "Algorithmic Strategy", desc: "Code indicator strategies (EMA crossover, RSI) that auto-fire order scripts." },
      { name: "Backtesting Suites", desc: "Test trading formulas on historical market indices to evaluate risks." },
      { name: "Market Sentiment Tracking", desc: "AI scraper parsing news feeds and community posts to evaluate trends." }
    ],
    techs: ["Python", "PineScript", "QuantConnect", "Websockets API", "Pandas", "TA-Lib"],
    industries: ["Prop Firms", "Brokers", "Retail Traders", "Asset Managers", "Crypto Firms"],
    pricing: [
      { tier: "Custom Indicator", price: "Contact Us", features: ["1 Custom PineScript strategy", "Basic alerts configuration", "Broker API integration map", "2 Strategy review runs"] },
      { tier: "Algo Trading System", price: "Contact Us", features: ["Auto order execution bot", "Historical backtest database", "Multi-timeframe data parser", "1 Month operational support"] },
      { tier: "Trading Dashboard", price: "Contact Us", features: ["High-speed chart UI components", "Websocket live price ticker", "Risk control management panel", "SLA support channel"] }
    ],
    faqs: [
      { q: "Do you provide financial trading advice?", a: "No, we strictly develop software systems, execution APIs, and tools. Mappings are set using your custom rules." },
      { q: "Which broker APIs do you support?", a: "We work with leading API brokers like Zerodha Kite, AngelOne, Interactive Brokers, Binance, and MetaTrader." }
    ]
  },
  "finance": {
    title: "Finance & FinTech",
    seoTitle: "FinTech App Development & Stripe Integrations | Macky's Tech",
    seoDesc: "Build custom loan processing portals, expense dashboards, banking platforms, ledger billing, and payment checkouts.",
    gradient: "from-blue-500 via-indigo-600 to-purple-600",
    illustration: FinanceArt,
    icon: Wallet,
    overview: "We engineer secure payment checkouts, loan validation portals, double-entry accounting files, and ledger systems. Secure data endpoints with strict auditing and custom Stripe/Plaid API setups.",
    solutions: [
      { name: "FinTech Portals", desc: "Client loan dashboards, invoice tracking systems, and wealth portfolios." },
      { name: "Payment Integrations", desc: "Integrate Stripe, Plaid, UPI, and multi-currency payout gateways." },
      { name: "Double-Entry Ledgers", desc: "Ensure bookkeeping is secure, audited, and integrates with bank files." },
      { name: "GST & Payroll Scripts", desc: "Calculate automated taxes, invoices, and employee salaries." }
    ],
    techs: ["React", "PostgreSQL", "Node.js", "Stripe API", "Plaid API", "OAuth 2.0", "Redis"],
    industries: ["Neobanks", "Lending Firms", "SaaS Billing", "Investment Trusts", "E-commerce"],
    pricing: [
      { tier: "Payment Flow", price: "Contact Us", features: ["Stripe Checkout setup", "Subscription webhook handlers", "Receipt email automation", "Security audit scan"] },
      { tier: "Custom Ledger System", price: "Contact Us", features: ["Client ledger databases", "UPI/Bank feed integrations", "Custom billing invoices", "1 Month dev support"] },
      { tier: "FinTech Platform", price: "Contact Us", features: ["Full banking/loan software portal", "Plaid KYC/Identity checker", "High-security audit logs", "Dedicated SLA team support"] }
    ],
    faqs: [
      { q: "Is PCI-DSS compliance required?", a: "If you store credit card numbers, yes. We suggest tokenized APIs like Stripe, which keep card details off your servers, reducing compliance overhead." },
      { q: "Can you map banking feeds?", a: "Yes, using Plaid or Yodlee integrations, we pull secure account statements directly." }
    ]
  },
  "building-construction": {
    title: "Building Construction",
    seoTitle: "Construction ERP & Architectural Software | Macky's Tech",
    seoDesc: "Build custom construction CRM, material trackers, blueprint managers, Gantt charts, and BIM 3D visual portals.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    illustration: ConstructionArt,
    icon: Building2,
    overview: "We construct custom enterprise resource planning (ERP) portals for architectural sites. Track steel/cement inventories, view 3D model files (BIM) inside the browser, and coordinate task timelines.",
    solutions: [
      { name: "Construction CRM", desc: "Track client bookings, custom installment bills, and paperwork files." },
      { name: "Material Inventory", desc: "Real-time logging of site resources, cement sacks, bricks, and worker hours." },
      { name: "Gantt Timeline Mappers", desc: "Coordinate site timelines, milestone payouts, and supervisor logs." },
      { name: "3D BIM integrations", desc: "Render blueprint models (Three.js) inside secure client portals." }
    ],
    techs: ["React", "Three.js", "Node.js", "PostgreSQL", "Amazon S3", "AutoCAD API"],
    industries: ["Builders", "Civil Consultants", "Architects", "Real Estate Developers", "Site Inspectors"],
    pricing: [
      { tier: "Site Manager App", price: "Contact Us", features: ["Worker attendance logger", "Material inventory register", "Client billing invoices", "3 Months hosting setup"] },
      { tier: "Construction ERP", price: "Contact Us", features: ["Timeline Gantt track view", "Site supervisor photo logs", "Multiple projects dashboard", "1 Month developer support"] },
      { tier: "Architectural Portal", price: "Contact Us", features: ["Three.js 3D BIM model viewer", "AutoCAD file upload handler", "High-scale server arrays", "Enterprise SLA support"] }
    ],
    faqs: [
      { q: "Can supervisor uploads be mapped offline?", a: "Yes, our mobile apps support caching logs locally and syncing photos when back online." },
      { q: "Do you integrate with AutoCAD?", a: "We work with Autodesk Forge APIs to load drawings directly into browser windows." }
    ]
  },
  "sales-marketing": {
    title: "Sales & Marketing",
    seoTitle: "Sales Funnel CRM & Workflow Automation | Macky's Tech",
    seoDesc: "Deploy custom sales CRM, pipeline trackers, email automated drip sequences, lead scoring, and automated quotations.",
    gradient: "from-violet-500 via-purple-600 to-pink-500",
    illustration: SalesMarketingArt,
    icon: Users,
    overview: "Optimize your sales funnel. We build CRM software, lead ranking algorithms, invoice automation triggers, and high-performance landing pages designed to maximize deal velocity.",
    solutions: [
      { name: "Custom CRM Software", desc: "Build tailored lead databases, pipeline columns, and client profiles." },
      { name: "Lead Scoring Engines", desc: "Algorithmic sorting prioritizing high-value sales deals based on triggers." },
      { name: "Marketing Sequences", desc: "Auto-trigger emails/SMS/WhatsApp followups when a lead moves states." },
      { name: "Quotation Systems", desc: "Select components and generate downloadable PDF quotes in 1 click." }
    ],
    techs: ["ActiveCampaign", "Salesforce API", "HubSpot API", "Zapier", "React", "Node.js", "PostgreSQL"],
    industries: ["SaaS Firms", "Agencies", "Real Estate", "Consultancies", "Wholesalers"],
    pricing: [
      { tier: "Sales Funnel Lander", price: "Contact Us", features: ["1 Landing page layout", "Zapier lead forwarding", "Auto PDF quote generator", "Mobile-optimized review"] },
      { tier: "Custom Lead Tracker", price: "Contact Us", features: ["Tailored pipeline columns", "SMS/Email notification nodes", "Customer profile cards", "Support setup phase"] },
      { tier: "Sales CRM Hub", price: "Contact Us", features: ["Full custom CRM package", "Lead scoring automation", "Salesforce/HubSpot sync", "Ongoing SLA support"] }
    ],
    faqs: [
      { q: "Can we migrate data from Hubspot/Salesforce?", a: "Yes, we write custom data scripts using REST APIs to import/export leads, histories, and notes." },
      { q: "Is WhatsApp integration possible?", a: "We configure the Meta WhatsApp Business API to trigger automated alerts." }
    ]
  },
  "edtech": {
    title: "EdTech & LMS",
    seoTitle: "LMS Development & School College ERP | Macky's Tech",
    seoDesc: "Build custom Learning Management Systems (LMS), online classes, exam portals, school ERP, and course marketplaces.",
    gradient: "from-indigo-400 via-purple-500 to-pink-600",
    illustration: EdTechArt,
    icon: BookOpen,
    overview: "Revolutionize digital learning. We design high-scale learning management systems (LMS), online classroom web modules, student trackers, billing setups, and custom quiz modules.",
    solutions: [
      { name: "LMS portals", desc: "Video lecture drawers, quiz cards, progress bars, and certificate templates." },
      { name: "School & College ERP", desc: "Manage student database logs, fee calendars, and automated alerts." },
      { name: "Exam & Quiz Portals", desc: "Configure randomized question banks and auto-grading modules." },
      { name: "Course Marketplace", desc: "Create platforms like Udemy with payment gateways and tutor dashboards." }
    ],
    techs: ["React", "PostgreSQL", "Amazon S3 (Videos)", "WebRTC (Live)", "Stripe API", "Node.js"],
    industries: ["Schools", "Colleges", "Coaching Centers", "SaaS Training", "Corporate HR Teams"],
    pricing: [
      { tier: "Basic LMS Setup", price: "Contact Us", features: ["Course video upload drawer", "Student registration portal", "Stripe payment checkouts", "Standard support log"] },
      { tier: "Institutional ERP", price: "Contact Us", features: ["Student & parent login logs", "Fee collection pipelines", "Attendance tracking grids", "1 Month developer support"] },
      { tier: "Online Exam Portal", price: "Contact Us", features: ["Anti-cheat video monitoring", "Auto-grade result engines", "Question bank databases", "Dedicated SLA setup"] }
    ],
    faqs: [
      { q: "Where are the course videos hosted?", a: "We suggestions streaming video hosts like Amazon S3, Vimeo, or Cloudflare Stream, integrated securely to prevent copy downloads." },
      { q: "Can we trigger PDF certificates?", a: "Yes, we write canvas-rendering scripts to print personalized, secure student certificates." }
    ]
  }
};

/* ================= COMPONENT IMPLEMENTATION ================= */

export default function ServiceDetail({ serviceId: propServiceId }) {
  const params = useParams();
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState(null);

  // Determine service ID from react-router URL or props
  let serviceId = propServiceId || params.serviceId;
  
  // fallback for top-level routes matching page path
  if (!serviceId) {
    const path = location.pathname.replace("/", "");
    // handling stock-market and sales-marketing path formatting differences
    if (path === "stock-market") serviceId = "stock-market";
    else if (path === "sales-marketing") serviceId = "sales-marketing";
    else serviceId = path;
  }

  // default to software-development if not matched
  const currentService = servicesData[serviceId] || servicesData["software-development"];

  // Generate dynamic keywords based on technologies and target industries
  const dynamicKeywords = [
    currentService.title,
    "Macky's Tech",
    "IT Company Bhopal",
    "Tech agency India",
    "Bhopal software development",
    ...(currentService.techs || []),
    ...(currentService.industries || [])
  ].join(", ");

  useSEO({
    title: currentService.seoTitle,
    description: currentService.seoDesc,
    canonical: `https://www.mackystech.in/${serviceId}`,
    keywords: dynamicKeywords,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": currentService.title,
      "description": currentService.overview,
      "provider": {
        "@type": "LocalBusiness",
        "name": "MackysTech",
        "url": "https://www.mackystech.in"
      }
    }
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const ArtComponent = currentService.illustration;

  // Filter out the current service to display 3 related services at bottom
  const relatedServices = Object.keys(servicesData)
    .filter((key) => key !== serviceId)
    .slice(0, 3)
    .map((key) => ({
      id: key,
      ...servicesData[key]
    }));

  return (
    <main className="bg-[#030712] text-white min-h-screen relative overflow-hidden font-sans">
      {/* Glow Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[150px]" />
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 space-y-24 sm:space-y-36">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Ecosystem
          </Link>
        </div>

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Dedicated Service Suite
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-white">
              Enterprise <br />
              <span className={`bg-gradient-to-r ${currentService.gradient} bg-clip-text text-transparent font-black`}>
                {currentService.title}
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {currentService.overview}
            </p>

            {/* Micro Call actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#booking"
                className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/35 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                Schedule Free Consultation
              </a>
              <a
                href="https://wa.me/918235910315" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-slate-300 border border-white/10 hover:border-cyan-500/30 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl flex justify-center items-center w-full max-w-[340px] lg:max-w-none aspect-square">
              <div className="absolute inset-0 bg-radial-gradient from-cyan-500/5 to-transparent pointer-events-none" />
              <ArtComponent isHovered={true} />
            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS LIST ================= */}
        <section className="space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Capabilities & Solutions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore the full scope of features we configure and engineer to drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentService.solutions.map((sol, index) => (
              <div
                key={index}
                className="bg-slate-900/30 border border-white/5 hover:border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:bg-slate-900/50 transition-all duration-300 group shadow-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{sol.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TECH STACK & INDUSTRIES ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          
          {/* Tech Stack */}
          <div className="space-y-6 bg-slate-900/20 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Technology Stack
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              We leverage top-tier, modern frameworks, tools, and languages to ensure speed, scalability, and security.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {currentService.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-slate-950/60 border border-white/10 text-slate-300 text-xs sm:text-sm font-semibold hover:border-cyan-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="space-y-6 bg-slate-900/20 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-400" />
              Industries We Serve
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Helping businesses scale and adapt across specialized domains with compliance and expertise.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {currentService.industries.map((ind, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-950/40 border border-white/5 text-slate-300 text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="truncate">{ind}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ================= METHODOLOGY/PROCESS ================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Our Development Process</h2>
            <p className="text-slate-400 text-sm sm:text-base">We follow a rigorous, agile methodology to construct your engineering platforms from research to release.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            {["Discovery & Scope", "UI/UX Prototype", "Agile Coding", "QA & Launch"].map((step, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 relative z-10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base">{step}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {idx === 0 && "We map business objectives, analyze user demographics, and draft detailed software requirements."}
                  {idx === 1 && "We sketch user journeys and build interactive high-fidelity prototypes in Figma to align designs."}
                  {idx === 2 && "We build using component design patterns, CI/CD integrations, and clear microservices APIs."}
                  {idx === 3 && "We audit endpoints, compile automated tests, load-test limits, and publish securely to production."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Flexible Service Models</h2>
            <p className="text-slate-400 text-sm sm:text-base">Custom engagement tiers designed to fit startups and growing corporate enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentService.pricing.map((price, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  idx === 1 
                    ? "bg-slate-900/80 border-cyan-500/40" 
                    : "bg-slate-900/30 border-white/5"
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{price.tier}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">{price.price}</span>
                  </div>
                  <ul className="space-y-3.5 mb-8">
                    {price.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#booking"
                  className={`w-full py-3 rounded-full text-xs font-bold text-center transition-all duration-300 cursor-pointer block ${
                    idx === 1
                      ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                  }`}
                >
                  Discuss Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ ACCORDION ================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm sm:text-base">Quick answers to basic enquiries regarding setup, pipelines, and timelines.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {currentService.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white hover:text-cyan-300 transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= INTERACTIVE BOOKING PORTAL ================= */}
        <section id="booking" className="space-y-10 scroll-mt-24">
          <BookingForm />
        </section>

        {/* ================= RELATED SERVICES ================= */}
        <section className="space-y-10 sm:space-y-12">
          <h3 className="text-xl sm:text-2xl font-black text-white text-center sm:text-left">Related Solutions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const Icon = rel.icon;
              return (
                <Link
                  key={rel.id}
                  to={rel.path}
                  className="bg-slate-900/40 border border-white/5 hover:border-cyan-500/20 rounded-2xl p-5 flex items-center justify-between group transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors truncate max-w-[150px] sm:max-w-none">
                      {rel.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-cyan-300 transition-all" />
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
