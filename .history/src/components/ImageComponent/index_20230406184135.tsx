import React, { useState } from 'react';

interface Props {
  imageSrc: string;
}

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
        style={{ cursor: 'pointer', maxWidth: '50%', maxHeight: '50%' }}
      />
      {isImageClicked && (
        <img
          src={imageSrc}
          alt="imagem ampliada"
          onClick={handleImageClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'scale-down',
            zIndex: 100,
            cursor: 'pointer',
            maxWidth: '90%',
            maxHeight: '90%',
          }}
        />
      )}
    </div>
  );
};

export default ImageComponent;
