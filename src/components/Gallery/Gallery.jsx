import React from "react";
import { FcLike } from "react-icons/fc";
import "./Gallery.css";
import gal1 from "../../assets/milkshakes.jpg";
import gal2 from "../../assets/wings.jpg";
import gal3 from "../../assets/wrap.jpg";
import gal4 from "../../assets/fries.jpg";


function Gallery() {
    const menu=`At {TAKEAWAY NAME} in the heart of {TAKEAWAY TOWN}, we offer an mensin selection tailored just for you. We invite
you to mlore our latest additions and welcome your raluable feedback. We asure you that each dish boasts a unique
flavour profile de#ed to elevate your culinary journey. Lat's embark on a distinctive gastronomic adventure twther!`
  return (
    <div>
      <div className="col">
        <div className="container">
     <h1 id="menu-head">Our Menu</h1> 
<p id="menu-para">{menu}</p>
</div>
      </div>
      <div className="col">
        <div id="one-gla">

          <div className="box" id="boxes1">
            <img src={gal3} alt="Chicken Wraps" />
            <span id="ids-span"> <p className="box-text"><FcLike />  Chicken Wraps</p></span>
          </div>

          <div className="box" id="boxes2">
            <img src={gal2} alt="Chicken Wings" />
            <span id="ids-span"> <p className="box-text"><FcLike />  BBQ Wings</p></span>
          </div>
          <div className="box" id="boxes3">
            <img src={gal1} alt="Milkshakes" />
            <span id="ids-span"> <p className="box-text"><FcLike />  MilkShakes</p></span>
          </div>
          <div className="box" id="boxes4">
            <img src={gal4} alt="Fries" />
            <span id="ids-span"> <p className="box-text"><FcLike />  Fries</p></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
