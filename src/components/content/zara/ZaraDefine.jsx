import React from "react";
import { useImages } from "../../../context/ImageContext";

const ZaraDefine = () => {
  const { zaraImg } = useImages();

  return (
    <>
      <h1 className='section-title'>02 Define</h1>
      <div className='sub-section-container'>
        <h3 className='sub-section-title '>Persona</h3>
        <p className='mb-6'>Meet Ed</p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='pr-52 md:pb-6 max-w-96 '>
            <img src={`${zaraImg.userProfile}`} alt='User profile' />
          </div>
          <div className='callout max-w-[364px]'>
            <p className='font-medium mb-2'>Bio</p>
            <p>
              Ed is a fashion enthusiast, eager to browse new pieces and
              collections. He frequently buys clothes online. His top 2 web
              shops are Uniqlo and Temu. He also has the habit of finding pieces
              online and trying them at physical stores.
            </p>
          </div>
          <div className='callout max-w-[364px]'>
            <p className='font-medium mb-2'>Goals</p>
            <ul className='bullet-points'>
              <li>
                Find unique pieces and collections with specific filter
                criteria, he is picky.
              </li>
              <li>
                Easily understand the type of clothes you can get from a
                specific collection.
              </li>
              <li>Check their availability in-store.</li>
            </ul>
          </div>
          <div className='callout max-w-[364px]'>
            <p className='font-medium mb-2'>Challenges</p>
            <ul className='bullet-points'>
              <li>
                Understanding where to go to look for specific product
                categories
              </li>
              <li>
                Looking through all available collections and understanding what
                is in it
              </li>
              <li>
                Finding a cloth he likes only to find it not available at his
                store
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='sub-section-container'>
        <h3 className='sub-section-title'>Problem definition</h3>
        <p>
          Piecing together a) Website audit, b) Competitor analysis, c) User
          interviews and the generated persona, here are 3 areas of potential
          friction Ed will face when browsing through Zara’s website:
        </p>
        <div>
          <div className=' callout-sm'>
            <p className='font-medium mb-2'>Navigation (Overall user flow)</p>
            <p>
              Navigating the website to browse products can be very complex for
              the user. The digital experience is very unpredictable as user
              flow designs deviate from typical UI patterns.
            </p>
          </div>
          <div className='callout-sm'>
            <p className='font-medium mb-2'>UI Layout</p>
            <p>
              The UI has low accessibility and the visual layout is very
              cluttered. Texts are difficult to read and high-quality videos on
              pages increase loading times. Pages are also very lengthy, leading
              to content towards the end of the page less likely to be seen by
              users.
            </p>
          </div>
          <div className='callout-sm'>
            <p className='font-medium mb-2'>
              Lack of visual affordance (UI Element)
            </p>
            <p>
              There is a lack of visual cues and unintuitive UI elements,
              resulting in a lack of clear call to action for the user. The
              layout is inconsistent across different product pages.
            </p>
          </div>
        </div>
        <p>
          My design solution targets these 3 areas of friction on the relevant
          web pages.
        </p>
      </div>
      <div className='sub-section-container'>
        <h3 className='sub-section-title'>Site map</h3>
        <div className='callout'>
          <p className='font-medium'>
            Scanning how competitor brands are designing their websites provided
            me with great insights on must-have features, and informed my design
            solutions to address Zara’s challenges.
          </p>
        </div>
        <p className='mb-7'>
          I mapped out key web pages users come across when browsing and
          searching for a product. I found key user tasks, such as using the
          search bar and filtering for products require a few extra steps,
          meaning more web pages need to be loaded. Redundant steps and
          functions within web pages make completing user tasks unnecessarily
          difficult.
        </p>
        <div>
          <p className='font-medium mb-4'>OLD SITE MAP</p>
          <img
            src={`${zaraImg.oldSiteMap}`}
            alt='Original site map'
            className='mb-8'
          />
        </div>
        <p className='mb-7'>
          In my design, I focused on eliminating these redundancies and making
          completing user tasks more intuitive. One of the biggest changes is to
          combine the search and navigation functions under a single search bar
          that triggers a drop-down when clicked, since users mentioned the
          search bar as the first component they to go to.
        </p>
        <div>
          <p className='font-medium mb-4'>NEW SITE MAP</p>
          <img src={`${zaraImg.newSiteMap}`} alt='New site map' />
        </div>
      </div>
      <div className='sub-section-container'>
        <h3 className='sub-section-title'>User flow</h3>
        <div className='callout'>
          <p className='font-medium'>
            I had users go through the original website to find a random
            product. Mapping out their journeys enabled me to understand where
            the sources of friction lie, which steps along the journey I can
            shorten, and where to streamline.
          </p>
        </div>
        <p className='mb-7'>
          I found that it takes a lot more steps for users to reach the product
          they are looking for. This is further complicated by additional web
          pages and inconsistent functionalities across the pages. For instance,
          the user can apply filters when browsing product categories but they
          cannot do so when searching for products.
        </p>
        <div>
          <p className='font-medium mb-4'>OLD USER FLOW</p>
          <img
            src={`${zaraImg.oldUserFlow}`}
            alt='Original user flow'
            className='mb-8'
          />
        </div>
        <p className='mb-7'>
          In my design, I focused on eliminating these redundancies and making
          completing user tasks more intuitive. One of the biggest changes is to
          combine the search and navigation functions under a single search bar
          that triggers a drop-down when clicked, since users mentioned the
          search bar as the first component they to go to.
        </p>
        <div>
          <p className='font-medium mb-4'>NEW USER FLOW</p>
          <img
            src={`${zaraImg.newUserFlow}`}
            alt='New user flow'
            className='mb-8'
          />
        </div>
      </div>
    </>
  );
};

export default ZaraDefine;
