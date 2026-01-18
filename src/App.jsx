import { BrowserRouter, Routes, Route } from "react-router-dom";

import TutorLogin from "./Pages/Login/Tutorlogin.jsx";
import LoginPage from "./Pages/Login/login";
import Signup from "./Pages/signup/Signup.jsx";
import Search from "./Pages/SearchCourse/search.jsx";
import Tutor from "./Pages/selectTutor/tutor.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/StudentLogin" element={<LoginPage />} />
        <Route path="/TutorLogin" element={<TutorLogin />} />
        <Route path="/Search" element={<Search/>}/> 
        <Route path="/SelectTutor" element={<Tutor/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
