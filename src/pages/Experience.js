// src/pages/Experience.js

import React from "react";
import "./Experience.css"; // Optional: Separate CSS for Experience page

function Experience() {
  return (
    <div className="page-container">
      <h2>Professional Experience</h2>

      {/* Geek Squad Experience */}
      <div className="experience-item">
        <img
          src="/GeekSquadLogo.png"
          alt="Geek Squad Logo"
          className="company-logo"
        />
        <div className="experience-details">
          <h3>Geek Squad, Minnetonka, MN — Advanced Repair Agent</h3>
          <p>Aug 2024 – Present</p>
          <ul>
            <li>
              Diagnose, troubleshoot, and resolve an average of 30+ hardware/software
              issues daily.
            </li>
            <li>
              Perform virus scans, OS repairs, and device configurations on 50+
              devices weekly.
            </li>
            <li>
              Assist customers with data transfers, device setup, and system
              optimization.
            </li>
          </ul>
        </div>
      </div>

      {/* Augsburg University Experience */}
      <div className="experience-item">
        <img
          src="/AugsburgLogo.png"
          alt="Augsburg University Logo"
          className="company-logo"
        />
        <div className="experience-details">
          <h3>Augsburg University, Minneapolis, MN — Student Instructor</h3>
          <p>Jan 2024 – Present</p>
          <ul>
            <li>
              Provide one-on-one instruction to 30 students in computer science labs
              (Python & Java).
            </li>
            <li>
              Increased student success rate by 20% through personalized instruction.
            </li>
          </ul>
        </div>
      </div>

      {/* The Home Depot Experience */}
      <div className="experience-item">
        <img
          src="/HomeDepotLogo.png"
          alt="The Home Depot Logo"
          className="company-logo"
        />
        <div className="experience-details">
          <h3>The Home Depot, Minneapolis, MN — Department Supervisor</h3>
          <p>Aug 2020 – Jan 2024</p>
          <ul>
            <li>
              Led a team of 15 associates to ensure efficient front-end operations.
            </li>
            <li>
              Handled order issues, reducing processing delays by 40%.
            </li>
            <li>
              Maintained highest customer satisfaction scores in the district.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
