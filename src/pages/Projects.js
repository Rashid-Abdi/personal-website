// src/pages/Projects.js

import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css"; // Import the corresponding CSS file

function Projects() {
  return (
    <div className="page-container">
      {/* Header with Projects Title and GitHub Icon */}
      <div className="projects-header">
        <h2>Projects</h2>
        <a
          href="https://github.com/rashid-abdi" // Replace with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="github-icon"
        >
          <FaGithub size={32} />
        </a>
      </div>

      {/* Project 1 */}
      <div className="project">
        <h3>Personal Website — React, JavaScript, HTML/CSS</h3>
        <ul>
          <li>
            Built a responsive personal website using React.js to showcase professional background, skills, and project portfolio.
          </li>
          <li>
            Utilized React components and state management to create a dynamic user experience with smooth navigation and intuitive design.
          </li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="project">
        <h3>Student Management System — Java, OOP, Sorting & Searching Algorithms</h3>
        <ul>
          <li>
            Developed a robust Java application to manage student profiles, courses, and grades, leveraging object-oriented principles for maintainability and scalability.
          </li>
          <li>
            Implemented CRUD operations, GPA calculation, and transcript generation using an ADT list for streamlined data manipulation.
          </li>
          <li>
            Incorporated sorting and searching algorithms to optimize data retrieval and enhance system performance.
          </li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="project">
        <h3>Unity Games — C#</h3>
        <ul>
          <li>
            Implemented C# scripts for movement, obstacle generation, collision detection.
          </li>
          <li>
            Integrated 2D assets and animations for a smooth experience.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
