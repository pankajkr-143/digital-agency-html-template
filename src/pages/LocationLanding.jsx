import { useParams, Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { 
  MapPin, Phone, Mail, Clock, Shield, Check, 
  ArrowRight, Code, Smartphone, Cloud, Globe, HelpCircle 
} from "lucide-react";
import { motion } from "framer-motion";

// Localized coordinates and details for targeting cities
const cityDetails = {
  bhopal: {
    name: "Bhopal",
    state: "Madhya Pradesh",
    coords: { lat: "23.2599", lng: "77.4126" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117320.08182963167!2d77.31885408643806!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f7fd68f31%3A0x3e5e57d10c67770e!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 8235910315",
    address: "44C, Indrapuri Sector C, Bhopal, MP 462022",
  },
  indore: {
    name: "Indore",
    state: "Madhya Pradesh",
    coords: { lat: "22.7196", lng: "75.8577" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55660851893!2d75.78201258674483!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4d0c3b%3A0x7a0ee502c22b9c4c!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 8235910315",
    address: "Scheme 54, Vijay Nagar, Indore, MP 452010",
  },
  jabalpur: {
    name: "Jabalpur",
    state: "Madhya Pradesh",
    coords: { lat: "23.1815", lng: "79.9864" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117392.2031124409!2d79.89201508643806!3d23.181467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b110a1122a7f%3A0x6479b1d7d248df92!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 8235910315",
    address: "Civil Lines, Jabalpur, MP 482001",
  },
  gwalior: {
    name: "Gwalior",
    state: "Madhya Pradesh",
    coords: { lat: "26.2183", lng: "78.1828" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114522.68412803362!2d78.11201508643806!3d26.218267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6d57ad0d297%3A0x4a2b97c276a604!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 8235910315",
    address: "City Center, Gwalior, MP 474011",
  },
  pune: {
    name: "Pune",
    state: "Maharashtra",
    coords: { lat: "18.5204", lng: "73.8567" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03445831966!2d73.78685408643806!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828a43bf9dcc2596!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 8235910315",
    address: "Kharadi IT Park, Pune, MH 411014",
  },
};

const defaultCity = {
  name: "Bhopal",
  state: "Madhya Pradesh",
  coords: { lat: "23.2599", lng: "77.4126" },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117320.08182963167!2d77.31885408643806!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f7fd68f31%3A0x3e5e57d10c67770e!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  phone: "+91 8235910315",
  address: "44C, Indrapuri Sector C, Bhopal, MP 462022",
};

export default function LocationLanding() {
  const { city } = useParams();
  const cityKey = city ? city.toLowerCase() : "bhopal";
  const activeCity = cityDetails[cityKey] || {
    ...defaultCity,
    name: city ? city.charAt(0).toUpperCase() + city.slice(1) : "Bhopal",
  };

  const titleCity = activeCity.name;
  const canonicalUrl = `https://www.mackystech.in/software-company-in-${activeCity.name.toLowerCase()}`;

  useSEO({
    title: `Software Development Company in ${titleCity} | Web & App Development | MackysTech`,
    description: `Looking for a reliable software development company in ${titleCity}? MackysTech offers high-performance website development, mobile apps, cloud computing, AI, and IT solutions in ${titleCity}, India.`,
    canonical: canonicalUrl,
    keywords: `software company in ${titleCity}, software development company ${titleCity}, web developers in ${titleCity}, app development ${titleCity}, IT company ${titleCity}, MackysTech ${titleCity}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${canonicalUrl}#localbusiness`,
      "name": `MackysTech ${titleCity}`,
      "image": "https://www.mackystech.in/assets/logo.jpeg",
      "url": canonicalUrl,
      "telephone": activeCity.phone,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": activeCity.address,
        "addressLocality": titleCity,
        "addressRegion": activeCity.state,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": activeCity.coords.lat,
        "longitude": activeCity.coords.lng
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": [
        { "@type": "City", "name": titleCity },
        { "@type": "State", "name": activeCity.state },
        { "@type": "Country", "name": "India" }
      ]
    }
  });

  return (
    <main className="min-h-screen bg-[#060a12] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5" /> Serving Businesses in {titleCity}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Software Development Company in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              {titleCity}
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We provide next-generation IT solutions, mobile application development, and web systems engineered to scale your business operations in {titleCity}.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-full border border-white/20 hover:border-blue-400 text-white/80 hover:text-white font-semibold transition-all"
            >
              Our IT Services
            </Link>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">IT Solutions We Provide in {titleCity}</h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">High-performance digital products built using modern programming ecosystems.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Code, title: "Web Application Dev", desc: "Build secure, SEO-optimized, and lightning-fast web systems with React, Next.js, and Node.js." },
            { icon: Smartphone, title: "Mobile Application Dev", desc: "Develop high-performing native iOS and Android apps using React Native and Flutter." },
            { icon: Cloud, title: "Cloud & DevOps Solutions", desc: "Migrate your servers to AWS or GCP with automated pipelines, load balancers, and full security." },
            { icon: Globe, title: "Enterprise Systems", desc: "Custom CRM and ERP systems designed to integrate your sales, inventory, and operations." }
          ].map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[#0d1221] border border-white/5 hover:border-blue-500/20 transition group">
                <div className="p-3 rounded-xl bg-blue-500/10 w-fit mb-5 text-blue-400 group-hover:bg-blue-500/20 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Map & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Contact Office Info</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Get in touch with MackysTech in {titleCity}. We provide local client support, onsite consulting workshops, and dedicated remote tech resources for custom software requirements.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Local Address</h4>
                <p className="text-sm text-gray-400 mt-0.5">{activeCity.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone Contact</h4>
                <p className="text-sm text-gray-400 mt-0.5">{activeCity.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-sm text-gray-400 mt-0.5">info@mackystech.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-sm text-gray-400 mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
          <iframe 
            src={activeCity.mapEmbed}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`MackysTech Location Map in ${titleCity}`}
          ></iframe>
        </div>
      </section>

      {/* Local FAQ Block */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-blue-400" /> Local FAQs
          </h2>
        </div>

        <div className="space-y-6">
          {[
            { q: `Does MackysTech offer face-to-face consulting in ${titleCity}?`, a: `Yes! For enterprise client accounts and full-scale product developments in ${titleCity}, we can arrange onsite requirement workshops and technical consultation meetings.` },
            { q: `What is the delivery timeline for software projects in ${titleCity}?`, a: `Timelines depend on details: simple websites take 1–2 weeks, customized e-commerce stores take 3-4 weeks, and bespoke SaaS platforms take 2-3 months. We follow strict sprint deadlines with weekly progress reviews.` },
            { q: `How do I request a custom quotation?`, a: `You can reach out to us at info@mackystech.in, call us at +91 8235910315, or fill out the form on our main contact page to receive a free detailed project proposal within 24 hours.` }
          ].map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0d1221] border border-white/5">
              <h4 className="font-semibold text-lg text-white mb-2">{faq.q}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
