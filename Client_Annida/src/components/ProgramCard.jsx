// src/components/ProgramCard.jsx
console.log('[debug] ProgramCard.jsx loaded');
export default function ProgramCard({ title = "Program Title", description = "Short description of the program." }) {
  return (
    <div className="program-card">
      <img src="https://via.placeholder.com/200x120" alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}  
