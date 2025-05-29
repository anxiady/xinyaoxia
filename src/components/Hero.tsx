
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-widest">
            ALEX
          </h1>
          <div className="w-24 h-px bg-white mx-auto"></div>
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            Creative Developer
          </p>
        </div>
        
        <div className="pt-16">
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden px-8 py-3 border border-white/20 hover:border-white/40 transition-all duration-500"
          >
            <span className="relative z-10 text-sm tracking-wider text-white">VIEW WORK</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-sm tracking-wider text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">VIEW WORK</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
