import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button type={type || 'button'} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
