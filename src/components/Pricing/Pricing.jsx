import React from 'react';
import './Pricing.css';




const PricingCard = ({ title, price, image, features }) => {
  return (
    <div className="pricing-card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        <div className="card-image-container">
          {/* Ganti src dengan path gambar aslimu */}
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
      title: 'STANDARD',
      price: '19.99',
      image: '/cat-with-cupcake.png',
      features: ['fitur', 'fitur', 'fitur']
    },
    {
      title: 'MEDIUM',
      price: '29.99',
      image: '/cat-with-box.png',
      features: ['fitur', 'fitur', 'fitur', 'fitur']
    },

   {
    title: 'FULL',
    price: '39.99',
    image: '/cat-with-computer.png',
    features: ['fitur', 'fitur', 'fitur', 'fitur', 'fitur']
  }
  ];

  return (
    <div className="pricing-container">
      <h1 className="main-title">SIMPLE<br />PRICING</h1>
      <div className="cards-wrapper">
        {tiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;