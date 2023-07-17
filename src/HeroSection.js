import React from "react";
import stl from "./styles/HeroSection.module.css";
import Spline from "@splinetool/react-spline";
import fon from './styles/fonts.module.css'

const HeroSection = () => {
  return (
    <div className={stl.herosection}>
      <div className={stl.herotxt}>
        <H>We <span className={stl.h}>mix</span></H>
        <H><span className={stl.h}><span className={fon.ald}>Realities</span></span></H>
        <H>to <span className={stl.h}>Market</span></H>
        <H>your <span className={stl.h}>Brand</span></H>
      </div>
     <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
     <div style={{paddingTop:'1vh'}}>
     <Spline scene="https://prod.spline.design/BfHIFHPec4tCR508/scene.splinecode" />
     </div>
        </div>
    </div>
  );
};

export default HeroSection;

const H = ({ children }) => {
  return (
    <span
      style={{
        paddingLeft: "10vh",
        color: "white",
        fontSize: "130px",
        fontWeight: "bolder",
      }}
    >
      {children}
    </span>
  );
};
