// src/components/GalleryGrid.jsx
console.log('[debug] GalleryGrid.jsx loaded');
export default function GalleryGrid() {
  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
  ];

  return (
    <div className="gallery-section">
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Gallery</h2>
      <div className="gallery" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Gallery ${idx + 1}`} style={{ width: "300px", height: "200px", objectFit: "cover", margin: "10px", borderRadius: "8px" }} />
        ))}
      </div>
    </div>
  );
} 
