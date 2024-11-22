import React from "react";
import { useImages } from "../../../context/ImageContext";

const ZaraDeliver = () => {
  const { zaraImg } = useImages();

  return (
    <>
      <h1 className='section-title'>04 Deliver</h1>
      <p className='mb-9'>
        My final prototype shows Ed’s navigating and browsing journey from first
        arriving at the home page to finding a product he is looking for, which
        is a matrix-inspired trench coat.
      </p>
      <div className='video-responsive mb-10'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/8Baa_CPoXn4?si=gw2qxaUgGaCrG6AJ'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
      <div className='sub-section-container'>
        <h3 className='sub-section-title'>What’s next?</h3>
        <div className='callout'>
          <p className='font-medium'>
            Design additional user flows and web pages that come after browsing
          </p>
        </div>
        <p>
          These include user flow for favoriting items, sign-ups, and check out.
          Another way to expand on the project is to identify new flows created
          by new features I introduced such as the availability in store.
          Overall, the goal here is to close the loop on the various user flows
          to build an MVP for the users.
        </p>
        <div className='callout'>
          <p className='font-medium'>
            Design and conduct a usability test with MVP on a group of
            participants
          </p>
        </div>
        <p>
          Design user tasks and KPIs to measure, set timelines, build out
          workflow, and identify participants. This will allow me to gain
          insight into how the user interacts with the new components, whether
          they make a difference from the old user flow, and see if the
          assumptions from my design-thinking hold up.
        </p>
        <div className='callout'>
          <p className='font-medium'>
            Review insights from the usability test and make adjustments to my
            design
          </p>
        </div>
        <p className='mb-10'>
          User insights will generate further questions and actions for me to
          act upon to improve my design.
        </p>
        <h3 className='sub-section-title'>What I've learned</h3>
        <p className='mb-6'>
          Having my initial understanding of the Zara website’s situation is
          equally as important as listening to the user. The initial website
          audit allowed me to find potential areas of ‘friction’ in the user
          journey and design my user research.
        </p>
        <p className='mb-6'>
          Understanding the user and scanning what our competitors are doing, it
          became clear what the problem is and what tools I need to tackle these
          problems.
        </p>
        <p className='mb-6'>
          I learned a lot from working on this project and stay tuned for more
          case studies coming up!
        </p>
      </div>
    </>
  );
};

export default ZaraDeliver;
