import React from 'react';
import { featuresData } from '../../data/Data';
import './Workflow.css';

import cupcakeImg from "../../assets/images/cake2.png";
import cakeImg from "../../assets/images/cake2.png";
import mangosteenImg from "../../assets/images/cake1.png";

const Workflow = () => {
  return (
    <div className="workflow-container">
      <img src={cupcakeImg} className="deco-item cupcake-left" alt="Cupcake" />
      <img src={cakeImg} className="deco-item cake-right" alt="Cake Slice" />
      <img src={cupcakeImg} className="deco-item cupcake-bottom" alt="Cupcake Pink" />
      <img src={cakeImg} className="deco-item cake-bottom-right" alt="Cake Decoration" />
      <img src={mangosteenImg} className="deco-item deco-mini mini-1" alt="" />
      <img src={cupcakeImg} className="deco-item deco-mini mini-2" alt="Cupcake" />
      <img src={mangosteenImg} className="deco-item deco-mini mini-3" alt="" />

      <h2 className="workflow-title">Workflow</h2>

      <div className="workflow-grid">
        {featuresData.map((item) => (
          <div key={item.id} className={`feature-card card-${item.id}`}>
            <div className="image-group">
              {item.images.map((imgSrc, index) => {
                const fileName = imgSrc.split('/').pop().split('.')[0];
                return (
                  <img 
                    key={index} 
                    src={imgSrc} 
                    alt="art" 
                    className={`workflow-img img-${fileName}`} 
                  />
                );
              })}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;