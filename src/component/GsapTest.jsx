import ContactSection from "./Contact";
import FloatingNav from "./FloatingNav";
import HomeSection from "./Home";
import ProjectSection from "./Projects";
import AboutSection from "./About";

// Section data remains the same
const sections = [
  { id: "home", title: "Home", color: "bg-red-300", icon: "🏠" },
  { id: "about", title: "About", color: "bg-blue-300", icon: "ℹ️" },
  { id: "projects", title: "Projects", color: "bg-green-300", icon: "💻" },
  { id: "contact", title: "Contact", color: "bg-yellow-300", icon: "📞" },
];

const ScrollSections = () => {
  return (
    // Outer container fixed to the viewport height
    <div className="relative h-screen">
      <FloatingNav sections={sections} />
      {/* Scroll container takes full height and scrolls its overflowing content */}
      <div
        id="scroll-container"
        className="overflow-y-scroll snap-y snap-mandatory hide-scrollbar h-full"
      >
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default ScrollSections;