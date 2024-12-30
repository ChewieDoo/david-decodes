import React from "react";
import { useImages } from "../../../context/ImageContext";

const DepopIterations = () => {
  const { depopImg } = useImages();
  return (
    <div>
      <h3 className='title-red mb-[24px]'>Design Iterations</h3>
      <h3 className='text-[32px] mb-[36px]'>
        Seamlessly integrating rental feature into existing interface
      </h3>
      <div>
        <h3 className='subtitle-bold mb-[24px]'>
          Flagging out open to rent products
        </h3>
        <p>
          We noticed that Depop flags out products that are on discount or are
          new on the market place with a{" "}
          <span className='Sk-Modernist-Bold'>
            colored tag system. Extending this system towards products open to
            rent{" "}
          </span>
          feels instinctive and aligns with Depop’s design system.
        </p>
        <img src={`${depopImg.productTag}`} alt='Rental product tags' />
      </div>

      <div className='mb-[32px]'>
        <h3 className='subtitle-bold mb-[24px]'>
          Seamless switch between Buy and Rent tabs
        </h3>
        <p>
          Initially, I positioned the rental button at the{" "}
          <span className='Sk-Modernist-Bold'>floating action tab</span>{" "}
          underneath the product page. However, many users expressed concerns on
          difficulty locating it. It also made sense to design a new page for
          product rental due to the{" "}
          <span className='Sk-Modernist-Bold'>
            different specifications compared to the product page.
          </span>{" "}
          To address this,{" "}
          <span className='Sk-Modernist-Bold'>
            I separated Buy and Rent into 2 tabs on the product page
          </span>{" "}
          that the users can just swipe to access.{" "}
        </p>
        <img src={`${depopImg.buyRentTab}`} alt='Depop buy and rent tabs' />
      </div>

      <div>
        <h3 className='subtitle-bold mb-[24px]'>
          Building rapport between buyers and sellers{" "}
        </h3>
        <p className='mb-[24px]'>
          To encourage the building rapport between buyers and sellers, I
          embedded a chat function where shoppers can directly chat with sellers
          from the product page. Having{" "}
          <span className='Sk-Modernist-Bold'>
            a chat centered directly around a product
          </span>{" "}
          allowed shoppers to ask specific questions on sizing, product, and any
          specific rental procedures.
        </p>
        <img src={`${depopImg.chat}`} alt='Depop chat and rapport functions' />
      </div>

      <div>
        <h3 className='subtitle-bold mb-[24px]'>
          Rental policies specific to each product
        </h3>
        <p className='mb-[24px]'>
          We switched from displaying an universal rental policy on the
          shop-owner’s page to having{" "}
          <span className='Sk-Modernist-Bold'>
            customizable rental policy tags
          </span>{" "}
          underneath each product page. The function would allow sellers to
          select a subset of rental policies they would like to apply for
          specific products they rent out.
        </p>
        <img
          src={`${depopImg.policy}`}
          alt='Depop customizable rental policies'
        />
      </div>

      <div>
        <h3 className='subtitle-bold mb-[24px]'>
          UI Components built from Depop design systems
        </h3>
        <p className='mb-[24px]'>
          I built the components of the new rental feature around Depop’s
          existing design systems.
        </p>
        <img src={depopImg.uiKit} alt='Depop design system' />
      </div>
    </div>
  );
};

export default DepopIterations;
