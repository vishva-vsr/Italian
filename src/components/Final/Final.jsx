import React from 'react';
import './Final.css'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gray from '../../assets/imgg12.png';
import pad from '../../assets/pad.png';
import hand from '../../assets/burger-in-hand.png';
import respo from '../../assets/pad.png';


function Final() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="row" id='hide-srll'>
      {/* <div className=" ">
        <img src={gray} alt="Gray Background" id="pd-img" />
      </div> */}
      <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-end">
      <div className="pad-container">
          <img src={pad} alt="Pad" id="pad-44" />
          <div id="pad-con">
            SAVOUR THE
            <br />
            MOMENT
            <br />
            WITH
            <br />
            EVERY BITE
            <br />
            <button className="btno90">ORDER</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-sm-12 col-lg-8 d-flex justify-content-end" id='idshide'>
      <motion.img
          ref={ref}
          src={hand}
          alt="Burger in Hand"
          className="img-fluid trtr"
          initial={{ x: 100, y: 100, opacity: 0 }} 
          animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}

export default Final;
