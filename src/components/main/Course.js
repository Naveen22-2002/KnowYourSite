import React from 'react';
import CourseC from './CourseC';
import './Course.css'; // Import the CSS file

const Course = () => {
  const courses = [
    {
      title: 'Course 1',
      imageUrl: 'https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg',
      description: 'Description for Course 1',
    },
    {
      title: 'Course 2',
      imageUrl: 'https://example.com/course2.jpg',
      description: 'Description for Course 2',
    },
    {
        title: 'Course 2',
        imageUrl: 'https://example.com/course2.jpg',
        description: 'Description for Course 2',
      },
    // Add more courses as needed
  ];

  return (
    <div>
      <h1>Courses</h1>
      <div className="courses-list">
        {courses.map((course, index) => (
          <CourseC key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
