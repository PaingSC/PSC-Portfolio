import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
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
