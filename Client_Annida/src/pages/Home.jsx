import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import ProgramCard from "../components/ProgramCard";
import DonateCTA from "../components/DonateCTA";
import GalleryGrid from "../components/GalleryGrid";

console.log("[debug] Home.jsx loaded");

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="page-container">
        <div className="inner">
          <ImpactStats />
        </div>
      </section>

      <section className="page-container">
        <div className="inner">
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Our Programs</h2>
          <div className="cards-grid">
            <ProgramCard title="Education" />
            <ProgramCard title="Relief" />
            <ProgramCard title="Dawah" />
          </div>
        </div>
      </section>

      <section className="page-container">
        <div className="inner">
          <DonateCTA />
        </div>
      </section>

      <section className="page-container">
        <div className="inner">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
} 
