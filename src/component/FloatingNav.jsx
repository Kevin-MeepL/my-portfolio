import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sections = ["home", "about", "projects"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full px-6 py-4 z-40 flex items-center justify-between transition-all duration-300 ${
      scrolling ? "bg-gray-900 bg-opacity-50 shadow-md" : "bg-transparent"
    }`}>
      {/* Left Side: Logo */}
      <div className="text-lg md:text-xl font-bold tracking-wider text-gray-900 dark:text-white">
        KL
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 font-semibold text-gray-900 dark:text-white">
        {["home", "about", "projects"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-3 py-2 rounded-lg transition-all ${
              activeSection === section
                ? "bg-gray-500 bg-opacity-50 shadow-lg"
                : "hover:bg-gray-600 bg-opacity-30"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-2xl text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center md:hidden">
          {["home", "about", "projects"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`w-full text-center py-3 ${
                activeSection === section ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}

      {/* Theme Toggle */}
      <div className="hidden md:block ml-8">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
