import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Steps from "./Steps";
import stl from './styles/Section1.module.css';

const Section1 = () => {
  //Animation for sliding text
  const targetRef = useRef(null);
  const { scrollYProgress:scrollYProgress1 } = useScroll({
    target: targetRef,
    offset: [" start end", "end center"],
  });
  const opa = useTransform(scrollYProgress1, [0, 0.5, 1], [0, 0.5, 1]);
  const pos = useTransform(scrollYProgress1, [0, 0.1, 1], [900, 500, 50]);
  ////////
  const targ = useRef(null);
  const { scrollYProgress:scrollYProgress2 } = useScroll({
    target: targ,
    offset: [" start end", "end center"],
  });
  
  const rhi = useTransform(scrollYProgress2, [0, 0.5, 1], [0, 900, 1400]);
  const bot = useTransform(scrollYProgress2, [0, 0.6, 1], [-200, -200,50]);
  const ot = useTransform(scrollYProgress2, [0, 0.6, 1], [100,400, 670]);

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
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "saturate(180%) blur(10px)",
            width:'50vw',
            height:'30vh',
            borderRadius:'2rem',
            display:'flex',
            color:'#6a1aa4',
            alignItems:'center',
            justifyContent:'center',
            position:'relative',
            left:'50vw',
            padding:'2rem',
            bottom:bot,
            
          }}
        >
          <b>At Sublime Labs we specialise in cooking 360 degree strategy that
          helps you scale</b>
        </motion.div>
      </motion.div>

      <Steps></Steps>
      <div style={{ height: "1000px", backgroundColor: "" }}></div>
      <div style={{ height: "1000px", backgroundColor: "yellow" }}></div>
    </>
  );
};

export default Section1;
