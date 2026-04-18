import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="contact-wrapper">
      {/* Tambahkan Judul di sini */}
      <h2 className="contact-title">Contact Us</h2>

      <div 
        className={`envelope-container ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="envelope-flap"></div>

        <div className="letter">
          <form className="contact-form" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="3"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="envelope-front">

        </div>
      </div>

      {/* Hiasan */}
      <img src="/cupcake.png" className="deco cupcake" alt="" />
      <img src="/cake-slice.png" className="deco cake" alt="" />
    </section>
  );
};

export default Contact;