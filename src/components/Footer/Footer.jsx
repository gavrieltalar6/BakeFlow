import { data } from '../../data/Data';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
    
    return (
      <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <h3 className="logo">
          <span className="logo-bake">Bake</span>
          <span className="logo-flow">Flow</span>
        </h3>
      </div>

      {/* Center Section */}
      <div className="footer-center">
        <h3>Menu</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/design-system">Design System</a></li>
          <li><a href="/our-team">Our Team</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <h3>Contact Us</h3>
        <p>✉ <b>Email:</b> <a href="mailto:halo@bakeryflow.id">halo@bakeryflow.id</a></p>
        <p>☎ <b>Phone:</b> <a href="tel:+62215550199">+62 (21) 555-0199</a></p>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 BakeryFlow. All rights reserved.</p>
      </div>
      </footer>
    )
}
export default Footer;