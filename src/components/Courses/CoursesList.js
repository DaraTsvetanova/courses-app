import React from "react";

import CourseCard from "./CourseCard";

import { formatDuration } from "../Helpers/utils";

import styles from "./CoursesList.module.css";

export default function CoursesList({ courses, authors }) {
  return (
    <ul className={styles.coursesList}>
      {courses.map((course) => {
        const duration = formatDuration(course.duration)
        return (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            authors={course.authors
              .map((authorId) => {
                return authors.find(
                  (a) => a.id === authorId
                )?.name;
              })
              .join(", ")}
            duration={duration}
            creation={course.creationDate}
          />
        );
      })}
    </ul>
  );
}
