// import styles of this component
import styles from "./Nav.module.css";

// import other components
import Button from "../Elements/Button/Button";

// import other react pkg to use
import { HambergerMenu } from "iconsax-react";

// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      <h1 className={styles["nav-title"]}>SwipeArt</h1>
      <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <a href="/" className={styles["nav-link"]}>
            Home
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/swipe" className={styles["nav-link"]}>
            Swipe
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/liked" className={styles["nav-link"]}>
            Liked
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/wallpaper" className={styles["nav-link"]}>
            Wallpapers
          </a>
        </li>
      </ul>
      <div className={`flex ${styles["navbar-buttons"]}`}>
        <Button theme="transparent">Login</Button>
        <Button theme="matrix">Sign up</Button>
      </div>
      <div className={styles["navbar-responsive-menu"]}>
        <Button theme="transparent">
          <HambergerMenu size="32" color="var(--white-100)" />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
