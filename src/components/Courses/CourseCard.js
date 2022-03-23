import React from "react";
import Button from "../Common/Button";

import styles from "./CourseCard.module.css";

export default function CourseCard({ title, description, authors, duration, creation }) {
  return (
    <div className={styles.card}>
      <div className={styles.courseMainInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.courseDescription}>{description}</p>
      </div>
      <li className={styles.courseInfoContainer}>
        <p className={styles.courseInfo}>
          <span className={styles.subTitle}>Author:</span>
          {authors}
        </p>
        <p className={styles.courseInfo}>
          <span className={styles.subTitle}>Duration:</span>
          {duration}
        </p>
        <p className={styles.courseInfo}>
          <span className={styles.subTitle}>Created:</span>
          {creation}
        </p>
        <Button>Show Course</Button>
      </li>
    </div>
  );
}
