import React from 'react';
import BurgerImage from "../../assets/Burger.jpg"; 
import PizzaImage from "../../assets/Pizza.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="menu-stripe">
        <div className="menu-item">
          <div className="skew-wrapper">
            <img src={BurgerImage} alt="Burger" className="menu-image" id="fst-img" />
          </div>
          <div className="menu-texting">
            <h2>BURGER</h2>
          </div>
        </div>
        <div className="menu-item">
          <div className="skew-wrapper">
            <img src={PizzaImage} alt="Pizza" className="menu-image" id="snd-img" />
          </div>
          <div className="menu-texting">
            <h2>PIZZA</h2>
          </div>
        </div>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
}

export default Home;
