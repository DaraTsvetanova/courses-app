import React from "react";
import Button from "../Common/Button";

import styles from "./CourseCard.module.css";

export default function CourseCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.courseMainInfo}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.courseDescription}>{props.description}</p>
      </div>
      <li className={styles.courseInfoContainer}>
        <p className={styles.courseInfo}>
          <span className={styles.subTitle}>Author:</span>
          {props.authors}
        </p>
        <p className={styles.courseInfo}>
          <span className={styles.subTitle}>Duration:</span>
          {props.duration}
        </p>
        <p className={styles.courseInfo}>
          <span className={styles.subTitle}>Created:</span>
          {props.creation}
        </p>
        <Button>Show Course</Button>
      </li>
    </div>
  );
}
