/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Navi from "./Navi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

// import { BsArrowUpSquareFill } from "react-icons/bs";

import styles from "./Footer.module.css";

function Footer({ phoneNumber, emailAddress }) {
  return (
    <footer className={styles.footer}>
      {/* <a href="#home" className={styles.goToTop}>
        <BsArrowUpSquareFill style={{ width: "4rem" }} />
      </a> */}
      <div className={styles.logoContact}>
        <Logo />
        <div className={styles.contact}>
          <a href={`tel:${phoneNumber}`}>
            <MdOutlinePhoneInTalk /> 09-45650-7434
          </a>
          <a href={`mailto:${emailAddress}`}>
            <TfiEmail /> paingsoechit.job@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.footerNavi}>
        <Navi />
      </div>
      <p className={styles.talk}>
        I program fueled by passion and a cup of steaming coffee ☕️
      </p>
    </footer>
  );
}

export default Footer;
