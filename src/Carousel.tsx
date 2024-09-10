import React, { useState, useEffect } from 'react';

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        goToNextImage();
      } else if (event.key === 'ArrowLeft') {
        goToPreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const goToNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPreviousImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
    <div className="carousel-image-container">
      <button className="prev" onClick={goToPreviousImage}>❮</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="next" onClick={goToNextImage}>❯</button>
    </div>
  
    <div className="thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`thumbnail ${currentIndex === index ? "active" : ""}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>
  
  );
};

export default ProductCarousel;
