
const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-thin text-white tracking-widest mb-8">GET IN TOUCH</h2>
        <div className="w-16 h-px bg-white/30 mx-auto mb-16"></div>
        
        <div className="space-y-8">
          <a 
            href="mailto:alex@example.com" 
            className="inline-block group"
          >
            <span className="text-lg text-gray-400 hover:text-white transition-colors duration-300 tracking-wider">
              alex@example.com
            </span>
            <div className="h-px bg-gray-400 group-hover:bg-white transition-colors duration-300 mt-1"></div>
          </a>
          
          <div className="flex justify-center space-x-12 pt-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm tracking-wider">
              LINKEDIN
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm tracking-wider">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
