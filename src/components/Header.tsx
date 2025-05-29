
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-light tracking-widest text-white">
            AJ
          </div>
          <nav className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
