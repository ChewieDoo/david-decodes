import React from "react";
import { useEffect } from "react";

import { useGlobalContext } from "../../context/Context";
import { useImages } from "../../context/ImageContext";
import SideBar from "./SideBar";
import SmallFooter from "./SmallFooter";
import ZaraTags from "./zara/ZaraTags";
import ZaraSummary from "./zara/ZaraSummary";
import ZaraApproach from "./zara/ZaraApproach";
import ZaraProcess from "./zara/ZaraProcess";
import ZaraDiscover from "./zara/ZaraDiscover";
import ZaraDefine from "./zara/ZaraDefine";
import ZaraDesign from "./zara/ZaraDesign";
import ZaraDeliver from "./zara/ZaraDeliver";
import ZaraCatalog from "./zara/ZaraCatalog";

const ZaraCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { zaraImg } = useImages();

  return (
    <div className='casestudy-text'>
      <div className='relative h-screen'>
        <img
          src={`${zaraImg.coverPhoto}`}
          alt='Zara cover photo'
          className='sticky top-0 w-full h-[472px] object-cover'
        />
      </div>
      <div>
        <SideBar />
      </div>
      <div className='md:block hidden'>
        <ZaraCatalog />
      </div>
      <div className='title-container h-24 flex items-end'>
        <div className='h-full'>
          <img
            src={`${zaraImg.logo}`}
            alt='Zara logo'
            className='h-full object-contain'></img>
        </div>
        <div className='flex items-end ml-2'>
          <h1 className='big-text'>Frictionless Fashion</h1>
        </div>
      </div>
      <div className='main-container-background'>
        <section className='tag-container mt-3'>
          <ZaraTags />
        </section>
        <section id='Summary' className='section-container mt-16'>
          <ZaraSummary />
        </section>
        <section id='Approach' className='section-container'>
          <ZaraApproach />
        </section>
        <div className='section-gray-background'>
          <section id='Approach' className='section-container-wide py-5'>
            <ZaraProcess />
          </section>
        </div>
        <section id='Discover' className='section-container'>
          <ZaraDiscover />
        </section>
        <section id='Define' className='section-container'>
          <ZaraDefine />
        </section>
        <section id='Design' className='section-container'>
          <ZaraDesign />
        </section>
        <section id='Deliver' className='section-container'>
          <ZaraDeliver />
        </section>
        <section className='mt-28 mb-36'>
          <SmallFooter />
        </section>
      </div>
    </div>
  );
};

export default ZaraCaseStudy;
