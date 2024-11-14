import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const caseStudies = [
    {
      id: 0,
      title: "Rent a Depop",
      coverPhoto: "src/assets/depop-mockup.jpg",
      themeColor: "tag-box-1",
      tags: ["E-commerce", "Added-feature", "Sustainability"],
      name: "Depop",
      text: "How to introduce and integrate a cloth-rental feature onto a popular e-commerce and online thrifting mobile app?",
      link: "https://juniper-room-602.notion.site/Rent-a-Depop-48ae1bd3a910401bb4e2f37ca0f4df20?pvs=74",
    },
    {
      id: 1,
      title: "Frictionless Fashion",
      coverPhoto: "src/assets/zara-mockup.jpg",
      themeColor: "tag-box-2",
      tags: ["Fashion", "Responsive Web Design", "Navigation"],
      name: "Zara",
      text: "How to help online shoppers easily find products and unique clothing collections on a fast-fashion website?",
      link: "/frictionless",
    },
    {
      id: 2,
      title: "Fearless",
      coverPhoto: "src/assets/fearless-mockup.jpg",
      themeColor: "tag-box-3",
      tags: ["Web Development", "JavaScript", "React", "Tailwind CSS"],
      name: "KPOP",
      text: "How to develop a reactive website for award-winning Kpop girl group LeSserafim with ReactJS and Tailwind CSS framework?",
      link: "https://github.com/ChewieDoo/fearless2",
    },
  ];

  return (
    <AppContext.Provider
      value={{
        caseStudies,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
