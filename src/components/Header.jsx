import styles from "./Header.module.css";
import Logo from "./Logo";
import Navi from "./Navi";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navi />
    </div>
  );
}

export default Header;
