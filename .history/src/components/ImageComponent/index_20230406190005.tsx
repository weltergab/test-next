import React, { useState } from 'react';

type Props = {
  imageSrc: string;
};

const ImageComponent: React.FC<Props> = ({ imageSrc }) => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return (
    <div className="relative max-w-full max-h-full mx-auto">
      <div className="aspect-w-1 aspect-h-1 border border-black">
        <img
          src={imageSrc}
          alt="imagem"
          onClick={handleImageClick}
          className="w-full h-full object-cover"
        />
      </div>
      {isImageClicked && (
        <img
          src={imageSrc}
          alt="imagem ampliada"
          onClick={handleImageClick}
          className="fixed top-0 left-0 w-full h-full object-scale-down z-50 cursor-pointer max-w-90 max-h-90"
        />
      )}
    </div>
  );
};

export default ImageComponent;
