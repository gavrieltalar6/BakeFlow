import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logosquare.png";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const routerNavigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;

      setTimeout(() => {
        if (id === "top") {
          document.body.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const top =
            el.getBoundingClientRect().top + document.body.scrollTop - offset;
          document.body.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top =
        el.getBoundingClientRect().top + document.body.scrollTop - offset;
      document.body.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleNavClick = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Pindah ke Home dulu, bawa target scroll
      routerNavigate("/", { state: { scrollTo: id } });
      return;
    }

    scrollTo(id);
  };

  const handleLogo = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      routerNavigate("/", { state: { scrollTo: "top" } });
      return;
    }
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={handleLogo}>
        <img src={logo} alt="BakeFlow Logo" className="nav-logo-img" />
        BakeFlow
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.id} onClick={() => handleNavClick(link.id)}>
            {link.label}
          </li>
        ))}
      </ul>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
