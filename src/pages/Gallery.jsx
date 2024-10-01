import React, { useState, useEffect } from 'react';
import './Gallery.css';

const totalImages = 48;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [selectedImage]);

  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(`/gallery/photo${i}.JPG`);
  }

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Media Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Fullscreen image view */}
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged view" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;