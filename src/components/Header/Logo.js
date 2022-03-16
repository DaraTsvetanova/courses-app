import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src="https://upload.wikimedia.org/wikipedia/commons/d/d6/EPAM_logo.png"
      alt="logo"
    />
  );
}
