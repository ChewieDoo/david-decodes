import React from "react";
import { useImages } from "../../../context/ImageContext";

const DepopDesignFeature = () => {
  const { depopImg } = useImages();
  return (
    <div>
      <h3 className='title-red mb-[64px]'>Key features of Depop rental</h3>

      <div className='md:flex md:flex-row mb-[42px]'>
        <div className='md:w-1/2'>
          <h3 className='subtitle-bold mb-[32px]'>
            Product tags and filter options
          </h3>
          <p className='text-[20px] md:mb-0 mb-6'>
            Introduced a new filter, “Available to rent”, which shoppers can
            switch on when they search for products and see pieces sellers are
            willing to rent out. Products available for rental are given a
            purple-colored label (similar to items on discount) to make them
            stand out.
          </p>
        </div>
        <div className='md:w-1/2 flex md:justify-end justify-center'>
          <img
            className='max-w-[327px]'
            src={`${depopImg.filterTags}`}
            alt='Product tags and filter option'
          />
        </div>
      </div>

      <div className='md:flex md:flex-row mb-[42px]'>
        <div className='md:w-1/2 flex justify-center'>
          <img
            className='max-w-[327px] md:mb-0 mb-6'
            src={`${depopImg.rentalTabs}`}
            alt='Rental tab'
          />
        </div>
        <div className='md:w-1/2'>
          <h3 className='subtitle-bold mb-[32px]'>
            Rental tab in product item page
          </h3>
          <p className='text-[20px]'>
            For pieces available to rent, shoppers can switch between “Buy” and
            “Rental” tabs on the product page. The rental tab displays rental
            policies, notes written out by the seller, rental fee, pick up
            options, and available dates for rental. Shoppers can proceed to
            checkout by selecting rental dates of interest.
          </p>
        </div>
      </div>

      <div className='md:flex md:flex-row mb-[42px]'>
        <div className='md:w-1/2'>
          <h3 className='subtitle-bold mb-[32px]'>Building Rapport</h3>
          <p className='text-[20px] md:mb-0 mb-6'>
            Shoppers can reach out to sellers through chat functions on the
            product rental tab and later on through different stages of rental.
            Shoppers can also visit the seller’s shop page to see reviews left
            by previous customers.
          </p>
        </div>
        <div className='md:w-1/2 flex md:justify-end justify-center'>
          <img
            className='max-w-[327px]'
            src={`${depopImg.rapport}`}
            alt='Chat page'
          />
        </div>
      </div>

      <div className='md:flex md:flex-row'>
        <div className='md:w-1/2 flex justify-center'>
          <img
            className='max-w-[327px] md:mb-0 mb-6'
            src={`${depopImg.checkout}`}
            alt='Rental check out'
          />
        </div>
        <div className='md:w-1/2'>
          <h3 className='subtitle-bold mb-[32px]'>
            Rental check-out and tracking
          </h3>
          <p className='text-[20px]'>
            Upon making rental request, the shopper can view the rental process
            and are notified when their request is approved. The process also
            informs the shopper which rental stage they are at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepopDesignFeature;
