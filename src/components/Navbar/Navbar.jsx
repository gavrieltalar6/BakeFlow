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
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight;

      setPastHero(window.scrollY > trigger);
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar 
      ${scrolled ? "scrolled" : ""} 
      ${pastHero ? "hide" : "show"}`}
    >
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
