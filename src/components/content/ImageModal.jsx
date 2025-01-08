import React from "react";
import { useGlobalContext } from "../../context/Context";

const ImageModal = () => {
  const { selectedImage, closeModal, isModalOpen } = useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className='fixed hidden inset-0 md:flex items-center justify-center bg-black bg-opacity-75 cursor-pointer'
      onClick={handleOverlayClick}>
      <div className='relative md:flex hidden'>
        <img
          src={selectedImage}
          alt='Enlarged'
          className='max-w-[800px] md:max-w-[1242px]'
        />
      </div>
      <button
        onClick={closeModal}
        className='absolute md:flex hidden text-[32px] font-thin top-2 right-2 text-white rounded-full p2'>
        &times;
      </button>
    </div>
  );
};

export default ImageModal;
