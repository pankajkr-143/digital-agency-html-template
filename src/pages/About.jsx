export default function About() {
  return (
    <section className="relative bg-black py-28 px-6 md:px-16 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* IMAGE SIDE */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.25)] shrink-0">

          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt="MackysTech Team"
          />

          {/* floating badge */}
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-lg text-sm text-white">
            🚀 Building Scalable Digital Solutions
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="max-w-xl text-gray-400">

          <p className="uppercase text-blue-400 text-sm tracking-widest font-semibold">
            About MackysTech
          </p>

          <h2 className="text-4xl font-bold text-white mt-3 leading-tight">
            Engineering Modern Digital Experiences
            <span className="text-blue-500"> for Businesses</span>
          </h2>

          <div className="w-24 h-[3px] mt-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400"></div>

          <p className="mt-8 leading-relaxed">
            MackysTech is a technology-driven company specializing in
            <span className="text-white"> Web Development</span>,
            <span className="text-white"> Cloud Computing</span>, and
            <span className="text-white"> Application Development</span>.
            We help startups and enterprises transform ideas into scalable,
            high-performance digital products.
          </p>

          <p className="mt-5 leading-relaxed">
            From modern websites and SaaS platforms to cloud-native
            infrastructures, our team focuses on performance, security,
            and seamless user experience — ensuring every solution is
            built for long-term growth.
          </p>

          <p className="mt-5 leading-relaxed">
            Our mission is simple: deliver reliable technology solutions
            that empower businesses to innovate faster and scale smarter
            in a rapidly evolving digital world.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="
              inline-flex items-center gap-3 mt-10
              bg-blue-600 hover:bg-blue-500
              px-8 py-3 rounded-full
              text-white font-medium
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
            "
          >
            Learn More
            <svg
              width="14"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}
