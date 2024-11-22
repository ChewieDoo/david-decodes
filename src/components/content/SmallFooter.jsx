import React from "react";
import { FaReact } from "react-icons/fa";

const SmallFooter = () => {
  return (
    <footer className='text-center'>
      <div className='flex justify-center items-center'>
        <small className='mr-2 opacity-50'>Developed with React</small>
        <a href='https://react.dev/' target='_blank'>
          <FaReact size={28} className='reactLogo' />
        </a>
        <a
          className='ml-2'
          href='https://github.com/ChewieDoo/david-decodes'
          target='_blank'>
          <small
            className=' opacity-50 hover:opacity-100'
            style={{ textDecoration: "underline" }}>
            (See source code)
          </small>
        </a>
      </div>
    </footer>
  );
};

export default SmallFooter;
