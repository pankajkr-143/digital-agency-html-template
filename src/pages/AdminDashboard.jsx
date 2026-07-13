import { useState, useEffect } from "react";
import { useSEO } from "../hooks/useSEO";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  MessageSquare,
  Search,
  Trash2,
  CheckCircle,
  Clock3,
  Layers,
  TrendingUp,
  Users,
  Settings,
  X,
  FileText,
  Filter,
  RefreshCw,
  Sliders,
  DollarSign
} from "lucide-react";

export default function AdminDashboard() {
  useSEO({
    title: "Admin Panel | Macky's Tech Management",
    description: "Manage lead inquiries, consultations, schedule date bookings, and analytics logs.",
    canonical: "https://www.mackystech.in/admin"
  });

  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Load bookings from localStorage
  const loadBookings = () => {
    const list = JSON.parse(localStorage.getItem("mackystech_bookings") || "[]");
    
    // Seed default sample bookings if localStorage is empty, so it doesn't look blank!
    if (list.length === 0) {
      const sampleBookings = [
        {
          id: "BK-8841",
          name: "Rahul Verma",
          email: "rahul@bharattech.in",
          phone: "9876543210",
          serviceCategory: "software-development",
          specificService: "ERP customization",
          date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
          timeSlot: "11:30 AM",
          meetingMode: "google-meet",
          message: "We need a custom dashboard and inventory tracking system.",
          status: "pending",
          timestamp: new Date().toISOString()
        },
        {
          id: "BK-4291",
          name: "Diya Roy",
          email: "diya@glamretail.com",
          phone: "9812345678",
          serviceCategory: "digital-marketing",
          specificService: "Instagram Lead Campaigns",
          date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
          timeSlot: "03:30 PM",
          meetingMode: "zoom",
          message: "Looking for paid lead optimization for our e-commerce site.",
          status: "approved",
          timestamp: new Date(Date.now() - 3600000 * 4).toISOString()
        },
        {
          id: "BK-1934",
          name: "Vikram Malhotra",
          email: "v.malhotra@propbuild.com",
          phone: "7000123456",
          serviceCategory: "building-construction",
          specificService: "Construction ERP Portal",
          date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
          timeSlot: "01:30 PM",
          meetingMode: "office-visit",
          message: "Discussing inventory dashboard specs in Bhopal office.",
          status: "completed",
          timestamp: new Date(Date.now() - 86400000 * 2).toISOString()
        }
      ];
      localStorage.setItem("mackystech_bookings", JSON.stringify(sampleBookings));
      setBookings(sampleBookings);
    } else {
      setBookings(list);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = bookings.map((b) => {
      if (b.id === id) {
        return { ...b, status: newStatus };
      }
      return b;
    });
    localStorage.setItem("mackystech_bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    const updated = bookings.filter((b) => b.id !== id);
    localStorage.setItem("mackystech_bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  const handleClearAll = () => {
    if (!window.confirm("WARNING: Are you sure you want to delete ALL booking logs?")) return;
    localStorage.setItem("mackystech_bookings", "[]");
    setBookings([]);
  };

  // Calculations for stats dashboard
  const totalInquiries = bookings.length;
  const pendingCount = bookings.filter(b => b.status === "pending").length;
  const approvedCount = bookings.filter(b => b.status === "approved").length;
  const completedCount = bookings.filter(b => b.status === "completed").length;

  const categoriesMap = {
    "software-development": "Software Development",
    "digital-marketing": "Digital Marketing",
    "robotics": "Robotics",
    "artificial-intelligence": "Artificial Intelligence",
    "cyber-security": "Cyber Security",
    "stock-market": "Stock Marketing",
    "finance": "Finance & FinTech",
    "building-construction": "Building Construction",
    "sales-marketing": "Sales & Marketing",
    "edtech": "EdTech & LMS"
  };

  // Filtered lists
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.id.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = filterCategory === "all" || b.serviceCategory === filterCategory;
    const matchesStatus = filterStatus === "all" || b.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <main className="bg-[#030712] text-white min-h-screen relative overflow-hidden font-sans pt-24 pb-20 px-6">
      {/* Background glow spots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              Macky's Tech System
            </div>
            <h1 className="text-3xl font-black text-white leading-tight">Admin Management Panel</h1>
            <p className="text-slate-400 text-sm">
              Overview lead conversions, consultation dates, and platform bookings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadBookings}
              className="p-3 rounded-xl bg-slate-900 border border-white/10 hover:bg-slate-800 transition flex items-center gap-2 text-xs font-bold"
              title="Refresh Logs"
            >
              <RefreshCw className="w-4 h-4 text-cyan-400" />
              Sync Data
            </button>
            
            <button
              onClick={handleClearAll}
              disabled={bookings.length === 0}
              className="p-3 rounded-xl bg-red-950/20 border border-red-500/30 hover:bg-red-500/10 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2 text-xs font-bold text-red-400"
            >
              <Trash2 className="w-4 h-4" />
              Clear Logs
            </button>
          </div>
        </div>

        {/* ================= METRICS CARDS ROW ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total Leads */}
          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 text-slate-400 mb-3 text-xs font-semibold uppercase tracking-wider">
              <Users className="w-4 h-4 text-cyan-400" />
              Total Inquiries
            </div>
            <div className="text-3xl font-black text-white">{totalInquiries}</div>
            <div className="text-[10px] text-cyan-400 font-bold mt-1.5 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Real-time logs
            </div>
          </div>

          {/* Card 2: Pending Reviews */}
          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 text-slate-400 mb-3 text-xs font-semibold uppercase tracking-wider">
              <Clock3 className="w-4 h-4 text-amber-400" />
              Pending Review
            </div>
            <div className="text-3xl font-black text-white">{pendingCount}</div>
            <div className="text-[10px] text-amber-400 font-bold mt-1.5">Awaiting callback</div>
          </div>

          {/* Card 3: Approved Sessions */}
          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-12 h-12 bg-purple-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 text-slate-400 mb-3 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-purple-400" />
              Approved Dates
            </div>
            <div className="text-3xl font-black text-white">{approvedCount}</div>
            <div className="text-[10px] text-purple-400 font-bold mt-1.5">Confirmed calls</div>
          </div>

          {/* Card 4: Completion Rate */}
          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 text-slate-400 mb-3 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Successful Deals
            </div>
            <div className="text-3xl font-black text-white">
              {totalInquiries ? Math.round(((completedCount) / totalInquiries) * 100) : 0}%
            </div>
            <div className="text-[10px] text-emerald-400 font-bold mt-1.5">Closure percentage</div>
          </div>
        </div>

        {/* ================= SEARCH & INTERACTIVE FILTERS ================= */}
        <div className="bg-slate-900/20 border border-white/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md shadow-xl">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, email, booking ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          {/* Selector dropdown filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Filter Category */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-slate-950/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="all">All Service Categories</option>
                {Object.keys(categoriesMap).map((k) => (
                  <option key={k} value={k}>{categoriesMap[k]}</option>
                ))}
              </select>
            </div>

            {/* Filter Status */}
            <div className="flex items-center gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-950/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= TABLE LISTING ================= */}
        <div className="bg-slate-900/20 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-slate-950/60 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4.5">ID</th>
                  <th className="px-6 py-4.5">Lead Details</th>
                  <th className="px-6 py-4.5">Service Category</th>
                  <th className="px-6 py-4.5">Meeting Schedule</th>
                  <th className="px-6 py-4.5">Status</th>
                  <th className="px-6 py-4.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-500 font-bold">
                      No records matched your search query.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-white/5 transition-colors duration-200">
                      {/* ID */}
                      <td className="px-6 py-5 font-mono text-xs text-cyan-400 font-bold">
                        {b.id}
                      </td>

                      {/* Lead details */}
                      <td className="px-6 py-5">
                        <div className="font-bold text-white leading-tight">{b.name}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{b.email}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">{b.phone}</div>
                        {b.message && (
                          <div className="text-slate-500 text-[10px] mt-1.5 italic max-w-xs truncate" title={b.message}>
                            "{b.message}"
                          </div>
                        )}
                      </td>

                      {/* Service Category */}
                      <td className="px-6 py-5">
                        <div className="text-white font-semibold text-xs bg-white/5 border border-white/5 rounded px-2.5 py-1 inline-block">
                          {categoriesMap[b.serviceCategory] || b.serviceCategory}
                        </div>
                        {b.specificService && (
                          <div className="text-slate-400 text-[11px] mt-1 italic pl-1">
                            {b.specificService}
                          </div>
                        )}
                      </td>

                      {/* Meeting Schedule */}
                      <td className="px-6 py-5 text-xs text-slate-300">
                        <div className="flex items-center gap-1.5 font-semibold text-white">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {b.date}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {b.timeSlot}
                        </div>
                        <div className="text-slate-400 text-[10px] mt-1 uppercase font-bold tracking-widest pl-5">
                          via {b.meetingMode.replace("-", " ")}
                        </div>
                      </td>

                      {/* Status Selector dropdown */}
                      <td className="px-6 py-5">
                        <select
                          value={b.status}
                          onChange={(e) => handleStatusChange(b.id, e.target.value)}
                          className={`text-xs font-bold rounded-full px-3 py-1.5 focus:outline-none border border-transparent ${
                            b.status === "pending"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : b.status === "approved"
                              ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          }`}
                        >
                          <option value="pending" className="bg-slate-900 text-amber-400">Pending</option>
                          <option value="approved" className="bg-slate-900 text-purple-400">Approved</option>
                          <option value="completed" className="bg-slate-900 text-emerald-400">Completed</option>
                        </select>
                      </td>

                      {/* Action buttons */}
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => handleDelete(b.id)}
                          className="p-2 rounded-lg bg-red-950/20 hover:bg-red-500/10 border border-red-500/20 hover:border-red-500/40 text-red-400 transition-all focus:outline-none"
                          title="Delete Request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
