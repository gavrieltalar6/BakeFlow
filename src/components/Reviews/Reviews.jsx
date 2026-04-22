import React from 'react';
import "./Reviews.css";
import { reviewsData } from '../../data/Data'; 


function Reviews() {

    // siapin logic-logic JS disini

    return (
        <section className="results-container">
            <h2 className="results-title">REAL RESULTS</h2>
            <div className="cards-wrapper">
               {reviewsData.map((review) => (
                <div key={review.id} className="result-card">
                    <div className="avatar-placeholder">
                        <img
                            src={review.img}
                            alt={review.name}
                            className="avatar-img"
                        />
                    </div>
                    <p className="stars">★★★★★</p>
                    <p className="testimonial-text">"{review.text}"</p>
                    <p className="author">{review.name}</p>
                </div>
               ))}                  
            </div>
      </section>
    )
}
export default Reviews;