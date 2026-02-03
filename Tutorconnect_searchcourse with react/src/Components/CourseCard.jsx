import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="courses">
      <div className="course-preview">
        <div className="img-container">
          <a href="Bradley's code/bradley'scode.html">
            <img 
              className="img" 
              src={course.image || 'images/Algebra-101.jpg'} 
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
