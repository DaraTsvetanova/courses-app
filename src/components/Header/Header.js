import Logo from "./Logo";
import Button from "../Common/Button";
import styles from "./Header.module.css";

export default function Header() {
  const name = "Dara";

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.sidebar}>
        <p>{name}</p>
        <Button>Logout</Button>
      </div>
    </div>
  );
}
