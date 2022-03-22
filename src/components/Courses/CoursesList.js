import React from "react";
import CourseCard from "./CourseCard";
import { formatDuration } from "../Helpers/utils";
import { mockedAuthorsList } from "../../mocks";

import styles from "./CoursesList.module.css";

export default function CoursesList(props) {
  return (
    <ul className={styles.coursesList}>
      {props.courses.map((course) => {
        const duration = formatDuration(course.duration)
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
            duration={duration}
            creation={course.creationDate}
          />
        );
      })}
    </ul>
  );
}
