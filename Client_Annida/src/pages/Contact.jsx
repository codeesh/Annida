console.log('[debug] Contact.jsx loaded');
export default function Contact() {
  return (
    <section className="page-container">
      <div className="inner">
        <h1 style={{ marginBottom: "20px" }}>Get in touch</h1>
        <p style={{ marginBottom: "20px" }}>Use this form to send us a message (non-functional dummy form).</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <input placeholder="Name" style={{ flex: 1, padding: 8 }} />
            <input placeholder="Email" style={{ flex: 1, padding: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <textarea placeholder="Message" style={{ width: "100%", padding: 8, minHeight: 120 }} />
          </div>
          <button type="submit" style={{ padding: "10px 18px" }}>Send Message</button>
        </form>
      </div>
    </section>
  );
}   
