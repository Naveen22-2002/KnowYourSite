import React from 'react';
import './most-visitede-courses.css'; 
import CourseComponent from './CourseComponent';

const coursesData = [
 
  {
    title: 'Web Development Bootcamp',
    imageUrl: 'https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg',
    description: 'Master the latest web technologies - HTML, CSS, JavaScript, Node.js, and more!',
    priority: 5,
  },
  {
    title: 'React.js Essentials',
    imageUrl: 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
    description: 'Learn React.js from scratch and build modern web applications with ease.',
    priority: 4,
  },
  {
    title: 'Python Programming Masterclass',
    imageUrl: 'https://getwallpapers.com/wallpaper/full/8/9/a/145400.jpg',
    description: 'Become a Python expert and dive into data science, machine learning, and automation.',
    priority: 4,
  },
  {
    title: 'Java Fundamentals',
    imageUrl: 'https://1.bp.blogspot.com/-avaxN5Q-8_A/YDpwMElhG0I/AAAAAAAAL-U/07u6s-6n3esWb_2HPQv44jmtGaNI-UtQgCLcBGAsYHQ/s16000/javas.png',
    description: 'Start your journey into Java programming and develop powerful applications.',
    priority: 3,
  },
  {
    title: 'Full Stack Web Development',
    imageUrl: 'https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer-768x431.png',
    description: 'Build and deploy full-stack web applications using MERN stack - MongoDB, Express, React, Node.js.',
    priority: 5,
  },
  {
    title: 'Data Science and Machine Learning',
    imageUrl: 'https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg',
    description: 'Unlock the power of data with Python, TensorFlow, and advanced machine learning techniques.',
    priority: 4,
  }
  
];

const MostVisitedCourses = () => {
  return (
    <div className="courses-container">
      {coursesData.map((course, index) => (
        <CourseComponent
          key={index}
          title={course.title}
          imageUrl={course.imageUrl}
          description={course.description}
          priority={course.priority}
        />
      ))}
    </div>
  );
}

export default MostVisitedCourses;
