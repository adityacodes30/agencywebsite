import "./styles/app.css";
import Navbar from "./Navbar";
import { Fragment , useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import Blob from "./Blob";
import stl from './styles/blob.module.css'
import {motion} from 'framer-motion'

function App() {
  return (
   <div>
     
      <Navbar></Navbar>
      <Blob></Blob>
      <HeroSection></HeroSection>
      <Section1></Section1>
     
      </div>
   
  );
}

export default App;


