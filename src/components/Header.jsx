import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";

import Logo from "./Logo";
import Navi from "./Navi";

import styles from "./Header.module.css";

function Header() {
  // For clicking Menu
  const [isMenuOn, setIsMenuOn] = useState(false);
  function handleMenuToggle() {
    setIsMenuOn((isActive) => !isActive);
  }

  // State variable to hold whether the screen width is less than or equal to 768px
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Function to update isSmallScreen state variable
  const updateIsSmallScreen = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  // Add event listener when the component mounts to track window resize
  useEffect(() => {
    window.addEventListener("resize", updateIsSmallScreen);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsSmallScreen);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <>
      <div className={styles.header}>
        <Logo />
        {isSmallScreen ? (
          <CgMenu
            style={{ color: `var(--primary-color)` }}
            className={styles.menuBtn}
            onClick={() => {
              console.log("clicked!");
              handleMenuToggle();
            }}
          />
        ) : (
          <Navi />
        )}
      </div>
      {isMenuOn ? (
        <div className={styles.headerNavi}>
          <Navi />
        </div>
      ) : null}
    </>
  );
}

export default Header;
