import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Steps from "./Steps";
import stl from './styles/Section1.module.css';
import Carousel from "./Carousel";


const Section1 = () => {
  //Animation for sliding text
  const targetRef = useRef(null);
  const { scrollYProgress:scrollYProgress1 } = useScroll({
    target: targetRef,
    offset: [" start end", "end center"],
  });
  const opa = useTransform(scrollYProgress1, [0, 0.5, 1], [0, 0.3, 1]);
  const pos = useTransform(scrollYProgress1, [0, 0.1, 1], [900, 500, 50]);
  ////////
  const targ = useRef(null);
  const { scrollYProgress:scrollYProgress2 } = useScroll({
    target: targ,
    offset: [" start end", "end center"],
  });
  
  const rhi = useTransform(scrollYProgress2, [0, 0.5, 1], [0, 900, 1400]);
  const bot = useTransform(scrollYProgress2, [0, 0.6, 1], [-200, -200,50]);
  const ot = useTransform(scrollYProgress2, [0, 0.6, 1], [-50,400, 670]);

  ///////

  return (
    <>
    
      <motion.div ref={targ} style={{ height: "155vh", overflow: "hidden"}}>
      <motion.h1 className={stl.hed} style={{right:rhi}}>Sublime Labs || Sublime Labs || Sublime Labs || Sublime Labs || Sublime Labs ||  </motion.h1>
        <motion.h2
          ref={targetRef}
          style={{
            color: "white",
            left: '20px',
            fontSize: "7rem",
            bottom: "30vh",
            opacity: opa,
            position: "relative",
            top: ot,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          Marketing to GEN-Z can be Hard...
        </motion.h2>

        <motion.div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "saturate(180%) blur(10px)",
            width:'50vw',
            height:'30vh',
            borderRadius:'2rem',
            display:'flex',
            // color: 'blueviolet',
            color: '#ffffff85',
            alignItems:'center',
            justifyContent:'center',
            position:'relative',
            left:'50vw',
            padding:'2rem',
            bottom:bot,
            fontSize:'2rem'
            
          }}
        >
         <p style={{display:'inline', width:'90%' ,fontWeight:'bolder' }}>Gen-Z is the today's young generation known for their digital nativeness and unique cultural characteristics.</p>
        </motion.div>
      </motion.div>

      
      
    </>
  );
};

export default Section1;
