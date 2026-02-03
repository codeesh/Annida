import ProgramCard from "../components/ProgramCard";

console.log('[debug] Programs.jsx loaded');
export default function Programs() {
  return (
    <section className="page-container">
      <div className="inner">
        <h1 className="page-title">Our Programs</h1>
        <div className="cards-grid">
          <ProgramCard title="Education" description="Scholarships, schools, and learning resources." />
          <ProgramCard title="Relief" description="Emergency aid and food distribution programs." />
          <ProgramCard title="Community" description="Local development and skills training." />
        </div>
      </div>
    </section>
  );
}   
