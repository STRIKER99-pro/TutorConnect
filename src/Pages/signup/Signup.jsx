import React from "react";
import Header from "./Header.jsx"
import SignUp from "./sign.jsx";
import Content from "./content.jsx";
import TutorSignUp from "./TutorSignUp.jsx";
import "./signup.css"

const Signup = () => {
  return (
    <div className="sign-up">
      <Header />
      <Content />
      <SignUp />
      {/* <TutorSignUp /> */}
    </div>
  );
};

export default Signup;
