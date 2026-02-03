import React from 'react';
import logo from "../Search course/images/IMG-20251129-WA0059-cropped.jpg";
import profilePic from "../Search course/images/WhatsApp Image 2025-12-06 at 3.31.40 PM.jpeg";

function Header() {
  return (
    <header>
      <div className="subheaderdiv1">
        <img className="logo" src={logo} alt="Logo" />
        <a>TutorConnect</a>
      </div>
      
      <div className="subheaderdiv2">
        <a>Logout</a>
        <img className="exit" src={profilePic} alt="Profile" />
      </div>
    </header>
  );
}



export default Header;