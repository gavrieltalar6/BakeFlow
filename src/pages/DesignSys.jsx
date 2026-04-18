import React from 'react';
import { Link } from 'react-router-dom';

const DesignSys = () => {
  return (
    // connector ke CSS di bawah, jangan diganggu
    <section style={styles.container}>
      
      
      <div style={styles.content}>
        <h1>BakeFlow Design System</h1>
        <hr />
        {/* Isi JSX nya disini */}
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
  content: {
    // Styling tambahan buat pembungkus konten
  }
};

export default DesignSys;