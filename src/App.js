import "./styles/app.css";
import Navbar from "./Navbar";
import { Fragment , useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import Blob from "./Blob";
import stl from './styles/blob.module.css'
import {motion} from 'framer-motion'
import Steps from "./Steps";
import Carousel from "./Carousel"
import Footer from "./Footer";

function App() {
  return (
   <div>
     
      <Navbar></Navbar>
      <Blob></Blob>
      <HeroSection></HeroSection>
      <Section1></Section1>
      <Steps></Steps>
      <Carousel></Carousel>
     <Footer></Footer>
      </div>
   
  );
}

export default App;


