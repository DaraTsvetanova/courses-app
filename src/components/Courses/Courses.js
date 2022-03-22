import React, { useState } from "react";
import { mockedCoursesList } from "../../mocks";
import Button from "../Common/Button";

import styles from "./Courses.module.css";
import CoursesList from "./CoursesList";
import SearchBar from "./SearchBar";

export default function Courses({ courses }) {
  const [input, setInput] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const searchHandler = () => {
    const refinedCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(input.toLowerCase()) ||
        course.id === input
    );

    setFilteredCourses(refinedCourses);
  };

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      setFilteredCourses(mockedCoursesList);
    }
    setInput(inputValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <SearchBar onInputChange={inputHandler} onSearchClick={searchHandler}>
        </SearchBar>
        <div className={styles.addButton}>
          <Button>Add New Course</Button>
        </div>
      </div>
      <CoursesList courses={filteredCourses} />
    </div>
  );
}
