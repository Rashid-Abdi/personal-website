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

      {/* personal wesbite */}
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
      {/* iOS app*/ }
      <div className="project">
        <h3>Book Sharing iOS App — Swift, MySQL, Node.js</h3>
        <ul>
          <li>Designed and developing a Swift-based iOS application that enables users to share and claim books within a community </li>
          <li>Integrated a MySQL database to store and update book listings in real-time when new books are added or claimed.</li>
          <li>Built responsive UI components to display available books, user profiles, and claimed status using Swift UI.</li>
        </ul>
      </div>

      {/* student management system */}
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
      {/*Match Game*/}
      <div className="project">
        <h3>Match Game — React, JavaScript, HTML/CSS</h3>
        <ul>
          <li>A dynamic, interactive memory match game built entirely with React, designed to showcase component-based architecture and modern front-end development practices. </li>
          <li>Utilized React Hooks (e.g., useState and useEffect) to manage game state, including card flips, matching logic, and score tracking.</li>
          <li>Implemented smooth animations for card flips and responsive design to provide an engaging user experience across devices.</li>
        </ul>
      </div>

      

    </div>
  );
}

export default Projects;
