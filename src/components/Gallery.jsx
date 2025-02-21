import { useEffect } from "react";

import BlahBlah from "./BlahBlah";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col md:flex-row mt-9 mb-9 ml-9 mr-0.5'>
      <div className='w-full md:w-1/4'>
        <BlahBlah>
          <h1 className='hello-text Sk-Modernist mb-6'>This is the gallery.</h1>
          <p className='intro-text Sk-Modernis mb-6 max-w-48 '>
            Basically the cookie crumbs that is my work and life.
          </p>
          <p className='intro-text Sk-Modernist max-w-48'>
            More things to come... stay tuned.
          </p>
        </BlahBlah>
      </div>
    </div>
  );
};

export default Gallery;
