import React from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";

import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const placeholder = "Enter course name or id...";

  return <div className={styles.searchContainer}>
    <Input
      onChange={props.onInputChange}
      type={props.type}
      placeholder={placeholder}
    />
    <div className={styles.searchButton}>
      <Button onClick={props.onSearchClick}>Search</Button>
    </div></div>;
}
