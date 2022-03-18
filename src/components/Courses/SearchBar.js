import React, { useState } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";

import styles from "./SearchBar.module.css";

export default function SearchBar({ children }) {
  return <div className={styles.searchContainer}>{children}</div>;
}
