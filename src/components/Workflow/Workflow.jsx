import React from 'react';
import { featuresData } from '../../data/Data';
import './Workflow.css';

const Workflow = () => {
  return (
    <div className="workflow-container">
      <h2 className="workflow-title"></h2>
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
                    alt="workflow-art" 
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