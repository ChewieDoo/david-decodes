import React from "react";
import { useImages } from "../../../context/ImageContext";

const ZaraDiscover = () => {
  const { zaraImg } = useImages();
  return (
    <>
      <h1 className='section-title'>01 Discover</h1>

      <div className='callout mb-8'>
        <p className='font-medium'>How to build a solution that works?</p>
      </div>

      <p className='mb-3'>
        I conducted research to gain a better understanding of potential
        frictions users face when shopping online. These are my goals:
      </p>

      <div>
        <img src={`${zaraImg.goals}`} alt='User search goals' />
      </div>

      <div className='sub-section-container'>
        <h3 className='sub-section-title '>Website Audit</h3>
        <p className='mb-9'>Here is what I found browsing through Zara.com.</p>
        <img src={`${zaraImg.webHomePage}`} alt='Zara home page' />
        <p className='my-9'>
          From the home page, I am not sure where to go to look for product
          categories. It is hard to find the navigation menu. The text size is
          small and barely visible against the colored background.
        </p>

        <div className='image-text-container-l items-center gap-2 mb-6 '>
          <div className='image-container-l'>
            <img src={`${zaraImg.webProdPg}`} alt='Original product page' />
          </div>

          <div className='mt-6 md:w-1/3 md:mt-0'>
            <p className='mb-6'>
              The shop layouts deviates from typical UI patterns we see on other
              e-commerce websites, where we see product cards displayed in
              uniform grid.
            </p>
            <p>
              Each product category page layouts are also inconsistent (see
              left).
            </p>
          </div>
        </div>

        <div className='image-text-container-r gap-2 items-center'>
          <div className='md:w-1/3'>
            <p className='mb-6'>
              Overall, the lack of visual cues make the website clunky to
              navigate.
            </p>
            <p className='mb-6'>
              We need to scroll down to see more product categories but the
              indicator is barely visible.
            </p>
            <p className='mb-6'>
              The loading indicator is also tiny and is positioned on the very
              top right corner.
            </p>
          </div>
          <div className='image-container-r md:-mt-0'>
            <img src={`${zaraImg.webCTA}`} alt='Original call to action' />
          </div>
        </div>
      </div>

      <div className='sub-section-container'>
        <h3 className='sub-section-title '>Competitor Analysis</h3>
        <div className='callout mb-8'>
          <p className='font-medium'>What are our competitors doing?</p>
        </div>
        <p className='mb-8'>
          I looked into the websites of Zara’s direct competitors, smaller-scale
          e-commerce shops, and well-established luxury brands to explore design
          choices and generate inspiration for my designs.
        </p>
        <img src={`${zaraImg.compAnalysis}`} alt='Competitor analysis' />
        <p className='mt-8'>
          In summary, these websites use a diverse range of design choices
          (combining navigation features, accent colors, UI layouts, etc.) to
          highlight call-to-actions and guide users on completing their tasks.
          This provided me with an abundant design toolkit to work with later
          on.
        </p>
      </div>

      <div className='subsection-container'>
        <h3 className='sub-section-title  mt-16'>User Research</h3>
        <p className='mb-10'>
          I interviewed 8 participants between the ages of 22 to 36, who
          frequently shop online, through video calls and in-person chats. I
          recruited my participants from my personal network and design
          communities.
        </p>
        <img src={`${zaraImg.userResearch}`} alt='User research result' />
      </div>
    </>
  );
};

export default ZaraDiscover;
