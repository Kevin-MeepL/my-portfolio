import React, { useState, useEffect } from "react";

const HomeSection = () => {
  // Dynamic tagline setup
  const [tagline, setTagline] = useState("Software Engineer");
  const [fade, setFade] = useState(true);
  const descriptions = [
    "Software Engineer",
    "Game Enjoyer",
    "Front End Developer",
    "AI Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade out
      setTimeout(() => {
        setTagline((prev) => {
          const currentIndex = descriptions.indexOf(prev);
          const nextIndex = (currentIndex + 1) % descriptions.length;
          return descriptions[nextIndex];
        });
        setFade(true); // Fade back in
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen snap-start flex flex-col items-center justify-center relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi! I'm Kevin Laguitan</h1>
      <p className="text-xl flex items-center">
        I'm a { " "}
        <span
          className="ml-2 inline-flex items-center justify-start"
          style={{ minWidth: "220px", height: "1.5em" }}
        >
          <span
            className={`transition-all duration-500 ease-in-out transform ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {tagline}
          </span>
        </span>
      </p>
    </section>
  );
};

export default HomeSection;