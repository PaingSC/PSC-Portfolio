import styles from "./About.module.css";
import { GoDownload } from "react-icons/go";

function About() {
  return (
    <section className={styles.about} id="about">
      <h3>
        About
        <span>Introduction</span>
      </h3>
      <div className={styles.introduction}>
        <p>
          {`Hello! I'm Paing Soe Chit, a front-end web developer from 
        Myanmar. Fascinated by the intersection of design and
          technology, I've dedicated myself to crafting immersive digital
          experiences that blend creativity with functionality. With expertise
          in HTML, CSS, JavaScript, and React.js, I prioritize clean code and
          user-centric design principles in every project. Beyond coding, I find
          inspiration in nature, photography, and literature. Looking forward,
          I'm eager to collaborate with innovative teams and organizations,
          leveraging technology to shape the future of the web. Let's connect
          and explore the possibilities together!`}
        </p>
        <div className={styles.downloadCV}>
          <a href="/Paing_Soe_Chit_CV.pdf" target="_blank">
            Download{" "}
            <GoDownload style={{ width: "1.8rem", paddingBottom: "0.3rem" }} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
