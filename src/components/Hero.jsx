import { motion } from "framer-motion";
// import { useState } from "react";

import styles from "./Hero.module.css";

function Hero() {
  // const [isRotate, setIsRotate] = useState(false);
  // console.log(setIsRotate);
  return (
    <div>
      {/* <motion.div
        animate={{ rotate: isRotate ? 360 : 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.1 }}
        onClick={() => setIsRotate(!isRotate)}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        <h1>Hero</h1>
      </motion.div> */}
      <motion.h2 className={styles.heroName}>
        <motion.p
          className={styles.greet}
          initial={{ x: "calc(-100% - 20px)" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", delay: 0, duration: 0.4 }}
        >
          HI,
        </motion.p>

        <motion.p
          className={styles.name}
          initial={{ x: "calc(-100% - 20px)" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6, duration: 1.3 }}
        >
          I&apos;m Paing Soe Chit
        </motion.p>
        <motion.p
          className={styles.role}
          initial={{ x: "calc(-100% - 20px)" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 1.3 }}
        >
          A Front-end Web Developer
        </motion.p>
      </motion.h2>
    </div>
  );
}

export default Hero;
