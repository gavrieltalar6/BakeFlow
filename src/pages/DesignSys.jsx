import React from 'react';
import { Link } from 'react-router-dom';
import colorImg from '../assets/images/color.png';
import logoImg from '../assets/images/logo.png';
import iconImg from '../assets/images/icon.png';
import componentImg from '../assets/images/component.png';
import Motion from '../assets/images/Motion.gif';
// import namafilenya from '../assets/images/namafile.png';  ----- contoh kalo perlu import sesuatu dari asset

const DesignSys = () => {
  return (
    // connector ke CSS di bawah, jangan diganggu
    <section style={styles.container}>
      
      
      <div style={styles.content}>
        <h1>BakeFlow Design System</h1>
        <hr />

        {/* COLOR */}
        <h2 style={styles.sectionTitle}>Color</h2>
        <img src={colorImg} alt="color" style={styles.image} />

        {/* LOGO */}
        <h2 style={styles.sectionTitle}>Logo</h2>
        <img src={logoImg} alt="logo" style={styles.image} />
        <p style={styles.desc}>
          Logo ini dipilih karena langsung menggambarkan produk utama yaitu donat,
          sehingga mudah dikenali oleh pelanggan. Warna pink memberikan kesan manis,
          hangat, dan friendly sesuai dengan tema bakery.
        </p>

        {/* ICON */}
        <h2 style={styles.sectionTitle}>Icon</h2>
        <img src={iconImg} alt="icon" style={styles.image} />

        {/* COMPONENT */}
        <h2 style={styles.sectionTitle}>Component</h2>
        <img src={componentImg} alt="component" style={styles.image} />

        {/* MOTION */}
        <h2 style={styles.sectionTitle}>Motion</h2>
        <img src={Motion} alt="Motion" style={styles.image} />

        {/* PATTERNS */}
        <h2 style={styles.sectionTitle}>Patterns</h2>
        <p style={styles.desc}>
          Website menggunakan layout vertikal dari atas ke bawah yang terdiri dari
          navbar, hero section, features, pricing, hingga contact. Informasi ditampilkan
          menggunakan card grid agar lebih rapi dan mudah dibaca. Penggunaan warna pastel,
          bentuk rounded, serta ilustrasi yang konsisten membantu menciptakan tampilan
          yang harmonis dan nyaman dilihat.
        </p>

        {/* THEME */}
        <h2 style={styles.sectionTitle}>Theme</h2>
        <p style={styles.desc}>
          Website ini menggunakan tema sweet, playful, dan friendly yang sesuai dengan
          konsep bakery. Warna pastel dan ilustrasi lucu digunakan untuk menciptakan
          suasana hangat dan menarik, sehingga user merasa lebih nyaman saat menggunakan
          website.
        </p>

        {/* TYPOGRAPHY */}
        <h2 style={styles.sectionTitle}>Typography</h2>
        <p style={styles.desc}>
          <b>Judul:</b> Delius Unicase Karena Bentuknya yang bagus dan santai di gunakan untuk menulis Judul <br />
          <b>Isi:</b> Delius Swash Caps Kami menggunakan font Delius Swash Caps karena memiliki bentuk huruf kapital dengan elemen dekoratif (swash) yang memberikan kesan elegan namun tetap playful. <br />
          <b>Ukuran teks :</b> menggunakan kelipatan 4 untuk menjaga konsistensi.
        </p>
      </div>
    </section>
  );
};




// isi CSSnya disini. Dibawah ini ada contoh. Nanti hapus semua aja kalo udah mau lu isi
const styles = { 
  container: {
    padding: '120px 20px 50px',
    minHeight: '100vh',
  },

  content: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto'
  },

  sectionTitle: {
  maxWidth: '600px',
  margin: '40px auto 10px',
  textAlign: 'left',
  color: '#FF77A5'
  },

  title: {
    color: '#FFFFFF',
    
  },

  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  desc: {
    maxWidth: '600px',
    lineHeight: '1.6',
    margin: '0 auto'
  }
};

export default DesignSys;