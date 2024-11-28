import React from "react";
import "./Card.css";
import card1 from "../../assets/nuggets.jpg";
import card2 from "../../assets/jacket potatoes.jpg";
import card3 from "../../assets/garlic-bread.jpg";
import card4 from "../../assets/fudge-cake.jpg";

function Card() {
  return (
    <div className="container">
      <div className="row mb-5 d-flex justify-content-center">
      
        <div className="col-md-12 col-sm-12 col-lg-5 d-flex justify-content-center">
          <div className="card">
            <div className="card-image">
              <img src={card1} alt="Chicken Nuggets" id="img-crd89" />
            </div>
            <div className="cards-label">
              <span className="label-text">CHICKEN NUGGETS</span>
            </div>
          </div>
        </div>
      <div className="col-md-12 col-sm-12 col-lg-5 d-flex justify-content-center">
          <div className="card">
          <div className="cards-label2">
              <span className="label-text">JACKET POTATOES</span>
            </div>
            <div className="card-image">
              <img src={card2} alt="Jacket Potatoes" id="img-crd89" />
            </div>
            
           
            </div>
          </div>
        </div>
       
        <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-sm-12 col-lg-5 d-flex justify-content-center">
          <div className="card">
            <div className="card-image">
              <img src={card3} alt="Garlic Bread" id="img-crd89" />
            </div>
            <div className="cards-label">
              <span className="label-text">GARLIC BREAD</span>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-12 col-sm-12 col-lg-5 d-flex justify-content-center">
          <div className="card">
            <div className="card-image">
              <img src={card4} alt="Fudge Cake" id="img-crd89" />
            </div>
            <div className="cards-label2">
              <span className="label-text">FUDGE CAKE</span>
            </div>
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default Card;
