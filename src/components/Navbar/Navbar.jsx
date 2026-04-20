import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);

    if (id === "hero") {
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
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => navigate("hero")}>
        BakeFlow
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.id} onClick={() => navigate(link.id)}>
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
