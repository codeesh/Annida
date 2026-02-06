// src/components/GalleryGrid.jsx
import { useState } from 'react';
console.log('[debug] GalleryGrid.jsx loaded');

const educationImg = new URL('../assets/images/education.jpg', import.meta.url).href;
const reliefImg = new URL('../assets/images/relief.jpg', import.meta.url).href;
const dawahImg = new URL('../assets/images/dawah.jpg', import.meta.url).href;

export default function GalleryGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: educationImg, label: 'Education Programs' },
    { src: reliefImg, label: 'Relief Efforts' },
    { src: dawahImg, label: 'Community Dawah' },
    { src: educationImg, label: 'Education Programs' },
    { src: reliefImg, label: 'Relief Efforts' },
    { src: dawahImg, label: 'Community Dawah' },
  ];

  return (
    <div className="gallery-section">
      <h2 className="page-title">Gallery</h2>
      <div className="gallery">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="gallery-item-wrapper"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
          >
            <img
              src={item.src}
              alt={item.label}
              className={`gallery-item ${hoveredIndex === idx ? 'hovered' : ''}`}
            />
            <div className={`gallery-overlay ${hoveredIndex === idx ? 'active' : ''}`}>
              <p className="gallery-text">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
