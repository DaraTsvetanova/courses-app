import "./App.css";
import React, { useState } from "react";
import CreateCourses from "./components/CreateCourses/CreateCourses";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { mockedAuthorsList, mockedCoursesList } from "./mocks";

function App() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList)
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList)

  const createCourseHandler = (title, description, authors, duration) => {
    setCoursesList((prevCoursesList) => {
      return [...prevCoursesList, { title, description, creationDate: new Date(), authors, duration, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <Header />
      <CreateCourses courses={coursesList} authors={authorsList} onCreateCourse={createCourseHandler}></CreateCourses>
      <Courses courses={coursesList} />
    </div>
  );
}

export default App;
