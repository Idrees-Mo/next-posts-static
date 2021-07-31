import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>My Posts</a>
        </Link>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
