import { useState, useEffect } from "react";

const FloatingNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50 bg-gray-800 bg-opacity-50 rounded-lg p-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`block p-3 text-2xl rounded-md transition ${
            activeSection === section.id ? "bg-gray-600 text-yellow-400" : "text-white"
          }`}
        >
          {/* If the icon is present, show it; otherwise, show the title */}
            {section.icon ? (
                <span role="img" aria-label={section.title}>
                {section.icon}
                </span>
            ) : (
                <span className="text-sm font-bold text-x1">{section.title}</span>
            )}
        </a>
      ))}
    </div>
  );
};

export default FloatingNav;