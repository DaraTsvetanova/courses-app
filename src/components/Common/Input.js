import React from "react";

import styles from "./Input.module.css";

export default function Input({ label, id, placeholder, onChange, type, value, pattern }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        className={styles.input}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        pattern={pattern}
      />
    </div>
  );
}
