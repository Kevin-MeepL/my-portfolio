import React, { useState, useEffect } from "react";
import FloatingNav from "./FloatingNav";
import HomeSection from "./Home";
import ProjectSection from "./Projects";
import AboutSection from "./About";

// Section data remains the same
const sections = [
  { id: "home", title: "Home", icon: "🏠" },
  { id: "about", title: "About", icon: "ℹ️" },
  { id: "projects", title: "Projects", icon: "💻" },
];

const ScrollSections = () => {
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    setSpotlight({ x: e.clientX, y: e.clientY });
  };

  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div onMouseMove={handleMouseMove} className="relative h-screen">
      {/* Hide spotlight on mobile and show only on md+ screens */}
      <div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-50"
        style={{
          left: spotlight.x,
          top: spotlight.y,
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: isDarkMode
            ? "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)"
            : "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <FloatingNav sections={sections} />
      <div
        id="scroll-container"
        className="overflow-y-scroll snap-y snap-mandatory hide-scrollbar h-full scroll-smooth"
      >
        <HomeSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default ScrollSections;