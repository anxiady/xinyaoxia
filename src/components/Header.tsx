
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-gray-900">
            Alex Johnson
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
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
