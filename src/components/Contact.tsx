
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-white mb-6">Let's Work Together</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to connect, I'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:alex@example.com" 
            className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
