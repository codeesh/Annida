console.log('[debug] Donate.jsx loaded');
export default function Donate() {
  return (
    <section className="page-container" style={{ textAlign: "center" }}>
      <div className="inner">
        <h1 style={{ marginBottom: "20px" }}>Donate to Annida</h1>
        <p style={{ marginBottom: "20px" }}>
          Your support helps us reach more people. Select a sample tier below to simulate donation.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 20 }}>
          <button className="btn">$10 — Feed a child</button>
          <button className="btn">$25 — School supplies</button>
          <button className="btn">$100 — Community support</button>
        </div>
        <div>
          <label style={{ marginRight: 8 }}>Other amount:</label>
          <input className="form-input" type="number" placeholder="$50" />
          <button className="btn" style={{ marginLeft: 12 }}>Give</button>
        </div>
      </div>
    </section>
  );
}   
