import React from "react";
import "./PopularCourses.css";
import TableauImage from "../../images/MaskGroup2.png"; // Update this with the correct path to your images
import PowerBIImage from "../../images/MaskGroup5.png";
import PythonSQLImage from "../../images/MaskGroup2.png";

const PopularCourses = () => {
  const courses = [
    {
      title: "Tableau and Advanced Excel",
      description:
        "Launch your career in Data Analytics. Build in-demand skills and gain credentials to go from beginner to job-ready in 8 months or less. No degree or prior experience required.",
      students: 60,
      price: "$20",
      image: TableauImage,
    },
    {
      title: "Power BI and Advanced Excel",
      description:
        "Become a Power BI and Power Platform Expert. Boost Productivity, Automate Processes, and Gain Valuable Insights.",
      students: 60,
      price: "$20",
      image: PowerBIImage,
    },
    {
      title: "Python and SQL",
      description:
        "Analyze data within a database using SQL and Python. Construct basic to intermediate level SQL queries using DML commands.",
      students: 60,
      price: "$20",
      image: PythonSQLImage,
    },
  ];

  return (
    <section className="popular-courses">
      <h1>Popular Courses</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-footer">
                <span>{course.students} Students</span>
                <span>{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
