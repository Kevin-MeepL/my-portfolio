import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
          console.log(`Section: ${section}, Top: ${rect.top}, Bottom: ${rect.bottom}`);
  
          // Adjust condition to work inside scroll container
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            console.log(`✅ Setting active section to: ${section}`);
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
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-40 flex items-center justify-between transition-all duration-300 ${
        scrolling ? "bg-gray-900 bg-opacity-0 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Left Side: Icon Version of Your Name */}
      <div className=" font-bold text-xl tracking-wider bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">KL</div>

      {/* Center: Text-Based Navigation */}
      <div className="flex gap-8 font-semibold bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {["home", "about", "projects"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-3 py-2 transition-all rounded-lg raleway-medium ${
              activeSection === section
                ? "bg-gray-500 shadow-lg"
                : "hover:bg-gray-600"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      {/* Right Side: Theme Toggle */}
      <div className="ml-8">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;