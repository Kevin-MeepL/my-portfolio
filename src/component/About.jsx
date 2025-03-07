import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-screen snap-start flex flex-col items-center justify-center bg-blue-900"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        About Section
      </h1>
      <p className="text-xl md:text-2xl text-gray-300">
        This is the about section
      </p>
    </section>
  );
};

export default AboutSection;