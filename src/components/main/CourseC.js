import React from 'react';
import './CourseC.css'; // Import the CSS file

const CourseC = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseC;
