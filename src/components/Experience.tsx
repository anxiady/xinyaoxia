
const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Developer",
      period: "2022 - Present"
    },
    {
      company: "StartupLab",
      position: "Frontend Developer",
      period: "2020 - 2022"
    },
    {
      company: "Digital Agency",
      position: "Web Developer",
      period: "2019 - 2020"
    }
  ];

  return (
    <section id="experience" className="py-32 px-8 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-thin text-white tracking-widest mb-4">EXPERIENCE</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-center justify-between py-6 border-b border-white/10">
              <div>
                <h3 className="text-lg font-light text-white mb-1">{exp.position}</h3>
                <p className="text-sm text-gray-500">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-600 tracking-wider">{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
