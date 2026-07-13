import BookingForm from "../components/BookingForm";
import { useSEO } from "../hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookConsultation() {
  useSEO({
    title: "Book Consultation | Macky's Tech",
    description: "Schedule a free consultation and project scope session with our technical team.",
    canonical: "https://www.mackystech.in/book-consultation"
  });

  return (
    <main className="bg-[#030712] text-white min-h-screen relative overflow-hidden font-sans pt-28 pb-20 px-6">
      {/* Background glow spots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <BookingForm />
      </div>
    </main>
  );
}
