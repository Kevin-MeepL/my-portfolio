import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-screen snap-start flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Contacts Section
      </h1>
      <p className="text-xl md:text-2xl">
        This is the Contacts Section
      </p>
    </section>
  );
};

export default ContactSection;