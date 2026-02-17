const StarRating = () => (
  <div className="flex gap-1">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          width="18"
          height="16"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]"
        >
          <path
            d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
            fill="#E5E7EB"
          />
        </svg>
      ))}
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: "Donald Jackman",
      role: "Content Creator",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      text:
        "MackysTech removed repetitive UI work from my workflow and boosted productivity instantly.",
    },
    {
      name: "Richard Nelson",
      role: "Instagram Influencer",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      text:
        "Every component feels production-ready, consistent and thoughtfully designed for real world use.",
    },
    {
      name: "James Washington",
      role: "Digital Content Creator",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
      text:
        "Building landing pages is now faster and stress-free thanks to MackysTech's clean components.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mb-12 md:mb-16 tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          What Our Clients Say
        </h2>

        {/* Cards Container */}
        <div
          className="
            flex flex-col
            sm:flex-row
            items-center
            justify-center
            gap-6 md:gap-8 lg:gap-10
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group w-full sm:max-w-sm
                bg-white/[0.04]
                border border-white/10
                rounded-2xl
                backdrop-blur-lg
                transition-all duration-500
                hover:-translate-y-3
                hover:border-blue-500/40
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
              "
            >
              {/* Top */}
              <div className="flex items-center gap-4 px-5 py-5 border-b border-white/10">
                <img
                  className="h-12 w-12 rounded-full ring-1 ring-white/20 group-hover:ring-blue-500/40 transition"
                  src={item.img}
                  alt={item.name}
                />
                <div className="flex-1 min-w-0">
                  <h1
                    className="text-base md:text-lg font-medium text-white truncate"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.name}
                  </h1>
                  <p
                    className="text-gray-400 text-xs md:text-sm truncate"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <StarRating />
                <p
                  className="text-gray-400 mt-5 leading-relaxed text-sm group-hover:text-gray-300 transition line-clamp-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.text}
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 pb-5">
                <a
                  href="#"
                  className="text-blue-400 text-sm font-medium transition hover:text-blue-300"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
