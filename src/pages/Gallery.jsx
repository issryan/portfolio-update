import React, { useState } from 'react';
import './Gallery.css';

const placeholderImages = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Media Gallery</h2>
      <div className="gallery-grid">
        {placeholderImages.map((image, index) => (
          <div 
            className="gallery-item" 
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Placeholder ${index}`} className="gallery-image" />
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