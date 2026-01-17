import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/WhatsApp_Image_2025-11-29_at_10.33.45-removebg-preview.png";
import email from "../../assets/icons8-email-48.png";
import lock from "../../assets/icons8-lock-30.png";

function TutorLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTutorSubmission = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/Tutors/${formData.email}/${formData.password}`,
        {
          method: "GET",
        },
      );

      const output = await response.json();

      switch (response.status) {
        case 500:
          alert(output.error || output.message);
          break;
        case 404:
          alert(output.message || "Tutor not found");
          break;
        case 200:
          alert(output.message || "Login successful");
          // Redirect or handle successful login here
          navigate("/Search")
          break;
        default:
          alert("Unexpected error occurred");
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  const handleStudentLoginRedirect = () => {
    navigate("/StudentLogin");
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage__description">
        <img src={logo} alt="ConnectLogo" />
        <p>Tutor Portal</p>
        <p>Login to manage your courses</p>
      </div>
      <form
        className="LoginPage__loginDetails"
        id="tutorLogin"
        onSubmit={handleTutorSubmission}
      >
        <label htmlFor="tutorEmail">Email address</label>
        <div className="LoginPage__loginDetails-EntryField">
          <img src={email} alt="email" />
          <input
            className="email"
            type="email"
            name="email"
            id="tutorEmail"
            placeholder="Enter Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <label htmlFor="tutorPassword">Password</label>
        <div className="LoginPage__loginDetails-EntryField">
          <img src={lock} alt="lock" />
          <input
            className="password"
            type="password"
            name="password"
            id="tutorPassword"
            placeholder="Enter Your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button id="Tutor_Login" type="submit">
          Login as Tutor
        </button>
      </form>
      <div id="LoginPage__selectorSection">
        <p>
          Are you a student?{" "}
          <a id="signin" href="#" onClick={(e) => {
            e.preventDefault();
            handleStudentLoginRedirect();
          }}>
            Student Login
          </a>{" "}
        </p>
        <span></span>
        <p style={{marginTop: '10px'}}>
          Don't have an account?{" "}
          <a id="signin" href="../dev.tool/index.html">
            Sign up as Tutor
          </a>
        </p>
      </div>
    </div>
  );
}

export default TutorLogin;