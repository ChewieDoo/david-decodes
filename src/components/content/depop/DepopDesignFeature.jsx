import React from "react";

const DepopDesignFeature = () => {
  return (
    <div>
      <h3 className='title-red mb-[64px]'>Key features of Depop rental</h3>

      <div className='flex flex-row mb-[42px]'>
        <div className='w-1/2'>
          <h3 className='subtitle-bold mb-[32px]'>
            Product tags and filter options
          </h3>
          <p className='text-[20px]'>
            Introduced a new filter, “Available to rent”, which shoppers can
            switch on when they search for products and see pieces sellers are
            willing to rent out. Products available for rental are given a
            purple-colored label (similar to items on discount) to make them
            stand out.
          </p>
        </div>
        <div className='w-1/2'>
          <img src='' alt='Product tags and filter option' />
        </div>
      </div>

      <div className='flex flex-row mb-[42px]'>
        <div className='w-1/2'>
          <img src='' alt='Rental tab' />
        </div>
        <div className='w-1/2'>
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

      <div className='flex flex-row mb-[42px]'>
        <div className='w-1/2'>
          <h3 className='subtitle-bold mb-[32px]'>Building Rapport</h3>
          <p className='text-[20px]'>
            Shoppers can reach out to sellers through chat functions on the
            product rental tab and later on through different stages of rental.
            Shoppers can also visit the seller’s shop page to see reviews left
            by previous customers.
          </p>
        </div>
        <div className='w-1/2'>
          <img src='' alt='Chat page' />
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='w-1/2'>
          <img src='' alt='Rental check out' />
        </div>
        <div className='w-1/2'>
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
