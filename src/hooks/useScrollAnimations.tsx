
import { useEffect } from "react";

const useScrollAnimations = () => {
  useEffect(() => {
    // Use Intersection Observer to avoid forced reflows
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    // Observe all reveal-on-scroll elements
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
