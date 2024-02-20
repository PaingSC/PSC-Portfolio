import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
