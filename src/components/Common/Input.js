import React from "react";

import styles from "./Input.module.css";

export default function Input({ children, placeholder, onChange, type, value, pattern }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{children}</label>
      <input
        className={styles.input}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        pattern={pattern}
      />
    </div>
  );
}
