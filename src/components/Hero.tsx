
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background image with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'blur(8px) brightness(0.3)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="text-center space-y-8 relative z-10">
        <div className="space-y-4">
          {/* Floating main title */}
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-widest relative transform-gpu">
            <span className="inline-block relative">
              <span className="absolute inset-0 text-white/20 blur-sm transform translate-z-0">ALEX</span>
              <span className="relative z-10 drop-shadow-2xl transform translate-z-8" style={{ transform: 'translateZ(20px)' }}>ALEX</span>
            </span>
          </h1>
          
          {/* Floating divider */}
          <div className="w-24 h-px bg-white mx-auto relative transform-gpu" style={{ transform: 'translateZ(15px)' }}>
            <div className="absolute inset-0 bg-white/30 blur-sm"></div>
            <div className="relative bg-white drop-shadow-lg"></div>
          </div>
          
          {/* Floating subtitle */}
          <p className="text-sm text-gray-400 tracking-widest uppercase relative transform-gpu drop-shadow-xl" style={{ transform: 'translateZ(10px)' }}>
            <span className="absolute inset-0 text-gray-600/40 blur-sm">Creative Developer</span>
            <span className="relative">Creative Developer</span>
          </p>
        </div>
        
        <div className="pt-16">
          {/* Floating button */}
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden px-8 py-3 border border-white/20 hover:border-white/40 transition-all duration-500 transform-gpu drop-shadow-2xl"
            style={{ transform: 'translateZ(25px)' }}
          >
            {/* Button background layers for depth */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <span className="relative z-10 text-sm tracking-wider text-white">VIEW WORK</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-sm tracking-wider text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">VIEW WORK</span>
          </button>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ transform: 'translateZ(5px)' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/10 rounded-full animate-pulse delay-1000" style={{ transform: 'translateZ(8px)' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white/15 rounded-full animate-pulse delay-500" style={{ transform: 'translateZ(12px)' }}></div>
      </div>
    </section>
  );
};

export default Hero;
