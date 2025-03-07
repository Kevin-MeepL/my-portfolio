import React, { useState, useEffect } from "react";

const HomeSection = () => {
  // Dynamic tagline setup
  const [tagline, setTagline] = useState("Software Engineer");
  const descriptions = [
    "Software Engineer",
    "Gamer",
    "Front End Developer",
    "AI Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTagline((prev) => {
        const currentIndex = descriptions.indexOf(prev);
        const nextIndex = (currentIndex + 1) % descriptions.length;
        return descriptions[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Spotlight effect setup
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlight({ x, y });
  };

  const spotlightStyle = {
    left: spotlight.x,
    top: spotlight.y,
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
    transform: "translate(-50%, -50%)",
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="h-screen snap-start flex flex-col items-center justify-center relative bg-gray-900 overflow-hidden"
    >
      {/* Spotlight element */}
      <div className="absolute pointer-events-none" style={spotlightStyle} />

      <h1 className="text-5xl font-bold text-white mb-4">
        Hi! I'm Kevin Laguitan
      </h1>
      <p className="text-xl text-white">
        I'm a <span className="transition-opacity duration-500">{tagline}</span>
      </p>
    </section>
  );
};

export default HomeSection;