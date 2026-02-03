import { BrowserRouter, Routes, Route } from "react-router-dom";

import TutorLogin from "./Pages/Login/Tutorlogin.jsx";
import LoginPage from "./Pages/Login/login";
import Signup from "./Pages/signup/Signup.jsx";
import Tutor from "./Pages/selectTutor/tutor.jsx";
import SearchCourse from "./Pages/SearchCourse/SearchCourse.jsx";
import TutorPage from "./Pages/viewTutor/dt.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/StudentLogin" element={<LoginPage />} />
        <Route path="/TutorLogin" element={<TutorLogin />} />
        <Route path="/SelectTutor" element={<Tutor />} />
        <Route path="/SearchCourse" element={<SearchCourse />} />
        <Route path="/viewTutor" element={<TutorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
