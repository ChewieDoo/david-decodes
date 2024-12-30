import React from "react";
import { useImages } from "../../../context/ImageContext";

const DepopImpact = () => {
  const { depopImg } = useImages();
  return (
    <div>
      <h3 className='title-red mb-[24px]'>Measuring impacts</h3>
      <h3 className='text-[32px] mb-[36px]'>
        Creating cohesive and usable design
      </h3>
      <p className='mb-[64px]'>
        After conducting usability testing with 10 participants and a survey
        sent to 20+ participants, the rental feature received positive review
        with 83% of the participants expressing interest in using the rental
        feature on Depop.
      </p>
      <img
        className='mb-[108px]'
        src={`${depopImg.impactMeasurement}`}
        alt='Design impact measurement'
      />
      <div className='mb-[54px]'>
        <h3 className='subtitle-bold mb-[24px]'>What did I learn?</h3>
        <p className='mb-[24px]'>
          One of the biggest challenge in designing the UI is how to ensure the
          rental feature stands out without causing significant alterations of
          the original interface when introducing it to the user for the first
          time.
        </p>
        <p className='mb-[24px]'>
          Using Depop design principles, accent colors, and progressively
          disclosing the feature on a need-to-know basis allowed me to
          seamlessly embed this feature into the user journey.
        </p>
      </div>
      <div>
        <h3 className='subtitle-bold mb-[24px]'>Next steps</h3>
        <p className='mb-[16px]'>I had 2 things in mind:</p>
        <ol className='list-decimal pl-5 space-y-2'>
          <li>
            Finding out occasions in which shoppers would make these rental.
            This creates opportunities to further categorize open-to-rent
            products which can potentially assist shoppers in making rental
            decisions.
          </li>
          <li>
            Understand rental from the seller’s perspective and take these into
            considerations to build out the rental journey from the seller’s
            perspective.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DepopImpact;
