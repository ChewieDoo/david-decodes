import React from "react";

const ZaraSummary = () => {
  return (
    <>
      <div className='mb-16'>
        <h2 className='section-title '>
          Design a frictionless online shopping experience
        </h2>
        <p className='medium-text mb-16'>
          Zara is a global leader in fast fashion and its stores offer the
          widest selection of the trendiest clothing for shoppers.
        </p>

        <blockquote>
          <p className='mb-6'>
            “Fast fashion industry continues to grow rapidly and is expected to
            reach $142.06 billion by the end of 2024 at a CAGR of 15.5%.”
          </p>
          <footer>The Business Research Company, 2020</footer>
        </blockquote>
        <p>
          With innovations such as augmented reality and the growing popularity
          of online shopping, brands are racing to digitalize their shopping
          experience to capture these opportunities.
        </p>
      </div>

      <div className='mb-16'>
        <p className='font-medium mb-5'>Challenge</p>
        <p className='mb-9'>
          Zara makes most of its sales at physical stores and has a website.
          However, it is historically known for its low usability, clunky
          interface, and questionable design choices. Zara wants to refresh its
          website to make it intuitive to use and address customer’s needs.
        </p>

        <div className='callout-sm'>
          <p className='font-medium'>
            How to design a frictionless online shopping experience for
            customers on Zara while maintaining a minimalistic and
            trendy-setting style the brand projects?
          </p>
        </div>
      </div>

      <div className='mb-16'>
        <p className='font-medium mb-5'>Solution</p>
        <p>
          A re-design of Zara website’s user flow and visuals, focusing on
          navigation, product browsing, and searching. The end product is a
          responsive e-commerce website maintaining Zara’s brand aesthetics
          while offering clear call-to-actions for the user.
        </p>
      </div>
    </>
  );
};

export default ZaraSummary;
