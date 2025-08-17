export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">My Projects</h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-400 mb-6">
            Here are some of the projects I've worked on:
          </p>

          {/* Project Cards ....................................................that makes better use of space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    {
      title: "Project 1",
      description: "Mini project ,a simple age calculator.",
    },
    {
      title: "Project 2",
      description: "Real time weather application using API.",
    },
    {
      title: "Project 3",
      description: "AI Project,Object Detection",
    },
    {
      title: "Project 4",
      description: "Real time Online complaint management system. Built with MERN stack.",
    },
  ].map((project, index) => (
    <div
      key={index}
      className="relative group rounded-2xl p-6 bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-white/10 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
        {project.title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{project.description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
        <span>View Details</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};
