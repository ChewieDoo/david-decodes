import React from "react";
import { useImages } from "../../../context/ImageContext";

const DepopResearch = () => {
  const { depopImg } = useImages();
  return (
    <div>
      <h3 className='title-red mb-[24px]'>Research at a glance</h3>

      <div className='mb-16'>
        <h3 className='text-[32px] mb-[24px]'>
          What criteria do shoppers evaluate when deciding to rent a piece of
          clothing on a mobile app?
        </h3>
        <p>
          Desktop Research | Storyboarding | Speed-dating | User survey |
          Persona Mapping
        </p>
      </div>

      <div className='mb-[56px]'>
        <h3 className='subtitle-bold mb-[24px]'>
          What goes into cloth rental decision making?
        </h3>
        <p className='mb-[36px]'>
          We spoke to 10+ e-commerce shoppers who have used Depop before to
          learn about their opinion of renting cloth on a peer-to-peer mobile
          app. While most of them expressed interest in considering cloth rental
          for different reasons, I noticed similarities in concerns around trust
          and transparency, which led me to these 4 insights:
        </p>

        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='callout-round m-[12px] pt-[24px] pb-[42px] px-[48px]'>
            <p className='text-[#E72000] Sk-Modernist-Bold text-center mb-[24px]'>
              Insight 1
            </p>
            <p className='text-center'>
              Ambiguous rental policies and processes can lead to shoppers
              losing confidence renting.
            </p>
          </div>
          <div className='callout-round m-[12px] pt-[24px] pb-[42px] px-[48px]'>
            <p className='text-[#E72000] Sk-Modernist-Bold text-center mb-[24px]'>
              Insight 2
            </p>
            <p className='text-center'>
              Shoppers feel confident renting from someone they know or a
              community- approved seller.
            </p>
          </div>
          <div className='callout-round m-[12px] pt-[24px] pb-[42px] px-[48px]'>
            <p className='text-[#E72000] Sk-Modernist-Bold text-center mb-[24px]'>
              Insight 3
            </p>
            <p className='text-center'>
              Shoppers would like the option to try out pricier pieces (i.e.
              designer) before committing to buying it.
            </p>
          </div>
          <div className='callout-round m-[12px] pt-[24px] pb-[42px] px-[48px]'>
            <p className='text-[#E72000] Sk-Modernist-Bold text-center mb-[24px]'>
              Insight 4
            </p>
            <p className='text-center'>
              Special occasions and events are great opportunities for cloth
              rental since most pieces are worn one-off.
            </p>
          </div>
        </div>
      </div>

      <div className='mb-[56px]'>
        <h3 className='subtitle-bold mb-[54px]'>
          What needs have users validated through speed-dating?
        </h3>

        <div>
          <div className='grid md:flex gap-[36px] mb-[24px]'>
            <div className='callout-round-transparent flex-1'>
              <p className='text-[16px]'>
                A{" "}
                <span className='Sk-Modernist-Bold'>
                  seamless integration of the ‘buy’ and ‘rent’ sides{" "}
                </span>{" "}
                of the user interface
              </p>
            </div>

            <div className='callout-round-transparent flex-1'>
              <p className='text-[16px]'>
                <span className='Sk-Modernist-Bold'>
                  {" "}
                  Transparent rental process{" "}
                </span>
                and easily understood rental policy
              </p>
            </div>
            <div className='callout-round-transparent flex-1'>
              <p className='text-[16px]'>
                {" "}
                <span className='Sk-Modernist-Bold'>
                  Open communication{" "}
                </span>{" "}
                between shoppers and sellers
              </p>
            </div>
          </div>
          <div className='md:flex justify-center mb-[12px] hidden'>
            <img
              className='max-w-[640px] '
              src={`${depopImg.arrows}`}
              alt='Arrows'
            />
          </div>
          <div className='md:hidden flex justify-center mb-[12px]'>
            <img
              className='max-w-[640px] '
              src={`${depopImg.downArrow}`}
              alt='Down Arrow'
            />
          </div>

          <div className='callout-round md:px-[156px] px-[22px] py-[42px]'>
            <div>
              <div className='flex justify-center'>
                <img
                  className='max-w-[86px] mb-[24px]'
                  src={`${depopImg.logo}`}
                  alt='Depop Rental Logo'
                />
              </div>
              <p className='text-[16px] text-center'>
                We landed on the design idea of{" "}
                <span className='Sk-Modernist-Bold'>
                  a rental tab for each product page that is seamlessly
                  integrated onto the Depop platform using existing app
                  components.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='subtitle-bold mb-[42px]'>
          How does the rental feature fit into the user journey?
        </h3>
        <img src={`${depopImg.userJourney}`} alt='Depop user journey' />
      </div>
    </div>
  );
};

export default DepopResearch;
