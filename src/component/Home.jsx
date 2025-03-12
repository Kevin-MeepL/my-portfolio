import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // FontAwesome icons

const HomeSection = () => {
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
      className="h-screen w-full px-6 snap-start flex flex-col items-center justify-center relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
        Hi! I'm Kevin Laguitan
      </h1>
      <div className="w-full text-center">
        <span className="text-xl inline-block">I'm a</span>
        <span className="text-xl inline-block ml-1">
          <span
            className={`inline-block transition-all duration-500 ease-in-out transform ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {tagline}
          </span>
        </span>
      </div>

      {/* Contacts Section Docked to Bottom */}
      <div className="absolute bottom-6 w-full flex flex-col items-center">
        <p className="text-lg font-semibold mb-2">Contacts</p>
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/kevin-laguitan-a52b94272/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:klaguitan21@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition duration-300 text-3xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
