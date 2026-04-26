  import "./Footer.css";
  import { useNavigate, useLocation } from "react-router-dom";

  function Footer() {
    const routerNavigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (id) => {
      if (location.pathname !== "/") {
        routerNavigate("/", { state: { scrollTo: id } });
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + document.body.scrollTop - offset;
        document.body.scrollTo({ top, behavior: "smooth" });
      }
    };

    const handleHome = () => {
      if (location.pathname !== "/") {
        routerNavigate("/", { state: { scrollTo: "top" } });
        return;
      }
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <footer className="footer">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="logo" onClick={handleHome} style={{ cursor: "pointer" }}>
            <span className="logo-bake">Bake</span>
            <span className="logo-flow">Flow</span>
          </h3>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Menu</h3>
          <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={() => handleNavClick("features")}>Features</li>
            <li onClick={() => handleNavClick("pricing")}>Pricing</li>
            <li onClick={() => handleNavClick("article")}>Articles</li>
            <li onClick={() => handleNavClick("contact")}>Contact</li>
            <li onClick={() => routerNavigate("/our-team")}>Our Team</li>
            <li onClick={() => routerNavigate("/design-system")}>Design System</li>
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
    );
  }

  export default Footer;