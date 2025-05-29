
const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100K+ users. Architect cloud infrastructure and mentor junior developers."
    },
    {
      company: "StartupLab",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect interfaces."
    },
    {
      company: "Digital Agency Pro",
      position: "Web Developer",
      period: "2019 - 2020",
      description: "Developed custom websites and web applications for clients across various industries. Focused on performance optimization and SEO."
    },
    {
      company: "University of Technology",
      position: "Computer Science Graduate",
      period: "2015 - 2019",
      description: "Bachelor's degree in Computer Science with focus on software engineering and data structures. Graduated Summa Cum Laude."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Experience</h2>
          <p className="text-gray-600">
            My professional journey in technology and software development.
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <h4 className="text-lg text-gray-700 font-medium">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
