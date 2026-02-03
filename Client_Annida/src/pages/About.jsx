import React from "react";
console.log('[debug] About.jsx loaded');

export default function About() {
  return (
    <section className="page-container">
      <div className="inner">
        <h1 className="page-title">About Annida Foundation</h1>
        <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          Annida Foundation is committed to helping vulnerable communities through education, relief,
          and community development programs. This is dummy text to verify the site is rendering
          updated content correctly.
        </p>
        <ul>
          <li><strong>Founded:</strong> 2014</li>
          <li><strong>Mission:</strong> Serve with trust and transparency</li>
          <li><strong>Reach:</strong> 50,000+ beneficiaries (sample)</li>
        </ul>
      </div>
    </section>
  );
}   
