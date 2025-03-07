import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-screen snap-start flex flex-col items-center justify-center bg-green-900"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Contacts Section
      </h1>
      <p className="text-xl md:text-2xl text-gray-300">
        This is the Contacts Section
      </p>
    </section>
  );
};

export default ContactSection;