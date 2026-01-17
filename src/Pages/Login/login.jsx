import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/WhatsApp_Image_2025-11-29_at_10.33.45-removebg-preview.png";
import email from "../../assets/icons8-email-48.png";
import lock from "../../assets/icons8-lock-30.png";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleStudentSubmission = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // creating and sending data object for email verification
    const data = {
      email: formData.email,
      password: formData.password,
    };
    
    try {
      const response = await fetch(
        `http://localhost:8080/api/Students/${data.email}/${data.password}`,
        {
          method: "GET",
        },
      );

      // Parse JSON response body
      const output = await response.json();

      switch (response.status) {
        case 500:
          alert(output.error || output.message);
          break;
        case 404:
          alert(output.message);
          break;
        case 200:
          navigate("/Search")
          alert(output.message);
          break;
        default:
          alert("Unexpected error occurred");
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  const handleSignUpRedirection = () => {
    navigate("/");
  }

  const handleTutorLogin = () => {
    navigate("/TutorLogin");
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage__description">
        <img src={logo} alt="tutorConnectLogo" />
        <p>Welcome back</p>
        <p>Login to continue your learning journey</p>
      </div>
      <form
        className="LoginPage__loginDetails"
        id="LoginForm"
        onSubmit={handleStudentSubmission}
      >
        <label htmlFor="email">Email address</label>
        <div className="LoginPage__loginDetails-EntryField">
          <img src={email} alt="email" />
          <input
            className="email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <label htmlFor="password">Password</label>
        <div className="LoginPage__loginDetails-EntryField">
          <img src={lock} alt="lock" />
          <input
            className="password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="LoginPage__loginDetails-RememberField">
          <label htmlFor="checkbox" id="remember">
            <input 
              type="checkbox" 
              name="rememberMe" 
              id="checkbox" 
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label>

          <p>Forgot password?</p>
        </div>

        <button id="Login" type="submit">
          Login
        </button>
      </form>
      <div id="LoginPage__selectorSection">
        <p>
          Don't have an account?{" "}
          <a id="signin" href="../dev.tool/index.html" onClick={(e) => {
            e.preventDefault()
            handleSignUpRedirection();
          }}>
            Sign up
          </a>{" "}
        </p>
        <span></span>
        <p>
          Are you a tutor?{" "}
          <a id="TutorSignin" href="#" onClick={(e) => {
            e.preventDefault();
            handleTutorLogin();
          }}>
            Tutor Login
          </a>
        </p>
      </div>
      
      {/* Tutor Login Button - You can show this conditionally or as an alternative */}
      <button 
        id="Tutor_Login" 
        onClick={handleTutorLogin}
        style={{marginTop: '20px'}}
      >
        Login as Tutor
      </button>
    </div>
  );
}

export default LoginPage;