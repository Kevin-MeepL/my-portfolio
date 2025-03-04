import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  const sectionRef = useRef([]);
  const textRefs = useRef(new Map());

  useLayoutEffect(() => {
    // Delay a bit to ensure all elements are rendered
    setTimeout(() => {
      const elements = Array.from(textRefs.current.values());
      elements.forEach((text) => {
        if (!text) return;
        gsap.fromTo(
          text,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              scroller: "#scroll-container", // Specify the scroll container
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "restart none restart none",
            },
          }
        );
      });
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <div
      id="scroll-container"
      className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
    >
      {[1, 2, 3].map((num, index) => (
        <section
          key={num}
          ref={(el) => (sectionRef.current[index] = el)}
          className={`h-screen snap-start flex items-center justify-center ${
            num === 1
              ? "bg-red-300"
              : num === 2
              ? "bg-blue-300"
              : "bg-green-300"
          }`}
        >
          <h1
            ref={(el) => {
              if (el) textRefs.current.set(index, el);
            }}
            className="text-3xl font-bold opacity-0"
          >
            Section {num}
          </h1>
        </section>
      ))}
    </div>
  );
};

export default ScrollSections;