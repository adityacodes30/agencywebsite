import { motion, useScroll, useTransform, transform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";

const Steps = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [" start end", "start start"],
  });
  const opa = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.002, 0]);
  const sca = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const xpos = useTransform(scrollYProgress, [0, 1], [0, -2250]);

  return (
    <div>
      <div style={{ position: "sticky", top: "0px", overflow: "hidden" }}>
        <motion.div
          style={{
            width: "252vw",
            display: "flex",
            height: "100vh",
          }}
        >
          <motion.div
            style={{
              color: "whitesmoke",
              fontSize: "5.5rem",
              lineHeight: "90%",
              width: "36vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "sticky",
              left: "0px",
              opacity: opa,
              scale: sca,
              zIndex: "-1",
            }}
          >
            <div style={{ width: "95%", position: "relative", left: "2vw" }}>
             That's Where 
             we come in 
            </div>
          </motion.div>
          <motion.div
            style={{
              width: "69vw",
              marginLeft: "3vw",
              backgroundColor: "#1c1b19",
              borderRadius: "5.5rem",
              x: xpos,
            }}
          >
            <h1
              style={{
                color: "white",
                position: "relative",
                top: "42%",
                left: "10%",
                
              }}
            >
              Ignite Imagination
            </h1>
            <p
              style={{
                color: "white",
                width: "40%",
                fontSize: "1.2rem",
                position: "relative",
                left: "52%",
                top: "60%",
                fontWeight: "lighter",
              }}
            >
              Step one on our journey together is all about capturing the
              attention and imagination of Gen-Z. Storytelling lies at the heart
              of effective marketing. We craft engaging narratives that resonate
              with this dynamic generation, weaving together visuals, words, and
              emotions to create a captivating brand experience
            </p>
          </motion.div>
          <motion.div
            style={{
              width: "69vw",
              marginLeft: "3vw",
              backgroundColor: "#1c1b19",
              borderRadius: "5.5rem",
              x: xpos,
            }}
          >
            <h1
              style={{
                color: "white",
                position: "relative",
                top: "42%",
                left: "10%",
              }}
            >
              Unleash Virality
            </h1>
            <p
              style={{
                color: "white",
                width: "40%",
                fontSize: "1.2rem",
                position: "relative",
                left: "52%",
                top: "60%",
                fontWeight: "lighter",
              }}
            >
              Buckle up for step two of our thrilling plan! Gen-Z thrives on
              viral content, and we know just how to harness its incredible
              potential. We create content that is irresistibly shareable, using
              humor, relatability, and cutting-edge trends to ignite social
              media conversations.
            </p>
          </motion.div>
          <motion.div
            style={{
              width: "69vw",
              marginLeft: "3vw",
              backgroundColor: "#1c1b19",
              borderRadius: "5.5rem",
              x: xpos,
            }}
          >
            <h1
              style={{
                color: "white",
                position: "relative",
                top: "42%",
                left: "10%",
              }}
            >
              Embrace Authenticity and Influencer Culture
            </h1>
            <p
              style={{
                color: "white",
                width: "40%",
                fontSize: "1.2rem",
                position: "relative",
                left: "52%",
                top: "60%",
                fontWeight: "lighter",
              }}
            >
              The final step on our incredible journey is all about embracing
              authenticity and Gen-Z's love for influencer culture. We
              collaborate with influential personalities who align with your
              brand's values.
              By leveraging their reach and credibility, we'll amplify
              your brand's voice
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div ref={targetRef} style={{ height: "120vh" }}></div>
    </div>
  );
};

export default Steps;

const Card = (props) => {
  return (
    <motion.div
      style={{
        width: "69vw",
        marginLeft: "3vw",
        backgroundColor: "#1c1b19",
        borderRadius: "5.5rem",
      }}
    ></motion.div>
  );
};
