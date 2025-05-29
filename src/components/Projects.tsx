
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["React", "Node.js"],
      year: "2024"
    },
    {
      title: "Task Management",
      tech: ["Vue.js", "Express"],
      year: "2023"
    },
    {
      title: "Analytics Dashboard",
      tech: ["React", "Python"],
      year: "2023"
    },
    {
      title: "Mobile Banking",
      tech: ["React Native"],
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-thin text-white tracking-widest mb-4">SELECTED WORK</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border-b border-white/10 pb-8 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between py-6">
                <div className="flex-1">
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs text-gray-500 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-600 tracking-wider">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
