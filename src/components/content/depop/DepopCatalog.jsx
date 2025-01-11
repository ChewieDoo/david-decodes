import React, { useState, useEffect } from "react";

const DepopCatalog = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const scrollThreshold = 200;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setShowCatalog(true);
    } else {
      setShowCatalog(false);
    }
  };
  //Interaction observer - monitor visibility of each section

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Function to scroll to the section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='relative z-10'>
      <ul
        className={`fixed bottom-10 left-10 transition-transform duration-800 ${
          showCatalog ? "translate-y-0" : "translate-y-[200%]"
        }`}>
        <li>
          <button
            className={` ${
              currentSection == "The_problem"
                ? "catalog-text-red "
                : " catalog-text"
            }`}
            onClick={() => scrollToSection("The_problem")}>
            The problem
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Outcome" ? "catalog-text-red" : "catalog-text "
            }`}
            onClick={() => scrollToSection("Outcome")}>
            Outcome
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Key_features"
                ? "catalog-text-red"
                : "catalog-text "
            }`}
            onClick={() => scrollToSection("Key_features")}>
            Key features
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "User_research"
                ? "catalog-text-red"
                : "catalog-text "
            }`}
            onClick={() => scrollToSection("User_research")}>
            User research
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Design_iterations"
                ? "catalog-text-red"
                : "catalog-text "
            }`}
            onClick={() => scrollToSection("Design_iterations")}>
            Design iterations
          </button>
        </li>
        <li>
          <button
            className={`catalog-text ${
              currentSection == "Impact" ? "catalog-text-red" : "catalog-text "
            }`}
            onClick={() => scrollToSection("Impact")}>
            Impact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DepopCatalog;
