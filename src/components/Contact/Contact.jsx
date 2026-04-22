import React, { useState } from "react";
import "./Contact.css";

import cupcakeImg from "../../assets/images/cake1.png";
import cakeImg from "../../assets/images/cake2.png";
import mangosteenImg from "../../assets/images/cake1.png";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <section className="contact-wrapper" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      {/* Popup */}
      {showPopup && (
        <div className="contact-popup">
          ✅ Message sent! Please check your email frequently.
        </div>
      )}

      <img src={cupcakeImg} className="deco-item cupcake-left" alt="Cupcake" />
      <img src={cakeImg} className="deco-item cake-right" alt="Cake Slice" />
      <img src={cupcakeImg} className="deco-item cupcake-bottom" alt="Cupcake Pink" />
      <img src={mangosteenImg} className="deco-item fruit-small" alt="Decoration" />
      <img src={cakeImg} className="deco-item cake-bottom-right" alt="Cake Decoration" />
      <img src={mangosteenImg} className="deco-item deco-mini mini-1" alt="" />
      <img src={cupcakeImg} className="deco-item deco-mini mini-2" alt="" />
      <img src={mangosteenImg} className="deco-item deco-mini mini-3" alt="" />

      <div
        className={`envelope-container ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="envelope-flap"></div>

        <div className="letter">
          <form className="contact-form" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows="3" value={form.message} onChange={handleChange}></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="envelope-front"></div>
      </div>
    </section>
  );
};

export default Contact;