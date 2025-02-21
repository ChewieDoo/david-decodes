import React, { createContext, useContext, useEffect, useState } from "react";
import depopMockup from "../assets/depop-mockup.jpg";
import zaraMockup from "../assets/zara-mockup.jpg";
import fearlessMockup from "../assets/fearless-mockup.jpg";
import potionMockup from "../assets/potion-mockup.jpg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const caseStudies = [
    {
      id: 0,
      title: "Rent a Depop",
      coverPhoto: depopMockup,
      themeColor: "tag-box-1",
      tags: ["E-commerce", "Added-feature", "Sustainability"],
      name: "Depop",
      text: "How to introduce and integrate a cloth-rental feature onto a popular e-commerce and online thrifting mobile app?",
      link: "/rentADepop",
    },
    {
      id: 1,
      title: "Frictionless Fashion",
      coverPhoto: zaraMockup,
      themeColor: "tag-box-2",
      tags: ["Fashion", "Responsive Web Design", "Navigation"],
      name: "Zara",
      text: "How to help online shoppers easily find products and unique clothing collections on a fast-fashion website?",
      link: "/frictionless",
    },
    {
      id: 2,
      title: "Potion",
      coverPhoto: potionMockup,
      themeColor: "tag-box-4",
      tags: ["Full-Stack Development", "TypeScript", "NextJS"],
      name: "Potion - the note taking app",
      text: "Building productivity app with front-end inspired from Notion and back-end storing user credentials, documents, and more.",
      link: "https://potion-notes-cyan.vercel.app/",
      codeSource: "https://github.com/ChewieDoo/notion-clone",
    },
    {
      id: 3,
      title: "Fearless",
      coverPhoto: fearlessMockup,
      themeColor: "tag-box-3",
      tags: ["Web Development", "JavaScript", "React", "Tailwind CSS"],
      name: "KPOP",
      text: "How to develop a reactive website for award-winning Kpop girl group LeSserafim with ReactJS and Tailwind CSS framework?",
      link: "https://github.com/ChewieDoo/fearless2",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <AppContext.Provider
      value={{
        caseStudies,
        selectedImage,
        openModal,
        closeModal,
        isModalOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
