// src/components/ProgramCard.jsx
console.log('[debug] ProgramCard.jsx loaded');

const programImages = {
  Education: new URL('../assets/images/education.jpg', import.meta.url).href,
  Relief: new URL('../assets/images/relief.jpg', import.meta.url).href,
  Community: new URL('../assets/images/dawah.jpg', import.meta.url).href,
};

export default function ProgramCard({ title = "Program Title", description = "Short description of the program." }) {
  const imageSrc = programImages[title] || "https://via.placeholder.com/200x120";
  return (
    <div className="program-card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}  
