import React from "react";
import { useGlobalContext } from "../../../context/Context";
import { useImages } from "../../../context/ImageContext";
import ImageModal from "../ImageModal";

const ZaraDesign = () => {
  const { zaraImg } = useImages();
  const { isModalOpen, openModal } = useGlobalContext();

  return (
    <>
      <h1 className='section-title'>03 Design</h1>
      <p className='mb-9'>
        Since I am focusing on Ed’s navigation experience on Zara, I built out
        the home page, search page, product categories page, as well as
        collections page to demonstrate this.
      </p>
      <div>
        <img
          src={`${zaraImg.wireFrame}`}
          alt='Wire frame'
          className='md:block hidden cursor-pointer h-full'
          onClick={() => openModal(zaraImg.wireFrame)}
        />
        <img
          src={`${zaraImg.wireFrame}`}
          alt='Wire frame'
          className='md:hidden block '
        />
      </div>
      <div className='md:block hidden mt-12 text-center'>
        <p
          className='underline cursor-pointer'
          onClick={() => openModal(zaraImg.wireFrame)}>
          Click to enlarge
        </p>
      </div>
      {isModalOpen && <ImageModal />}
      <div className='sub-section-container mt-12'>
        <h3 className='sub-section-title'>The Brand</h3>
        <p className='mb-9'>
          Zara’s brand identity is best described as embodying a minimalistic
          editorial magazine with a strong emphasis on its collection pieces.
        </p>
        <div className='-mx-[18px] md:-mx-[282px]'>
          <img src={`${zaraImg.brand}`} alt='Zara brand' className='w-full' />
        </div>
      </div>
      <div className='sub-section-container'>
        <h3 className='sub-section-title'>UI Kit</h3>
        <p className='mb-9'>
          With this in mind, I built a UI Kit to ensure design consistency going
          forward.
        </p>
        <img src={`${zaraImg.uiKit}`} alt='UI Kit' />
      </div>
      <div className='sub-section-container'>
        <h3 className='sub-section-title'>Visual Design</h3>
        <div className='callout'>
          <p className='font-medium'>
            I tailor my design solutions to address the 3 areas of friction
            (navigation, accessibility, calls to action) that Ed faces.
          </p>
        </div>

        <div>
          <p className='font-medium mb-4'>NAVIGATION</p>
          <p className='font-medium mb-6'>
            Integrate the navigation panel with a search bar
          </p>
          <p className='mb-9'>
            Since many users said the search bar is the first component they
            click in an e-commerce website, my design embeds the navigation
            panel within the search bar.
          </p>
          <div>
            <img
              src={`${zaraImg.nav}`}
              alt='Navigation panels'
              className='mb-9'
            />
          </div>

          <p className='mb-9'>
            Having the navigation panel take up the whole page allows the user
            to view all product categories without the need to scroll. This also
            allows us to add additional content under the search bar. In my
            case, I added recent searches and trending items.
          </p>
          <p className='font-medium mb-9'>
            Horizontal browsing for collections and vertical scroll for
            collection content
          </p>
          <div>
            <img
              src={`${zaraImg.collectionSlider}`}
              alt='Collection slider navigation'
            />
          </div>

          <div className='image-text-container-l items-center md:gap-2 mb-9'>
            <img
              src={`${zaraImg.collectionNav}`}
              alt='Sample collections content'
              className='image-container-l'
            />
            <div className='md:w-1/3 mt-6 md:-mt-48'>
              <p className='mb-6'>
                Consistent designs across the website makes navigation more
                intuitive. I replicated how collection pages are laid out to
                match the home page.
              </p>
              <p className='mb-6'>
                Instead of putting all collection content vertically on one
                page, I made each collection take up its own page that the user
                can navigate by scrolling horizontally.
              </p>
              <p className='mb-6'>
                If the users want to see the content of the collection, they can
                scroll down to see the collection in detail.
              </p>
            </div>
          </div>

          <div className='image-text-container-r gap-2 mb-9'>
            <div className='md:w-1/3'>
              <div>
                <p className='font-medium mb-6'>Availability in store</p>
                <p className='mb-6'>
                  I created additional filter criteria that allow users to find
                  all items available at a specified store.
                </p>
                <p className='mb-6 md:mb-0'>
                  Users can search by postcode or keywords.
                </p>
              </div>
            </div>
            <div className='image-container-r'>
              <img
                src={`${zaraImg.prodAvaiFilter}`}
                alt='Store availability filter'
              />
            </div>
          </div>
        </div>

        <p className='font-medium mb-9'>UI LAYOUT</p>

        <div className='image-text-container-l items-center gap-2 mb-9'>
          <div className='image-container-l'>
            <img
              src={`${zaraImg.filter}`}
              alt='Product filter'
              className='mb-6'
            />
          </div>
          <div className='md:w-1/3'>
            <p className='font-medium mb-6 md:-mt-56'>
              Consistent design across product category pages (top) and search
              pages (bottom)
            </p>
            <p>
              This involved having the same filters at the top across pages and
              their visual designs consistent. I also made all filters visible
              to the user without the need to click on an additional page.
            </p>
          </div>
        </div>

        <div className='mb-9'>
          <p className='font-medium mb-6'>VISUAL AFFORDANCE</p>
          <div className='image-text-container-r items-center mb-9'>
            <div className='md:w-1/3 mb-6 md:mb-0'>
              <p className='font-medium mb-6 md:-mt-48'>
                Thumbnails as user feedback
              </p>
              <p>
                When the webpage updates, instead of using a loading indicator,
                I created a loading screen with thumbnails to make it clear to
                the user their input is triggering an update.
              </p>
            </div>
            <div className='image-container-r'>
              <img src={`${zaraImg.thumbnail}`} alt='Loading thumb nail' />
            </div>
          </div>

          <div className='image-text-container-l items-center mb-9'>
            <div className='image-container-l'>
              <img src={`${zaraImg.cta}`} alt='Call to action check out' />
            </div>

            <div className='md:w-1/3 mt-6 md:-mt-48'>
              <p className='font-medium mb-6'>Clearer call to action</p>
              <p>
                I redesigned the product page to enlarge all text and made use
                of accent colors to highlight major call-to-actions such as
                selecting sizing and ‘add to cart’.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZaraDesign;
