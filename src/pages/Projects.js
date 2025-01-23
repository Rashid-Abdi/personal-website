// src/pages/Projects.js

import React from "react";

function Projects() {
  return (
    <div className="page-container">
      <h2>Projects</h2>

      <h3>Personal Website — React, JavaScript, HTML/CSS</h3>
      <ul>
        <li>
        Built a responsive personal website using React.js to showcase professional background, skills, and project
        portfolio.
        </li>
        <li>
        Utilized React components and state management to create a dynamic user experience with smooth navigation
        and intuitive design.
        </li>
      </ul>

      <h3>Student Management System — Java, OOP, Sorting & Searching Algorithms</h3>
      <ul>
        <li>
        Developed a robust Java application to manage student profiles, courses, and grades, leveraging object-oriented
        principles for maintainability and scalability.
        </li>
        <li>
        Implemented CRUD operations, GPA calculation, and transcript generation using an ADT list for streamlined
        data manipulation.
        </li>
        <li>
        Incorporated sorting and searching algorithms to optimize data retrieval and enhance system performance.
        </li>
      </ul>

      <h3>Unity Games — C#</h3>
      <ul>
        <li>
          Implemented C# scripts for movement, obstacle generation, collision
          detection.
        </li>
        <li>
          Integrated 2D assets and animations for a smooth experience.
        </li>
      </ul>
    </div>
  );
}

export default Projects;
