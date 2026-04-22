import React, { useState } from 'react';
import './Contact.css';


import cupcakeImg from '../../assets/images/cake1.png';
import cakeImg from '../../assets/images/cake2.png';
import mangosteenImg from '../../assets/images/cake1.png';
import StrawberryCake from '../../assets/images/cake2.png';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="contact-wrapper">
      <h2 className="contact-title">Contact Us</h2>

      <img src={cupcakeImg} className="deco-item cupcake-left" alt="Cupcake" />
      <img src={cakeImg} className="deco-item cake-right" alt="Cake Slice" />
      <img src={cupcakeImg} className="deco-item cupcake-bottom" alt="Cupcake Pink" />
      <img src={mangosteenImg} className="deco-item fruit-small" alt="Decoration" />
      <img src={cakeImg} className="deco-item cake-bottom-right" alt="Cake Decoration" />
      <img src={mangosteenImg} className="deco-item deco-mini mini-1" alt="" />
      <img src={cupcakeImg} className="deco-item deco-mini mini-2" alt="" />
      <img src={mangosteenImg} className="deco-item deco-mini mini-3" alt="" />

     
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
    </section>
  );
};

export default Contact;