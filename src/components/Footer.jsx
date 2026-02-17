export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400">

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(79,57,246,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative px-6 md:px-16 lg:px-24 xl:px-32">

        <div className="flex flex-col md:flex-row items-start justify-between gap-16 py-20 border-b border-white/10">

          {/* LEFT SECTION - CENTERED ON MOBILE */}
          <div className="max-w-sm w-full md:w-auto text-center md:text-left">

            <h2 className="text-2xl font-bold text-white tracking-wide">
              Mackys<span className="text-blue-500">Tech</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              We build scalable, secure and performance-driven digital
              solutions designed to elevate modern businesses.
            </p>

            {/* SOCIAL ICONS - CENTERED */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">

              {/* Instagram */}
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 
                hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]
                transition"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" className="text-gray-400 hover:text-pink-500 transition">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 
                hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                transition"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" className="text-gray-400 hover:text-blue-500 transition">
                  <path d="M15 3h3v4h-3c-1.1 0-2 .9-2 2v3h5l-1 4h-4v7h-4v-7H6v-4h3V9c0-3 2-6 6-6z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 
                hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                transition"
              >
                <svg width="20" height="20" fill="currentColor"
                  viewBox="0 0 24 24" className="text-gray-400 hover:text-white transition">
                  <path d="M18.244 2H21.5l-7.59 8.676L23 22h-7.406l-5.8-7.584L3.5 22H.244l8.13-9.29L1 2h7.594l5.238 6.932L18.244 2z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* RIGHT LINKS - CENTERED ON MOBILE */}
          <div className="flex flex-col sm:flex-row gap-16 w-full md:w-auto justify-center">

            <div className="text-center md:text-left">
              <h2 className="font-semibold text-white mb-6 tracking-wide">
                Resources
              </h2>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-semibold text-white mb-6 tracking-wide">
                Company
              </h2>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="py-6 text-center text-xs md:text-sm text-gray-600">
          © 2024 MackysTech. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
