console.log('[debug] Donate.jsx loaded');
export default function Donate() {
  return (
    <section className="page-container">
      <div className="inner">
        <h1 className="page-title">Donate to Annida</h1>
        <p className="text-muted" style={{ marginBottom: "20px" }}>
          Your support helps us reach more people. Select a sample tier below to simulate donation.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          <button className="btn btn-primary">$10 — Feed a child</button>
          <button className="btn btn-primary">$25 — School supplies</button>
          <button className="btn btn-primary">$100 — Community support</button>
        </div>
        <div>
          <label style={{ marginRight: 8, color: "#073B2A", fontWeight: 500 }}>Other amount:</label>
          <input className="form-input" type="number" placeholder="$50" />
          <button className="btn btn-primary" style={{ marginLeft: 12 }}>Give</button>
        </div>
      </div>
    </section>
  );
}   
