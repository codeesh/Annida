console.log('[debug] Contact.jsx loaded');
export default function Contact() {
  return (
    <section className="page-container">
      <div className="inner">
        <h1 className="page-title">Get in touch</h1>
        <p className="text-muted" style={{ marginBottom: "20px" }}>Use this form to send us a message (non-functional dummy form).</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input placeholder="Name" className="form-input" />
            <input placeholder="Email" className="form-input" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <textarea placeholder="Message" className="form-textarea" />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}   
