import React from "react";
import { useImages } from "../../../context/ImageContext";

const DepopSummary = () => {
  const { depopImg } = useImages();

  return (
    <>
      <div className='mb-16'>
        <h2 className='section-title'>
          Integrating a new rental feature seamlessly onto e-commerce app Depop
        </h2>
        <p className='medium-text mb-16'>
          Cloth rental is one of the novel ways the fashion industry tackles
          sustainability challenges. I led an UX design team to build a new
          feature for Depop that allows shoppers to rent fashion pieces on the
          app and encourage rapport / community-building between buyers and
          sellers. I targeted our design to create more business value and
          presented it at a design-conference hosted by Depop.
        </p>

        <div className='mb-[64px]'>
          <h3 className='title-red mb-[20px]'>The problem</h3>
          <p className='medium-text-lg mb-[36px]'>
            Depop is an early entrant. There are very few clothing rental
            services on e-commerce apps and those that exist remain
            under-utilized.
          </p>
          <p>
            78% of shoppers express willingness to rent instead of buy a piece
            of clothing, especially clothing for special occasions. However,
            many either do not know of these services or face difficulties using
            existing rental services (i.e. Selfridges), particularly when it
            comes to understanding rental policies.
          </p>
        </div>

        <div className='mb-[64px]'>
          <h3 className='title-red mb-[20px]'>Our goal</h3>
          <p className='medium-text-lg'>
            How can we introduce the rental feature onto Depop’s existing
            platform and encourage its usage to the app users?
          </p>
        </div>

        <div className='mb-[64px]'>
          <h3 className='title-red mb-[20px]'>Outcome</h3>
          <p className='text-[22px]'>
            Integrated a rental tab to Depop’s product item page along with
            rental date selection, guidance and policies, and a chat function
            with the shop owner. These features align with the existing Depop
            user journey with additional components such as ‘Available to rent’
            tags added to the UI.
          </p>
        </div>

        <div className='md:flex md:flex-row'>
          <div className='md:pr-[124px] md:mb-[0px] mb-[32px]'>
            <p className='text-[16px] mb-[24px]'>Current Depop product page:</p>
            <div className='flex justify-center'>
              <img
                className='max-w-[220px]'
                src={`${depopImg.buyPage}`}
                alt='Depop original buy page'
              />
            </div>
          </div>
          <div className='md:w-2/3'>
            <div className='md:flex md:flex-row '>
              <div className='md:w-1/3'>
                <p className='text-[16px] mb-5'>New rental feature:</p>
                <ul className='text-[16px] bullet-points md:mb-0 mb-6'>
                  <li>Date selection</li>
                  <li>Guidance and policies</li>
                  <li>Chat with shop owner</li>
                </ul>
              </div>
              <div className='md:w-2/3 flex md:justify-end justify-center'>
                <img
                  className='max-w-[327px]'
                  src={`${depopImg.finalDesign}`}
                  alt='Depop Final Design'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepopSummary;
