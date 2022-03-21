import "./App.css";
import CreateCourses from "./components/Common/CreateCourses/CreateCourses";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      {/* <CreateCourses></CreateCourses> */}
      <Courses />
    </div>
  );
}

export default App;
