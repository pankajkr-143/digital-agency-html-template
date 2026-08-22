import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-gray-400 border-t border-white/5 pt-20 overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* LEFT COL: Brand & Contact (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link to="/" className="mb-2 -mt-6 block">
              <img
                src="/assets/logo23.png"
                alt="MackysTech Logo"
                className="h-20 md:h-24 w-auto object-contain mix-blend-screen hover:scale-110 transition-transform duration-300 origin-left"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 mb-8 max-w-sm">
              We build scalable, secure and performance-driven digital solutions designed to elevate modern businesses.
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-green-500" /> Bhopal, Madhya Pradesh, India
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-green-500" /> info@mackystech.in
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-green-500" /> +91 8235910315
              </p>
            </div>
          </div>

          {/* COL 2: Solutions & Pillars (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Growth Pillars & Solutions</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/get-customers" className="hover:text-green-400 transition-colors">Get Customers / Leads</Link></li>
              <li><Link to="/build-technology" className="hover:text-green-400 transition-colors">Build Technology Solutions</Link></li>
              <li><Link to="/scale-business" className="hover:text-green-400 transition-colors">Scale Your Business</Link></li>
              <li><Link to="/solutions" className="hover:text-green-400 transition-colors">All Solutions Catalog</Link></li>
              <li><Link to="/industries" className="hover:text-green-400 transition-colors">Industry Solutions</Link></li>
              <li><Link to="/packages" className="hover:text-green-400 transition-colors">Growth Packages</Link></li>
            </ul>
          </div>

          {/* COL 3: Company & Work (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Company</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/jobs" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* COL 4: Resources & Knowledge (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Resources</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Blog & Insights</Link></li>
              <li><Link to="/documentation" className="hover:text-purple-400 transition-colors">Documentation</Link></li>
              <li><Link to="/tutorials" className="hover:text-purple-400 transition-colors">Tutorials</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400 transition-colors">Help Center (FAQ)</Link></li>
              <li><Link to="/community" className="hover:text-purple-400 transition-colors">Community Forum</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Macky's Tech. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/mackystech" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all shadow-[0_0_0_transparent] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com/mackystech" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all shadow-[0_0_0_transparent] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/mackystech" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-all shadow-[0_0_0_transparent] hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com/company/mackystech" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all shadow-[0_0_0_transparent] hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
