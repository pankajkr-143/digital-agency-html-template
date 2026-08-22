const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          width="16"
          height="14"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_6px_rgba(245,158,11,0.3)]"
        >
          <path
            d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
            fill={i < rating ? "#F59E0B" : "#4B5563"}
          />
        </svg>
      ))}
  </div>
);

const TestimonialCard = ({ item }) => {
  return (
    <div
      className="
        shrink-0 w-[290px] sm:w-[350px]
        bg-white/[0.03]
        hover:bg-white/[0.06]
        border border-white/10
        rounded-2xl
        backdrop-blur-md
        transition-all duration-500
        hover:border-blue-500/40
        hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
        whitespace-normal
        flex flex-col justify-between
        p-5
      "
    >
      {/* Top Profile Header */}
      <div className="flex items-center gap-4 pb-4 border-b border-white/10">
        <img
          className="h-12 w-12 rounded-full ring-2 ring-white/10 group-hover:ring-blue-500/40 object-cover"
          src={item.img}
          alt={item.name}
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <h3
            className="text-sm sm:text-base font-semibold text-white truncate"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {item.name}
          </h3>
          <p
            className="text-gray-400 text-xs truncate"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {item.role}
          </p>
          <div className="flex items-center gap-1 mt-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400 shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              className="text-[10px] sm:text-xs truncate font-medium text-gray-400"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {item.location}
            </span>
          </div>
        </div>
      </div>

      {/* Content Rating & Quote */}
      <div className="pt-4 flex-1 flex flex-col justify-between">
        <div>
          <StarRating rating={item.rating} />
          <p
            className="text-gray-300 mt-3 leading-relaxed text-xs sm:text-sm group-hover:text-white transition duration-300"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            "{item.text}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Managing Director",
      location: "Apex Infra Solutions · Mumbai",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      text: "Macky's Tech completely transformed our lead generation funnel. Our sales team went from chasing cold contacts to closing high-intent real estate buyers consistently every month.",
    },
    {
      name: "Priya Nair",
      role: "Chief Technology Officer",
      location: "EduSmart Learning · Bengaluru",
      rating: 5,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      text: "The custom LMS software built by Macky's Tech handles over 50,000 active students seamlessly. Their tech architecture and post-launch support have been world-class.",
    },
    {
      name: "Amitabh Roy",
      role: "VP of Growth & Marketing",
      location: "QuickLogistics Tech · Delhi NCR",
      rating: 5,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      text: "Their performance marketing and targeted B2B lead generation campaigns reduced our customer acquisition cost by 42% while scaling our driver network nationwide.",
    },
    {
      name: "Ananya Deshmukh",
      role: "Operations Head",
      location: "CarePlus Diagnostics · Pune",
      rating: 5,
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
      text: "WhatsApp automation and appointment booking CRM integrated by Macky's Tech cut our administrative manual work by half and elevated our patient experience.",
    },
    {
      name: "Vikramaditya Verma",
      role: "Co-Founder & Product Lead",
      location: "FinEdge Digital · Hyderabad",
      rating: 5,
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      text: "Extremely impressed with their UI/UX design standards and rapid full-stack engineering. They delivered our MVP ahead of schedule with top-tier security standards.",
    },
    {
      name: "Sneha Gupta",
      role: "Head of Business Development",
      location: "UrbanBazaar E-Commerce · Jaipur",
      rating: 5,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      text: "Our multi-vendor marketplace platform was built flawlessly. Sales pipelines, automated vendor payouts, and inventory management work seamlessly under heavy traffic.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]"></div>

      {/* Edge Fading Masks for Premium Marquee Look */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mb-16 tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Businesses We've Helped Move Forward
        </h2>

        {/* Marquee Row (Only 1 row) */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {/* Render first copy */}
            {testimonials.map((item, index) => (
              <TestimonialCard key={`t-${index}`} item={item} />
            ))}
            {/* Render duplicate copy for infinite scroll effect */}
            {testimonials.map((item, index) => (
              <TestimonialCard key={`t-dup-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

