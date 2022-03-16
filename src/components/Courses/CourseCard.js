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
        <div className={styles.courseInfo}>
          <h2 className={styles.subTitle}>Author: </h2>
          <p>{props.authors}</p>
        </div>
        <div className={styles.courseInfo}>
          <h2 className={styles.subTitle}>Duration: </h2>
          <p>{props.duration}</p>
        </div>
        <div className={styles.courseInfo}>
          <h2 className={styles.subTitle}>Created: </h2>
          <p>{props.creation}</p>
        </div>
        <Button>Show Course</Button>
      </li>
    </div>
  );
}
