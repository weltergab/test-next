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
    <div>
      <img
        src={imageSrc}
        alt="imagem"
        onClick={handleImageClick}
        className="cursor-pointer max-w-1/2 max-h-1/2 w-full h-auto"
      />
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
