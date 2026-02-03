import React from 'react';
import CourseCard from './CourseCard';

function CourseGrid({ courses }) {
  if (courses.length === 0) {
    return (
      <div className="grid-prev">
        <p style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '40px', color: '#666' }}>
          No courses found
        </p>
      </div>
    );
  }

  return (
    <div className="grid-prev" id="courseContainer">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseGrid;
