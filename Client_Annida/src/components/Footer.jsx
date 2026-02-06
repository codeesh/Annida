import { Link } from 'react-router-dom';
import logo from '../assets/logo/An_Nida_Logo_white_version.png';

console.log('[debug] Footer.jsx loaded');

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-left">
          <img src={logo} alt="An-Nida Logo" className="footer-logo" />
        </div>

        {/* Golden Vertical Divider */}
        <div className="footer-divider"></div>

        {/* Right Section - Contact Details & Message Button */}
        <div className="footer-right">
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@annida.org">contact@annida.org</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p>
              <strong>Address:</strong> Annida Foundation, 123 Community Street, Bangladesh
            </p>

            <Link to="/contact" className="btn btn-primary footer-btn">
              Send Message
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Developed by ESHTAB RAK MAHMUD | for Annida Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}