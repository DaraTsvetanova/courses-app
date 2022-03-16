import React from "react";
import Button from "../Common/Button";

import styles from "./Courses.module.css";
import CoursesList from "./CoursesList";

export default function Courses() {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchBar} />
          <Button>Search</Button>
        </div>
        <div className={styles.addButton}>
          <Button>Add New Course</Button>
        </div>
      </div>
      <CoursesList />
    </div>
  );
}
