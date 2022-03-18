import React from "react";

import styles from "./Input.module.css";

export default function Input({ children, placeholder, onChange, type }) {
  return (
    <div>
      <input
        className={styles.input}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
      <label>{children}</label>
    </div>
  );
}
