import React from 'react';
import { useNavigate } from 'react-router-dom';
import Algebra from "../Search course/images/Algebra-101.jpg";


function CourseCard({ course }) {
  const navigate = useNavigate();

  function HandleNavigation() {
    navigate('/viewTutor');
  }

  return (
    <div className="courses" onClick={HandleNavigation}>
      <div className="course-preview">
        <div className="img-container">
          <a>
            <img 
              className="img" 
              src={course.image || Algebra} 
              alt={course.title}
            />
          </a>
        </div>
        <div className="price-section">
          <a className="tooltip">{course.price}</a>
        </div>
      </div>

      <div className="course-info">
        <div className="labels">
          {course.level && <a className="levels">{course.level}</a>}
          {course.category && <a className="type">{course.category}</a>}
        </div>

        <div className="dest">
          <p className="des">{course.title}</p>
          <p className="desmain">{course.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;