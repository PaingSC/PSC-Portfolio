// import { motion } from "framer-motion";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import styles from "./App.module.css";
// import SimpleSlider from "./components/carousel";

function App() {
  // phone number and emial address
  const emailAddress = "paingsoechit.job@gmail.com";
  const phoneNumber = "+959456507434";

  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <div className={styles.container}>
        {/* <motion.div
          initial={{ scale: 0, x: -900 }}
          animate={{ scale: 1, x: 0 }}
        >
        </motion.div> */}
        <About />
        <Projects />
        {/* <SimpleSlider /> */}
        <Technologies />
        <Contact emailAddress={emailAddress} phoneNumber={phoneNumber} />
      </div>
      <Footer emailAddress={emailAddress} phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;
