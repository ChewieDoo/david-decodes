import React from "react";
import { useEffect } from "react";

import { useImages } from "../../context/ImageContext";
import SideBar from "./SideBar";
import SmallFooter from "./SmallFooter";

import DepopTags from "./depop/DepopTags";
import DepopSummary from "./depop/DepopSummary";
import DepopDesignFeature from "./depop/DepopDesignFeature";
import DepopResearch from "./depop/DepopResearch";
import DepopIterations from "./depop/DepopIterations";
import DepopImpact from "./depop/DepopImpact";
import DepopCatalog from "./depop/DepopCatalog";

const DepopCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { depopImg } = useImages();

  return (
    <div className='Sk-Modernist'>
      <div className='relative h-screen'>
        <img
          src={`${depopImg.coverPhoto}`}
          alt='Depop cover photo'
          className='sticky top-0 w-full h-[474px] object-cover'
        />
      </div>
      <div>
        <SideBar />
      </div>
      <div className='md:block hidden'>
        <DepopCatalog />
      </div>

      <div className='title-container-clear h-24 flex items-end'>
        <div className='h-full'>
          <img
            src={`${depopImg.logo}`}
            alt='Depop rental logo'
            className='h-full object-contain'
          />
        </div>
        <div className='flex md:items-end ml-2'>
          <h1 className='md:text-[36px] text-[32px]'>Rent a Depop</h1>
        </div>
      </div>

      <div className='main-container-background'>
        <section className='tag-container-sm mt-3'>
          <DepopTags />
        </section>
        <section id='The_problem' className='section-container mt-16'>
          <DepopSummary />
        </section>
        <section id='Key_features' className='section-container'>
          <DepopDesignFeature />
        </section>
        <section id='User_research' className='section-container'>
          <DepopResearch />
        </section>
        <section id='Design_iterations' className='section-container'>
          <DepopIterations />
        </section>
        <section id='Impact' className='section-container'>
          <DepopImpact />
        </section>
        <section className='mt-28 mb-36'>
          <SmallFooter />
        </section>
      </div>
    </div>
  );
};

export default DepopCaseStudy;
