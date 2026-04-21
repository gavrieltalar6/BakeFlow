import React from 'react';
import './Pricing.css';


import standardImg from '../../assets/images/cat-with-box.png';
import mediumImg from '../../assets/images/cat-with-cupcake.png';
import fullImg from '../../assets/images/cat-with-computer.png';


const PricingCard = ({ title, price, image, features }) => {
  return (
    <div className="pricing-card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <ul className="feature-list">
          {features.map((item, index) => (
            <li key={index}>
              <span className="strawberry-icon">🍓</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <p className="includes-text">What's Includes :</p>
        <p className="price-text">${price}/mo</p>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const tiers = [
    {
      title: "STANDARD",
      price: "19.99",
      image: standardImg,
      features: ["Warehouse", "Dashboard", "Cashier"],
    },
    {
      title: "MEDIUM",
      price: "29.99",
      image: mediumImg,
      features: ["Warehouse", "Dashboard", "Cashier", "Auto-Restock"],
    },

    {
      title: "FULL",
      price: "39.99",
      image: fullImg,
      features: [
        "Warehouse",
        "Dashboard",
        "Cashier",
        "Auto-Restock",
        "Vending Machine",
      ],
    },
  ];

  return (
    <section id="pricing">
      <div className="pricing-container">
        <h1 className="main-title">
          SIMPLE
          <br />
          PRICING
        </h1>
        <div className="cards-wrapper">
          {tiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
