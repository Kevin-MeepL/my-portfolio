import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isOpen, setIsOpen] = useState(true);

  // IntersectionObserver for highlighting active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length) {
          // Pick the entry with the highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, curr) =>
            prev.intersectionRatio > curr.intersectionRatio ? prev : curr
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <motion.div
      // Container that slides open/close horizontally
      className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 bg-gray-800 bg-opacity-50 shadow- overflow-hidden"
      style={{ borderRadius: "8px 0 0 8px" }}
      // Animate the width based on isOpen
      initial={{ width: 30 }}
      animate={isOpen ? { width: 110 } : { width: 30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Toggle Button on the LEFT edge of the tray */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-r"
      >
        {/* Show '>' when open, '<' when collapsed */}
        {isOpen ? ">" : "<"}
      </button>

      {/* Nav Links */}
      <div className="pt-3 pl-12 pr-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block p-3 text-xl rounded-md transition hover:bg-gray-300 dark:hover:bg-gray-700 ${
              activeSection === section.id
                ? "bg-gray-600 text-yellow-400"
                : "text-white"
            }`}
          >
            {section.icon ? (
              <span role="img" aria-label={section.title}>
                {section.icon}
              </span>
            ) : (
              <span className="text-sm font-bold">{section.title}</span>
            )}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingNav;