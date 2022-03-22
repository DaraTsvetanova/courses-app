import "./App.css";
import React, { useState } from "react";
import CreateCourses from "./components/CreateCourses/CreateCourses";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { mockedAuthorsList, mockedCoursesList } from "./mocks";

function App() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList)
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList)
  const [isToggled, setIsToggled] = useState(false)

  const createCourseHandler = (course) => {
    setCoursesList([...coursesList, course])

    setAuthorsList([...authorsList, course.authors])

    setIsToggled(false)
  }

  const toggleHandler = () => {
    setIsToggled(!isToggled)
  }


  return (
    <div>
      <Header />
      {isToggled && <CreateCourses onToggle={toggleHandler} courses={coursesList} authors={authorsList} onCreateCourse={createCourseHandler} />}
      {!isToggled && <Courses onToggle={toggleHandler} courses={coursesList} authors={authorsList} />}
    </div>
  );
}

export default App;
