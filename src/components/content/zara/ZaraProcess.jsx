import React from "react";

const ZaraProcess = () => {
  return (
    <>
      <h3 className='small-title mb-3'>MY PROCESS</h3>
      <div className='process-container'>
        <div className='md:w-1/4 mb-4 md:mb-0'>
          <h3 className='medium-text mb-3 font-medium'>01 Discovery</h3>
          <p className='max-w-36'>
            Research to understand our users and their challenges
          </p>
        </div>

        <div className='md:w-1/4 mb-4 md:mb-0'>
          <h3 className='medium-text mb-3 font-medium'>02 Define</h3>
          <p className='max-w-36'>Turn research into actionable insights</p>
        </div>

        <div className='md:w-1/4 mb-4 md:mb-0'>
          <h3 className='medium-text mb-3 font-medium'>03 Design</h3>
          <p className='max-w-36'>
            Brainstorm design solutions to address frictions
          </p>
        </div>

        <div className='md:w-1/4 mb-4 md:mb-0'>
          <h3 className='medium-text mb-3 font-medium'>04 Deliver</h3>
          <p className='max-w-36'>Put it all together</p>
        </div>
      </div>
    </>
  );
};

export default ZaraProcess;
