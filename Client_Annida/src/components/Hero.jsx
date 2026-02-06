// src/components/Hero.jsx
console.log('[debug] Hero.jsx loaded');

const heroImage = new URL('../assets/images/cover_photo.png', import.meta.url).href;

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="hero-title">Working for Humanity with Trust & Transparency</h1>
      <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna sit amet magna fermentum.</p>
      <div className="hero-actions">
        <button className="btn btn-primary">Donate Now</button>
        <button className="btn btn-secondary">Our Programs</button>
      </div>
    </section>
  );
} 
