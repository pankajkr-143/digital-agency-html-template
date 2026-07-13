import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle,
  User,
  Mail,
  Send
} from "lucide-react";

export default function BookingForm({ embedded = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "software-development",
    specificService: "",
    date: "",
    timeSlot: "10:00 AM",
    meetingMode: "google-meet",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const categories = [
    { id: "software-development", label: "Software Development" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "artificial-intelligence", label: "Artificial Intelligence" },
    { id: "robotics", label: "Robotics" },
    { id: "cyber-security", label: "Cyber Security" },
    { id: "stock-market", label: "Stock Marketing" },
    { id: "finance", label: "Finance & FinTech" },
    { id: "building-construction", label: "Building Construction" },
    { id: "sales-marketing", label: "Sales & Marketing" },
    { id: "edtech", label: "EdTech & LMS" }
  ];

  const times = [
    "09:30 AM", "10:30 AM", "11:30 AM", 
    "01:30 PM", "02:30 PM", "03:30 PM", 
    "04:30 PM", "05:30 PM"
  ];

  const modes = [
    { id: "google-meet", label: "Google Meet", icon: Video },
    { id: "zoom", label: "Zoom Call", icon: Video },
    { id: "whatsapp", label: "WhatsApp Chat/Call", icon: MessageSquare },
    { id: "phone-call", label: "Direct Phone Call", icon: Phone },
    { id: "office-visit", label: "In-Office Visit", icon: MapPin }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSending(true);

    try {
      // 1. Submit to Web3Forms to send email to company inbox
      const web3FormData = new FormData();
      web3FormData.append("access_key", "da091ed8-42eb-4541-ade0-28e5cf1c5168");
      web3FormData.append("subject", `New Consultation Booking Request: ${formData.name}`);
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("category", categories.find(c => c.id === formData.serviceCategory)?.label || formData.serviceCategory);
      web3FormData.append("specific_service", formData.specificService || "N/A");
      web3FormData.append("date", formData.date);
      web3FormData.append("time_slot", formData.timeSlot);
      web3FormData.append("meeting_mode", modes.find(m => m.id === formData.meetingMode)?.label || formData.meetingMode);
      web3FormData.append("message", formData.message || "No additional message.");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      // 2. Persist to localStorage for mock database functionality (linked to Admin Panel)
      const newBooking = {
        id: "BK-" + Date.now().toString().slice(-6),
        ...formData,
        status: "pending",
        timestamp: new Date().toISOString()
      };

      const existingBookings = JSON.parse(localStorage.getItem("mackystech_bookings") || "[]");
      localStorage.setItem("mackystech_bookings", JSON.stringify([newBooking, ...existingBookings]));

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send email notification, but booking was saved to admin panel dashboard.");
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      // Fallback local save if offline
      const newBooking = {
        id: "BK-" + Date.now().toString().slice(-6),
        ...formData,
        status: "pending",
        timestamp: new Date().toISOString()
      };
      const existingBookings = JSON.parse(localStorage.getItem("mackystech_bookings") || "[]");
      localStorage.setItem("mackystech_bookings", JSON.stringify([newBooking, ...existingBookings]));
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl max-w-xl mx-auto"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <CheckCircle className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white">Consultation Requested!</h3>
          <p className="text-slate-400 text-sm">
            Thank you, <span className="text-white font-bold">{formData.name}</span>. Your booking request has been logged successfully. Our executive will reach out to you shortly.
          </p>
        </div>

        <div className="bg-slate-950/60 rounded-2xl p-4 border border-white/5 text-left text-xs sm:text-sm space-y-2 text-slate-300">
          <div><strong className="text-white">Category:</strong> {categories.find(c => c.id === formData.serviceCategory)?.label}</div>
          <div><strong className="text-white">Scheduled:</strong> {formData.date} at {formData.timeSlot}</div>
          <div><strong className="text-white">Platform:</strong> {modes.find(m => m.id === formData.meetingMode)?.label}</div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              serviceCategory: "software-development",
              specificService: "",
              date: "",
              timeSlot: "10:00 AM",
              meetingMode: "google-meet",
              message: ""
            });
          }}
          className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition"
        >
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <div className={embedded ? "" : "max-w-3xl mx-auto"}>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl relative"
      >
        {/* Subtle glow background */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-cyan-500/5 blur-2xl pointer-events-none" />

        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Book a Demo Session
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">Schedule Free Consultation</h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Get an expert technology evaluation and a customized roadmap for your enterprise project.
          </p>
        </div>

        {/* 1. Personal Information */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">1. Contact Info</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 2. Service Category */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">2. Category Selection</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2">Category *</label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2">Specific Service / Requirement</label>
              <input
                type="text"
                placeholder="e.g. Next.js SaaS, Local SEO, PCB design"
                value={formData.specificService}
                onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 3. Date & Time Selection */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">3. Select Date & Time</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2">Meeting Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2">Preferred Time Slot *</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                >
                  {times.map((t) => (
                    <option key={t} value={t} className="bg-slate-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Platform Mode */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">4. Platform Mode</h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {modes.map((m) => {
              const Icon = m.icon;
              const isSelected = formData.meetingMode === m.id;
              return (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setFormData({ ...formData, meetingMode: m.id })}
                  className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 scale-[1.03]"
                      : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-bold leading-tight">{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Additional Message */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">5. Brief Requirements</h4>
          <textarea
            placeholder="Tell us briefly about your business and project objectives..."
            rows="3"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-950/60 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>

        {/* Action Button */}
        <div className="pt-2 text-center sm:text-left">
          <button
            type="submit"
            disabled={isSending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending Request..." : "Submit Inquiry Request"}
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
