import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/An_Nida_Logo_white_version.png";
import ukFlag from "../assets/icons/united-kingdom.png";
import bdFlag from "../assets/icons/bangladesh.png";

export default function Navbar() {
  // initialize from localStorage so selection persists across reloads
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch (e) {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
    console.log("[debug] language set to", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "bn" : "en"));

  const flagSrc = lang === "en" ? ukFlag : bdFlag;
  const label = lang === "en" ? "English" : "Bangla";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="An-Nida Logo" className="logo-image" />
      </Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions" aria-label="language selector">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-pressed={lang === "bn"}
            aria-label={`Change language (current: ${label})`}
          >
            <img className="flag" src={flagSrc} alt={label} />
            <span className="visually-hidden">{label}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
