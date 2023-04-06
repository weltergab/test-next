import React, { useState } from 'react';

type Props = {
  smallImageSrc: string;
  largeImageSrc: string;
};

function ExpandableImage({ smallImageSrc, largeImageSrc }: Props) {
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  return (
    <div>
      <img
        src={smallImageSrc}
        alt="Imagem pequena"
        className="w-48 h-36 cursor-pointer"
        onClick={handleShowImage}
      />
      {showImage ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-full max-h-full mx-auto">
            <img
              src={largeImageSrc}
              alt="Imagem ampliada"
              className="max-w-80 max-h-80"
              loading="lazy"
            />
            <button
              className="absolute top-0 right-0 p-2 m-4 text-white bg-red-500 hover:bg-red-600 rounded-full"
              onClick={handleCloseImage}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M10 8.586L13.293 5.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ExpandableImage;
