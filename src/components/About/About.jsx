import React from 'react';
import './About.css';
import cvc from '../../assets/cvc.png';
import getfood from '../../assets/getyourfood.png';
import paay from '../../assets/makepayment.png';
import pick from '../../assets/pickyourdish.png';
import img123 from '../../assets/img32.png';
import mobimg from "../../assets/mob44.png"



function About() {
  const paraabout=` Discover {TAKEAWAY NAME} located in{TAKEAWAY
TOWN}, where passion for culinary craftsmanship meets
the warmth of hospitality. Our story is one of dedication
to the art of taste, where each dish is an mression of
creatWW and attention to detail. Indulge in the robust
flavours of our pins, cooked to perfection, or
merience the harmonious Mend cf iwedients in our
exquisite burgers.`
  return (
    <div >
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-4 " >
          <div className="image-wrapper">
            <img src={cvc} alt="Background Image" className="main-image" />
            <div className="icons-container">
              <div className="icon-item">
                <img src={pick} alt="Pick a Dish" />
                <p id='txt-con'>Pick A Dish</p>
              </div>
              <div className="icon-item">
                <img src={paay} alt="Make a Payment" />
                <p id='txt-con'>Make A Payment</p>
              </div>
              <div className="icon-item">
                <img src={getfood} alt="Enjoy Your Food" />
                <p id='txt-con'>Enjoy Your Food</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-8 "id='custom-row'>
        <div style={{ position: 'relative' }}>
            <img src={img123} alt="Background with Circle" id="abt-img23" />
            <div className="text-overlay">
              <h1>About Us</h1>
              <p>
           {paraabout}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-lg-8"id='custom-mob'>
        <div style={{ position: 'relative' }}>
            
            <img src={mobimg} alt="" id='img-mob' />
            <div className="text-overlay">
              <h1>About Us</h1>
              <p>
           {paraabout}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
