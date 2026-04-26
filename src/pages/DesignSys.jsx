import React from 'react';
import { Link } from 'react-router-dom';
import colorImg from '../assets/images/color.png';
import logoImg from '../assets/images/logo.png';
import iconImg from '../assets/images/icon.png';
import ButtonStyle from '../assets/images/ButtonStyle.png';
import ButtonStyle2 from '../assets/images/ButtonStyle 2.png';
import ButtonStyle3 from '../assets/images/ButtonStyle 3.png';
import componentImg from '../assets/images/component.png';
import componentImg2 from '../assets/images/component 2.png';
import componentImg3 from '../assets/images/component 3.png';
import cupcakeTopLeftImg from '../assets/images/cat-right.png';
import cupcakeTopRightImg from '../assets/images/cat-left.png';
import windowImg from '../assets/images/cat-with-box.png';
import cakeSliceImg from '../assets/images/threecat.png';
import cupcakeBottomRightImg from '../assets/images/stiker.fitures.png';
import boxStackImg from '../assets/images/stiker.fitures.png';
import unicase from '../assets/images/Unicase.png';
import swash from '../assets/images/Swash.png';

const DesignSys = () => {
  return (
    <section style={styles.container}>
      {/* DEKORASI DEPAN */}
      <div style={{ ...styles.decorative, top: '100px', left: '20px' }}>
        <img src={cupcakeTopLeftImg} alt="cupcake" style={styles.decorImg1} />
      </div>

      <div style={{ ...styles.decorative, top: '80px', right: '35px' }}>
        <img src={cupcakeTopRightImg} alt="cupcake" style={styles.decorImg2} />
      </div>

      <div style={{ ...styles.decorative, left: '1150px', top: '870px' }}>
        <img src={windowImg} alt="window" style={styles.decorImg3} />
      </div>

      {/* DEKORASI BELAKANG (decorImg5) */}
      <div style={{ ...styles.decorativeBehind, left: '350px', top: '1700px' }}>
        <img src={cakeSliceImg} alt="cake" style={styles.decorImg5} />
      </div>

      <div style={{ ...styles.decorative, right: '25px', bottom: '0px' }}>
        <img src={cupcakeBottomRightImg} alt="cupcake" style={styles.decorImg6} />
      </div>

      <div style={{ ...styles.decorative, left: '10px', bottom: '0px' }}>
        <img src={boxStackImg} alt="boxes" style={styles.decorImg7} />
      </div>

      {/* KONTEN UTAMA */}
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

        <p style={styles.desc}>
          <b>Class:</b> nav-links <br />
        </p>
        <img src={componentImg} alt="component" style={styles.image} />

        <p style={styles.desc}>
        <b>Class:</b> feature-card<br />
        </p>
        <img src={componentImg2} alt="component" style={styles.image} />

        <p style={styles.desc}>
          <b>Class:</b> pricing-card<br />
        </p>
        <img src={componentImg3} alt="component" style={styles.image} />

        {/* Button Style */}
        <h2 style={styles.sectionTitle}>Button Style</h2>

        <p style={styles.desc}>
        <b>Class:</b> hero-btn<br />
        </p>
        <img src={ButtonStyle} alt="Button" style={styles.image} />

        <p style={styles.desc}>
        <b>Class:</b> get-started-btn<br />
        </p>
        <img src={ButtonStyle2} alt="Button" style={styles.image} />

        <p style={styles.desc}>
        <b>Class:</b> contact-form button<br />
        </p>
        <img src={ButtonStyle3} alt="Button" style={styles.image} />

        {/* TYPOGRAPHY */}
        <h2 style={styles.sectionTitle}>Typography</h2>
        <p style={styles.desc}>
          <b>Judul:</b> Delius Unicase Karena Bentuknya yang bagus dan santai di gunakan untuk menulis Judul <br />
          <img src={unicase} alt="Button" style={styles.image} />
          <b>Isi:</b> Delius Swash Caps Kami menggunakan font Delius Swash Caps karena memiliki bentuk huruf kapital dengan elemen dekoratif (swash) yang memberikan kesan elegan namun tetap playful. <br />
          <img src={swash} alt="Button" style={styles.image} />
          <b>Ukuran teks :</b> menggunakan kelipatan 4 untuk menjaga konsistensi.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '120px 20px 50px',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  content: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2, 
  },

  sectionTitle: {
    maxWidth: '600px',
    margin: '40px auto 10px',
    textAlign: 'left',
    color: '#FF77A5',
  },

  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  desc: {
    maxWidth: '600px',
    lineHeight: '1.6',
    margin: '0 auto',
  },

  decorative: {
    position: 'absolute',
    zIndex: 1,
    pointerEvents: 'none',
  },


  decorativeBehind: {
    position: 'absolute',
    zIndex: 0, 
    pointerEvents: 'none',
  },

  decorImg1: {
    width: '90px',
    height: 'auto',
    animation: 'float 3s ease-in-out infinite',
    opacity: 0.85,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  },

  decorImg2: {
    width: '110px',
    height: 'auto',
    animation: 'floatSlow 4s ease-in-out infinite 0.5s',
    opacity: 0.9,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  },

  decorImg3: {
    width: '220px',
    height: 'auto',
    animation: 'sway 3s ease-in-out infinite',
    opacity: 0.75,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  },

  decorImg5: {
    width: '1000px',
    height: 'auto',
    animation: 'float 3.5s ease-in-out infinite 0.3s',
    opacity: 0.15, 
    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))',
  },

  decorImg6: {
    width: '160px',
    height: 'auto',
    animation: 'floatSlow 3.8s ease-in-out infinite 0.8s',
    opacity: 0.8,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  },

  decorImg7: {
    width: '180px',
    height: 'auto',
    animation: 'sway 4s ease-in-out infinite 0.5s',
    opacity: 0.8,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  },
};

export default DesignSys;