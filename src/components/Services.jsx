import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
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
  Sparkles,
  ArrowRight,
  BookOpen
} from "lucide-react";

/* ================= CUSTOM ANIMATED SVG ILLUSTRATIONS ================= */

function SoftwareDevIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="softDevGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Grid Floor */}
      <path d="M 20,115 L 100,75 L 180,115 L 100,150 Z" fill="url(#softDevGrad)" stroke="#22d3ee" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.6" />
      
      {/* Screen / Code Plane */}
      <motion.g
        animate={isHovered ? { y: [-3, 3, -3] } : { y: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path d="M 50,65 L 100,40 L 150,65 L 100,90 Z" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M 50,65 L 50,85 L 100,110 L 150,85 L 150,65" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.4" />
      </motion.g>

      {/* Cloud Floating */}
      <motion.g
        animate={isHovered ? { y: [-6, 6, -6], scale: [1, 1.05, 1] } : { y: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        <path d="M 80,38 C 80,28 92,23 100,28 C 108,23 120,28 120,38 C 128,38 128,48 120,50 L 80,50 C 72,50 72,38 80,38 Z" fill="url(#cloudGrad)" stroke="#a78bfa" strokeWidth="1.2" />
      </motion.g>

      {/* Flying Data/Code Lines */}
      <motion.path
        d="M 65,80 L 85,70 M 75,85 L 95,75 M 85,90 L 105,80"
        stroke="#22d3ee"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={isHovered ? { strokeDashoffset: [20, 0] } : { strokeDashoffset: [10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        style={{ strokeDasharray: "4, 6" }}
      />
    </svg>
  );
}

function DigitalMarketingIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="marketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* Dashboard frame */}
      <rect x="35" y="35" width="130" height="85" rx="8" fill="none" stroke="#ec4899" strokeWidth="1.5" />
      <line x1="35" y1="52" x2="165" y2="52" stroke="#ec4899" strokeWidth="1" opacity="0.4" />
      
      {/* Dynamic Graph Bars */}
      <motion.rect
        x="50" y="85" width="12" height="25" rx="2" fill="url(#marketGrad)"
        animate={isHovered ? { height: [25, 45, 25], y: [0, -20, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.rect
        x="70" y="70" width="12" height="40" rx="2" fill="url(#marketGrad)"
        animate={isHovered ? { height: [40, 55, 40], y: [0, -15, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.rect
        x="90" y="60" width="12" height="50" rx="2" fill="url(#marketGrad)"
        animate={isHovered ? { height: [50, 30, 50], y: [0, 20, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.rect
        x="110" y="75" width="12" height="35" rx="2" fill="url(#marketGrad)"
        animate={isHovered ? { height: [35, 50, 35], y: [0, -15, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.rect
        x="130" y="65" width="12" height="45" rx="2" fill="url(#marketGrad)"
        animate={isHovered ? { height: [45, 35, 45], y: [0, 10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Upward Marketing Curve */}
      <motion.path
        d="M 50,105 Q 80,75 110,65 T 145,55"
        fill="none"
        stroke="#67e8f9"
        strokeWidth="3.5"
        strokeLinecap="round"
        animate={isHovered ? { pathLength: [0, 1] } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Floating social bubbles */}
      <motion.circle
        cx="155" cy="40" r="8" fill="#ec4899" opacity="0.8"
        animate={isHovered ? { scale: [1, 1.25, 1], y: [-3, 3, -3] } : {}}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
    </svg>
  );
}

function RoboticsIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roboGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Base Grid */}
      <rect x="65" y="115" width="70" height="12" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
      <circle cx="100" cy="115" r="7" fill="url(#roboGrad)" stroke="#f59e0b" strokeWidth="1" />
      
      {/* Main Arm Rig */}
      <motion.g
        animate={isHovered ? { rotate: [-8, 8, -8] } : { rotate: [-3, 3, -3] }}
        style={{ transformOrigin: "100px 115px" }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        {/* Arm Segment 1 */}
        <line x1="100" y1="115" x2="85" y2="75" stroke="#f59e0b" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="85" cy="75" r="5.5" fill="#030712" stroke="#f59e0b" strokeWidth="2.5" />
        
        {/* Arm Segment 2 */}
        <motion.g
          animate={isHovered ? { rotate: [12, -12, 12] } : { rotate: [4, -4, 4] }}
          style={{ transformOrigin: "85px 75px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <line x1="85" y1="75" x2="125" y2="45" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
          <circle cx="125" cy="45" r="4.5" fill="#030712" stroke="#fbbf24" strokeWidth="2" />
          
          {/* Hand/Claw */}
          <path d="M 125,45 L 132,52 M 125,45 L 130,37" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Laser point or glowing energy ball */}
          <motion.circle
            cx="138" cy="40" r="7" fill="url(#roboGrad)"
            animate={isHovered ? { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] } : {}}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}

function AIIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* Pulse Rings */}
      <motion.circle
        cx="100" cy="75" r="42" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="4,8"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
      <motion.circle
        cx="100" cy="75" r="32" fill="none" stroke="#3b82f6" strokeWidth="0.75" strokeDasharray="8,6"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />
      
      {/* Central brain silhouette / core */}
      <motion.circle
        cx="100" cy="75" r="24" fill="url(#aiPulseGrad)" stroke="#c084fc" strokeWidth="1"
        animate={isHovered ? { scale: [1, 1.12, 1], opacity: [0.7, 0.95, 0.7] } : { scale: [1, 1.04, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      
      {/* Synapses connections and nodes */}
      <g opacity="0.85">
        <line x1="100" y1="75" x2="65" y2="45" stroke="#3b82f6" strokeWidth="1" />
        <line x1="100" y1="75" x2="135" y2="45" stroke="#3b82f6" strokeWidth="1" />
        <line x1="100" y1="75" x2="55" y2="75" stroke="#a855f7" strokeWidth="1.2" />
        <line x1="100" y1="75" x2="145" y2="75" stroke="#a855f7" strokeWidth="1.2" />
        <line x1="100" y1="75" x2="65" y2="105" stroke="#3b82f6" strokeWidth="1" />
        <line x1="100" y1="75" x2="135" y2="105" stroke="#3b82f6" strokeWidth="1" />

        {/* Nodes */}
        <motion.circle cx="65" cy="45" r="4.5" fill="#3b82f6" animate={isHovered ? { scale: [1, 1.4, 1] } : {}} transition={{ repeat: Infinity, duration: 2, delay: 0.1 }} />
        <motion.circle cx="135" cy="45" r="4.5" fill="#3b82f6" animate={isHovered ? { scale: [1, 1.4, 1] } : {}} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} />
        <motion.circle cx="55" cy="75" r="5.5" fill="#a855f7" animate={isHovered ? { scale: [1, 1.5, 1] } : {}} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
        <motion.circle cx="145" cy="75" r="5.5" fill="#a855f7" animate={isHovered ? { scale: [1, 1.5, 1] } : {}} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
        <motion.circle cx="65" cy="105" r="4.5" fill="#3b82f6" animate={isHovered ? { scale: [1, 1.4, 1] } : {}} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }} />
        <motion.circle cx="135" cy="105" r="4.5" fill="#3b82f6" animate={isHovered ? { scale: [1, 1.4, 1] } : {}} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} />
      </g>
    </svg>
  );
}

function CyberSecurityIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* Hologram Scanner */}
      <motion.circle
        cx="100" cy="75" r="46" fill="none" stroke="#06b6d4" strokeWidth="0.75" strokeDasharray="5,10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.circle
        cx="100" cy="75" r="38" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="20,15"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      
      {/* 3D Shield */}
      <motion.path
        d="M 100,42 C 118,42 128,48 128,48 C 128,75 122,96 100,108 C 78,96 72,75 72,48 C 72,48 82,42 100,42 Z"
        fill="url(#shieldFill)"
        stroke="#22d3ee"
        strokeWidth="2"
        animate={isHovered ? { y: [-3, 3, -3] } : {}}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      
      {/* Inner Glowing Lock */}
      <motion.g
        animate={isHovered ? { scale: [1, 1.08, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ transformOrigin: "100px 75px" }}
      >
        <path d="M 93,72 V 67 C 93,63 96,60 100,60 C 104,60 107,63 107,67 V 72" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="90" y="72" width="20" height="14" rx="2" fill="#fff" />
        <circle cx="100" cy="79" r="2.2" fill="#000" />
      </motion.g>
    </svg>
  );
}

function StockMarketingIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chart Grid Lines */}
      <line x1="30" y1="115" x2="170" y2="115" stroke="#374151" strokeWidth="1" />
      <line x1="30" y1="90" x2="170" y2="90" stroke="#1f2937" strokeWidth="0.75" />
      <line x1="30" y1="65" x2="170" y2="65" stroke="#1f2937" strokeWidth="0.75" />
      <line x1="30" y1="40" x2="170" y2="40" stroke="#1f2937" strokeWidth="0.75" />
      
      {/* Red Bearish Candlestick */}
      <line x1="50" y1="72" x2="50" y2="105" stroke="#ef4444" strokeWidth="1.5" />
      <rect x="46" y="78" width="8" height="18" fill="#ef4444" rx="1.5" />
      
      {/* Green Bullish Candlestick */}
      <line x1="75" y1="58" x2="75" y2="95" stroke="#10b981" strokeWidth="1.5" />
      <rect x="71" y="63" width="8" height="22" fill="#10b981" rx="1.5" />
      
      {/* Red Bearish Candlestick */}
      <line x1="100" y1="52" x2="100" y2="85" stroke="#ef4444" strokeWidth="1.5" />
      <rect x="96" y="58" width="8" height="15" fill="#ef4444" rx="1.5" />
      
      {/* Green Bullish Candlestick */}
      <line x1="125" y1="38" x2="125" y2="78" stroke="#10b981" strokeWidth="1.5" />
      <rect x="121" y="43" width="8" height="28" fill="#10b981" rx="1.5" />
      
      {/* Green Bullish Candlestick */}
      <line x1="150" y1="22" x2="150" y2="58" stroke="#10b981" strokeWidth="1.5" />
      <rect x="146" y="27" width="8" height="23" fill="#10b981" rx="1.5" />
      
      {/* Trendline tracker */}
      <motion.path
        d="M 50,87 L 75,74 L 100,65 L 125,57 L 150,38"
        fill="none"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        animate={isHovered ? { pathLength: [0, 1] } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

function FinanceIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="finCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* 3D Flying Credit Card */}
      <motion.g
        animate={isHovered ? { rotateY: [0, 18, 0], y: [-5, 5, -5] } : { y: [-1, 1, -1] }}
        style={{ transformOrigin: "100px 75px" }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
      >
        <rect x="42" y="42" width="116" height="66" rx="9" fill="url(#finCardGrad)" stroke="#3b82f6" strokeWidth="1.5" />
        
        {/* Ribbon Stripe */}
        <rect x="42" y="55" width="116" height="11" fill="#1e293b" opacity="0.85" />
        
        {/* Glowing microchip */}
        <rect x="58" y="75" width="15" height="11" rx="2" fill="#fbbf24" opacity="0.9" />
        
        {/* Visa circles design */}
        <circle cx="126" cy="82" r="9" fill="#ec4899" opacity="0.5" />
        <circle cx="137" cy="82" r="9" fill="#fbbf24" opacity="0.5" />
      </motion.g>

      {/* Floating coin nodes */}
      <motion.circle
        cx="38" cy="38" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1"
        animate={isHovered ? { y: [-6, 6, -6], scale: [1, 1.15, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2.2 }}
      />
      <motion.circle
        cx="162" cy="112" r="9" fill="#fbbf24" stroke="#d97706" strokeWidth="1"
        animate={isHovered ? { y: [6, -6, 6], scale: [1, 1.15, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2.8 }}
      />
    </svg>
  );
}

function BuildingConstructionIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="constFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Blueprint Grid Floor */}
      <path d="M 25,115 L 100,78 L 175,115 L 100,152 Z" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4" />
      
      {/* Isometric Building Structure */}
      <motion.g
        animate={isHovered ? { y: [-4, 4, -4] } : {}}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        {/* Left Side Wall */}
        <path d="M 100,38 L 68,54 L 68,106 L 100,90 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
        {/* Right Side Wall */}
        <path d="M 100,38 L 132,54 L 132,106 L 100,90 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
        {/* Top Ceiling Area */}
        <path d="M 100,38 L 68,54 L 100,70 L 132,54 Z" fill="url(#constFill)" stroke="#f59e0b" strokeWidth="1.5" opacity="0.65" />
        
        {/* Grid Scaffold Divisions */}
        <line x1="84" y1="46" x2="84" y2="98" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
        <line x1="116" y1="46" x2="116" y2="98" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
      </motion.g>
      
      {/* Construction Crane Line */}
      <motion.path
        d="M 175,25 L 135,25 L 135,46"
        stroke="#ef4444"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        animate={isHovered ? { strokeDashoffset: [20, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </svg>
  );
}

function SalesMarketingIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="salesGradA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="salesGradB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* Funnel Segment 1 */}
      <path d="M 45,40 L 155,40 L 138,62 L 62,62 Z" fill="url(#salesGradA)" stroke="#3b82f6" strokeWidth="1" />
      
      {/* Funnel Segment 2 */}
      <path d="M 66,67 L 134,67 L 120,89 L 80,89 Z" fill="url(#salesGradB)" stroke="#10b981" strokeWidth="1" />
      
      {/* Funnel Segment 3 */}
      <path d="M 83,94 L 117,94 L 107,112 L 93,112 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
      
      {/* 3D Rocket takeoff inside Funnel */}
      <motion.g
        animate={isHovered ? { y: [-6, 3, -6], x: [1.5, -1.5, 1.5] } : { y: [-1.5, 1.5, -1.5] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        style={{ transform: "rotate(40deg)", transformOrigin: "142px 48px" }}
      >
        <path d="M 142,28 L 147,43 L 137,43 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1" />
        <rect x="139" y="43" width="6" height="14" rx="1.2" fill="#ef4444" />
        <motion.path
          d="M 140,57 L 142,67 L 144,57 Z"
          fill="#fb923c"
          animate={isHovered ? { scaleY: [1, 1.7, 1] } : {}}
          transition={{ repeat: Infinity, duration: 0.2 }}
          style={{ transformOrigin: "142px 57px" }}
        />
      </motion.g>
    </svg>
  );
}

function EdTechIllustration({ isHovered }) {
  return (
    <svg className="w-full h-full max-h-[75px] min-[400px]:max-h-[90px] sm:max-h-[140px]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="edTechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* Open Book wireframe base */}
      <motion.g
        animate={isHovered ? { y: [-3, 3, -3] } : {}}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {/* Book Left page */}
        <path d="M 100,110 C 80,100 50,105 40,115 L 40,65 C 50,55 80,50 100,60 Z" fill="url(#edTechGrad)" stroke="#818cf8" strokeWidth="1.5" />
        {/* Book Right page */}
        <path d="M 100,110 C 120,100 150,105 160,115 L 160,65 C 150,55 120,50 100,60 Z" fill="url(#edTechGrad)" stroke="#818cf8" strokeWidth="1.5" />
      </motion.g>

      {/* Graduation Cap floating above */}
      <motion.g
        animate={isHovered ? { y: [-6, 6, -6], rotate: [-2, 2, -2] } : { y: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformOrigin: "100px 40px" }}
      >
        {/* Cap Diamond */}
        <path d="M 100,20 L 140,32 L 100,44 L 60,32 Z" fill="#ec4899" stroke="#ec4899" strokeWidth="1.5" />
        {/* Cap base skull cap */}
        <path d="M 78,37 L 78,48 C 78,54 122,54 122,48 L 122,37" fill="none" stroke="#ec4899" strokeWidth="1.5" />
        {/* Cap tassel */}
        <path d="M 100,32 L 148,42 L 148,55" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="148" cy="55" r="2" fill="#fbbf24" />
      </motion.g>
    </svg>
  );
}

/* ================= METADATA FOR 10 CATEGORIES ================= */

const categories = [
  {
    title: "Software Development",
    desc: "Custom Web, Mobile & Enterprise Solutions",
    path: "/software-development",
    icon: Laptop,
    illustration: SoftwareDevIllustration,
    shadowColor: "rgba(34, 211, 238, 0.15)"
  },
  {
    title: "Digital Marketing",
    desc: "SEO, Branding, Paid Ads & Lead Generation",
    path: "/digital-marketing",
    icon: Megaphone,
    illustration: DigitalMarketingIllustration,
    shadowColor: "rgba(236, 72, 153, 0.15)"
  },
  {
    title: "Robotics (Project)",
    desc: "Automation & Embedded Robotics Projects",
    path: "/robotics",
    icon: Cpu,
    illustration: RoboticsIllustration,
    shadowColor: "rgba(245, 158, 11, 0.15)"
  },
  {
    title: "Artificial Intelligence (Project)",
    desc: "Machine Learning, AI Automation & Smart Systems",
    path: "/artificial-intelligence",
    icon: Brain,
    illustration: AIIllustration,
    shadowColor: "rgba(168, 85, 247, 0.15)"
  },
  {
    title: "Cyber Security",
    desc: "Security Audits, Pen Testing & Protection",
    path: "/cyber-security",
    icon: Shield,
    illustration: CyberSecurityIllustration,
    shadowColor: "rgba(6, 182, 212, 0.15)"
  },
  {
    title: "Stock Marketing",
    desc: "Market Analysis & Trading Solutions",
    path: "/stock-market",
    icon: TrendingUp,
    illustration: StockMarketingIllustration,
    shadowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    title: "Finance",
    desc: "Financial Management & FinTech Solutions",
    path: "/finance",
    icon: Wallet,
    illustration: FinanceIllustration,
    shadowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    title: "Building Construction",
    desc: "Construction Planning & Infrastructure Projects",
    path: "/building-construction",
    icon: Building2,
    illustration: BuildingConstructionIllustration,
    shadowColor: "rgba(245, 158, 11, 0.15)"
  },
  {
    title: "Sales & Marketing",
    desc: "Sales Automation & Business Growth",
    path: "/sales-marketing",
    icon: Users,
    illustration: SalesMarketingIllustration,
    shadowColor: "rgba(139, 92, 246, 0.15)"
  },
  {
    title: "EdTech",
    desc: "LMS, School ERP & Course Marketplaces",
    path: "/edtech",
    icon: BookOpen,
    illustration: EdTechIllustration,
    shadowColor: "rgba(129, 140, 248, 0.15)"
  }
];

/* ================= 3D INTERACTIVE CARD COMPONENT ================= */

function Card({ card, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth transitions
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 15 });

  // Tilt transforms (limit tilt to max 8 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const IconComponent = card.icon;
  const IllustrationComponent = card.illustration;

  return (
    <Link
      to={card.path}
      className="p-[1px] rounded-xl sm:rounded-3xl bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500/40 hover:via-blue-500/30 hover:to-purple-500/40 transition-colors duration-500 cursor-pointer block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative overflow-hidden h-full rounded-[11px] sm:rounded-[23px] bg-slate-950/80 backdrop-blur-xl p-3 sm:p-7 flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        {/* Glow spotlight background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, ${card.shadowColor}, transparent 80%)`,
          }}
        />

        {/* Floating grid backgrounds */}
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-b from-white/5 to-transparent rounded-bl-full pointer-events-none" />

        {/* Large Illustration */}
        <div className="relative z-10 w-full flex justify-center mb-3 sm:mb-6 overflow-hidden rounded-lg sm:rounded-2xl bg-slate-900/40 p-2 sm:p-4 border border-white/5 group-hover:border-white/10 transition-all duration-300">
          <motion.div
            animate={isHovered ? { y: -4 } : { y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-full"
          >
            <IllustrationComponent isHovered={isHovered} />
          </motion.div>
        </div>

        {/* Footer info: Icon + Title + Arrow */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/5 group-hover:bg-cyan-500/10 border border-white/10 group-hover:border-cyan-500/20 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 shrink-0">
              <motion.div
                animate={isHovered ? { rotate: 12, scale: 1.1 } : { rotate: 0, scale: 1 }}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </div>
            <h3 className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300 truncate">
              {card.title}
            </h3>
          </div>
          
          <p className="text-slate-400 text-[10px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2">
            {card.desc}
          </p>

          <div className="flex items-center gap-1 sm:gap-1.5 text-cyan-400 group-hover:text-cyan-300 text-[9px] sm:text-xs font-semibold uppercase tracking-wider transition-colors duration-300">
            Explore Page
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ================= MAIN SERVICES COMPONENT ================= */

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="expertise"
      className="relative min-h-screen bg-[#030712] py-20 lg:py-32 overflow-hidden flex items-center"
    >
      {/* Dynamic Animated Blobs Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[160px]"
        />
        {/* Fine Star Dust Grid */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT SIDE (STICKY) ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              {/* Subtle Glowing Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Technology Ecosystem
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-black text-white leading-tight">
                Building Tomorrow <br /> With
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold tracking-tight">
                  Macky's Tech
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                We deliver innovative digital solutions across multiple industries including Software Development, Artificial Intelligence, Robotics, Cyber Security, Finance, Construction and Digital Marketing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#expertise"
                className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300 group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-300 border border-white/10 hover:border-cyan-500/30 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                View Projects
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-full" />

            {/* Small Animated Statistics */}
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-1 p-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Projects
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-1 p-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Techs
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-1 p-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Domains
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-1 p-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Satisfaction
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (RESPONSIVE GRID WITH 10 CATEGORIES) ================= */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 min-[480px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              {categories.map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
