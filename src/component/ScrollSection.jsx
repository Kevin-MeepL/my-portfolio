import React, { useState } from "react";
import ContactSection from "./Contact";
import FloatingNav from "./FloatingNav";
import HomeSection from "./Home";
import ProjectSection from "./Projects";
import AboutSection from "./About";
import ThemeToggle from "./ThemeToggle";

// Section data remains the same
const sections = [
  { id: "home", title: "Home", icon: "🏠" },
  { id: "about", title: "About", icon: "ℹ️" },
  { id: "projects", title: "Projects", icon: "💻" },
  { id: "contact", title: "Contact", icon: "📞" },
];

const ScrollSections = () => {
  // Moved hooks inside the component
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    setSpotlight({ x: e.clientX, y: e.clientY });
  };

  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    // Outer container fixed to the viewport height
    <div onMouseMove={handleMouseMove} className="relative h-screen">
      {/* Global Spotlight */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          left: spotlight.x,
          top: spotlight.y,
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background:isDarkMode 
          ? "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%)"  // light tint for dark mode
          : "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%)", 
          transform: "translate(-50%, -50%)",
        }}
      />

      <ThemeToggle />
      <FloatingNav sections={sections} />
      {/* Scroll container takes full height and scrolls its overflowing content */}
      <div
        id="scroll-container"
        className="overflow-y-scroll snap-y snap-mandatory hide-scrollbar h-full scroll-smooth"
      >
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default ScrollSections;