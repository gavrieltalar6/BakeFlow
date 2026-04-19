import React from 'react';
import { Link } from 'react-router-dom';
import colorImg from '../assets/images/color.png';
import logoImg from '../assets/images/logo.png';
import iconImg from '../assets/images/icon.png';
import componentImg from '../assets/images/component.png';
import Motion from '../assets/images/Motion.png';
// import namafilenya from '../assets/images/namafile.png';  ----- contoh kalo perlu import sesuatu dari asset

const DesignSys = () => {
  return (
    // connector ke CSS di bawah, jangan diganggu
    <section style={styles.container}>
      
      
      <div style={styles.content}>
        <h1>BakeFlow Design System</h1>
        <hr />

        {/* COLOR */}
        <h2>Color</h2>
        <img src={colorImg} alt="color" style={styles.image} />

        {/* LOGO */}
        <h2>Logo</h2>
        <img src={logoImg} alt="logo" style={styles.image} />
        <p style={styles.desc}>
          Logo ini dipilih karena langsung menggambarkan produk utama yaitu donat,
          sehingga mudah dikenali oleh pelanggan. Warna pink memberikan kesan manis,
          hangat, dan friendly sesuai dengan tema bakery.
        </p>

        {/* ICON */}
        <h2>Icon</h2>
        <img src={iconImg} alt="icon" style={styles.image} />

        {/* COMPONENT */}
        <h2>Component</h2>
        <img src={componentImg} alt="component" style={styles.image} />

        {/* MOTION */}
        <h2>Motion</h2>
        <img src={Motion} alt="Motion" style={styles.image} />

        {/* PATTERNS */}
        <h2>Patterns</h2>
        <p style={styles.desc}>
          Website menggunakan layout vertikal dari atas ke bawah yang terdiri dari
          navbar, hero section, features, pricing, hingga contact. Informasi ditampilkan
          menggunakan card grid agar lebih rapi dan mudah dibaca. Penggunaan warna pastel,
          bentuk rounded, serta ilustrasi yang konsisten membantu menciptakan tampilan
          yang harmonis dan nyaman dilihat.
        </p>

        {/* THEME */}
        <h2>Theme</h2>
        <p style={styles.desc}>
          Website ini menggunakan tema sweet, playful, dan friendly yang sesuai dengan
          konsep bakery. Warna pastel dan ilustrasi lucu digunakan untuk menciptakan
          suasana hangat dan menarik, sehingga user merasa lebih nyaman saat menggunakan
          website.
        </p>

        {/* TYPOGRAPHY */}
        <h2>Typography</h2>
        <p style={styles.desc}>
          <b>Judul:</b> Delius Unicase digunakan untuk memberikan kesan unik dan santai. <br />
          <b>Subjudul:</b> Delius Swash Caps memberikan aksen dekoratif. <br />
          <b>Isi:</b> Menggunakan font sederhana agar tetap mudah dibaca. <br />
          Ukuran teks menggunakan kelipatan 4 untuk menjaga konsistensi.
        </p>
      </div>
    </section>
  );
};




// isi CSSnya disini. Dibawah ini ada contoh. Nanti hapus semua aja kalo udah mau lu isi
const styles = { 
  container: {
    padding: '120px 10% 50px', // Jaga jarak dari Navbar
    minHeight: '100vh',
  },
  backLink: {
    textDecoration: 'none',
    color: '#FFD1DC',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '20px'
  },
  content: {},
  title: {
    color: '#FF77A5'
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  emptyBox: {
    width: '100%',
    maxWidth: '600px',
    height: '150px',
    border: '2px dashed #FF77A5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    color: '#FF77A5'
  },
  desc: {
    maxWidth: '600px',
    lineHeight: '1.6'
  }
};

export default DesignSys;