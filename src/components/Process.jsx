export default function Process() {
  const projects = [
    {
      title: "LMS Platform",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Enrollment Portal",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Digital Library",
      category: "Management",
      image: "https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Freelance Hub",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Simple & Clean */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{fontFamily: "'Outfit', sans-serif"}}>
            Selected Works
          </h1>
          <p className="mt-4 text-neutral-500 text-sm md:text-base max-w-lg mx-auto" style={{fontFamily: "'Outfit', sans-serif"}}>
            Minimalist designs crafted with precision. Hover to explore details.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out group overflow-hidden rounded-lg md:rounded-xl border border-neutral-800 bg-neutral-900 cursor-pointer"
            >
              {/* Image with Grayscale Filter */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 lg:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-neutral-400 text-xs font-medium uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </p>
                <h3 className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-tight" style={{fontFamily: "'Outfit', sans-serif"}}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}