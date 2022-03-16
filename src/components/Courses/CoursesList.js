import React from "react";
import CourseCard from "./CourseCard";
import { mockedCoursesList, mockedAuthorsList } from "../../mocks";

import styles from "./CoursesList.module.css";

export default function CoursesList() {
  return (
    <ul className={styles.coursesList}>
      {mockedCoursesList.map((course) => {
        const minutes = course.duration % 60;
        const hours = (course.duration - minutes) / 60;
        const output = hours + ":" + minutes + " hours";
        return (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            authors={course.authors
              .map((authorId) => {
                return mockedAuthorsList.find(
                  (mockedAuthor) => mockedAuthor.id === authorId
                )?.name;
              })
              .join(", ")}
            duration={output}
            creation={course.creationDate}
          />
        );
      })}
    </ul>
  );
}
