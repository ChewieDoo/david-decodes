import React, { useState, useEffect } from "react";

const ZaraCatalog = () => {
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
              currentSection == "Summary"
                ? "catalog-text-red "
                : " catalog-text"
            }`}
            onClick={() => scrollToSection("Summary")}>
            Summary
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Approach"
                ? "catalog-text-red"
                : "catalog-text "
            }`}
            onClick={() => scrollToSection("Approach")}>
            Approach
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Discover"
                ? "catalog-text-red"
                : "catalog-text "
            }`}
            onClick={() => scrollToSection("Discover")}>
            Discover
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Define" ? "catalog-text-red" : "catalog-text "
            }`}
            onClick={() => scrollToSection("Define")}>
            Define
          </button>
        </li>
        <li>
          <button
            className={` ${
              currentSection == "Design" ? "catalog-text-red" : "catalog-text "
            }`}
            onClick={() => scrollToSection("Design")}>
            Design
          </button>
        </li>
        <li>
          <button
            className={`catalog-text ${
              currentSection == "Impact" ? "catalog-text-red" : "Deliver "
            }`}
            onClick={() => scrollToSection("Deliver")}>
            Deliver
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ZaraCatalog;
