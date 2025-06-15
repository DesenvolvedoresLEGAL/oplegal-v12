
import { useEffect } from "react";

const useScrollAnimations = () => {
  useEffect(() => {
    // Scroll animations handler
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollAnimations;
