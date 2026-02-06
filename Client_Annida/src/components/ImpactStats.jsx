// src/components/ImpactStats.jsx
import './ImpactStats.css';

console.log('[debug] ImpactStats.jsx loaded');
export default function ImpactStats() {
  const stats = [
    { number: "10+", label: "Years of Service" },
    { number: "50,000+", label: "Beneficiaries" },
    { number: "120", label: "Projects Completed" },
  ];

  return (
    <div className="impact-stats">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <h2 className="stat-number">{stat.number}</h2>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
} 
