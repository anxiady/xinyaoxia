
const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            Creative Developer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend thoughtful design with robust technology. 
            Passionate about creating solutions that are both beautiful and functional.
          </p>
          <div className="pt-8">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
