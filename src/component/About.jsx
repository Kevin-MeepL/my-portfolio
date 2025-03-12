import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { FaPhp ,FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const AzureIcon = () => (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
      alt="Azure Logo"
      className="h-10 w-10"
    />
  );

  const ServiceNowIcon = () => (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg"
      alt="ServiceNow Logo"
      className="h-10 w-10"
    />
  );

  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
    { name: "Azure", icon: <AzureIcon /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 w-10 h-10" /> },
    { name: "ServiceNow", icon: <ServiceNowIcon /> },
    { name: "PHP", icon: <FaPhp className="text-blue-500 w-10 h-10" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-10 h-10" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-500 w-10 h-10" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 w-10 h-10" /> },
    { name: "GIT", icon: <FaGitAlt className="text-orange-500 w-10 h-10" /> },
  ];

  return (
    <section
      id="about"
      ref={ref} 
      className="pt-16 min-h-screen snap-start flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Tech Stack Section */}
      <motion.div 
      className="w-full max-w-5xl p-4 sm:p-6 border-b border-gray-300 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl sm:text-3xl raleway-bold mb-4 sm:mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {tech.icon}
              <span className="mt-2 text-sm sm:text-lg raleway-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className="w-full max-w-5xl p-4 sm:p-6 border-b border-gray-300 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-2xl sm:text-3xl raleway-bold mb-4 sm:mb-6">Experience</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 sm:p-6 border-l-4 border-blue-500 rounded-lg bg-gray-200 dark:bg-gray-800">
          <div>
            <h3 className="text-lg sm:text-xl raleway-medium">App/Cloud Support Analyst</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Accenture | 2021 - 2024
            </p>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-500 dark:text-gray-400">
              <li>Ensuring 24/7 reliability and uptime of customer-facing systems.</li>
              <li>Resolving client-reported issues while meeting SLA requirements.</li>
              <li>Maintaining system assets, including Active Directory accounts, database accounts, and SSL certificates.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Certification Section */}
      <motion.div 
      className="p-8 w-full max-w-5xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl raleway-bold mb-6">Certifications</h2>
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 p-4 sm:p-6 md:p-8 border-l-4 border-blue-500 rounded-lg bg-gray-200 dark:bg-gray-800 max-w-full md:max-w-5xl mx-auto">
          <img 
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" 
            alt="Azure Fundamentals Badge"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-xl raleway-medium">AZ-900: Microsoft Certified - Azure Fundamentals</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Microsoft Issued: May 2021
            </p>
            <p 
              href="https://learn.microsoft.com/api/credentials/share/en-us/Kevin-9452/46BD1BCBD8DE080A?sharingId=62031DA111F8B627" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline text-lg raleway-medium"
            >
              Verify Credential
            </p>
            <ul className="list-disc ml-6 text-base text-gray-500 dark:text-gray-400">
              <li>Demonstrates foundational knowledge of cloud concepts, Azure services, security, and pricing.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;