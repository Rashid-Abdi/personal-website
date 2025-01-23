// src/pages/Education.js

import React from "react";
import "./Education.css"; // Optional: Separate CSS for Education page

function Education() {
  return (
    <div className="page-container">
      <h2>Education</h2>
      
      {/* Profile Photo */}
      <div className="profile-section">
        <img
          src="/profileImage.jpg"
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-details">
          <p>
            <strong>BS: Computer Science & Mathematics</strong> <br />
            Augsburg University, Minneapolis, MN <br />
            Graduation: May 2026 <br />
            Cumulative GPA: 3.87
          </p>
          <p>
            <strong>Core Classes:</strong> Introduction to Python, Java Object-Oriented
            Programming, Data Science with R, Data Structures, Algorithms, Software Design & Developement, and Mobile Computing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
