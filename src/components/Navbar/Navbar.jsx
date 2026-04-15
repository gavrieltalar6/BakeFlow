import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

// Ini daftar menu kita
const NAV_LINKS = [
 { id: 'features', label: 'Features' },
 { id: 'pricing', label: 'Pricing' },
 { id: 'contact', label: 'Contact' }
];

function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);

 // Mata si robot: Ngeliatin scroll layar
 useEffect(() => {
   const onScroll = () => setScrolled(window.scrollY > 60);
   window.addEventListener('scroll', onScroll);
   return () => window.removeEventListener('scroll', onScroll);
 }, []);

 // Fungsi buat pindah halaman pas diklik
 const navigate = (id) => {
   setMenuOpen(false);
   const el = document.getElementById(id);
   if (el) {
     el.scrollIntoView({ behavior: 'smooth' });
   }
 };

 return (
  <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav-logo" onClick={() => navigate('hero')}>
      BakeFlow
    </div>

    {/* Menu buat di Laptop */}
    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
      {NAV_LINKS.map((link) => (
        <li key={link.id} onClick={() => navigate(link.id)}>
          {link.label}
        </li>
      ))}
    </ul>

    {/* Tombol Menu buat di HP */}
    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </div>
  </nav>
 );
}

export default Navbar;