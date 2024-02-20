import styles from "./Header.module.css";
import Logo from "./Logo";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Technologies</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
