
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team communication features.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      year: "2023"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts, custom reports, and automated insights.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      year: "2023"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication, transaction history, and budget tracking capabilities.",
      tech: ["React Native", "TypeScript", "Firebase", "Plaid"],
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Selected Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of work spanning web applications, mobile solutions, and data visualization projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
