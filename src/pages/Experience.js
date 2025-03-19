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
          <h3>Geek Squad, Minnetonka, MN — Consultation Agent</h3>
          <p>Aug 2024 – Present</p>
          <ul>
            <li>
            Provide tailored technical support by diagnosing and troubleshooting hardware, software, and network issues, ensuring effective solutions for diverse customer needs.
            </li>
            <li>
              Assist customers with data transfers, device setups, and system
              optimizations.
            </li>
            <li>
              Perform functionality inspections, resets and operating system repairs for various devices.
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
            <li>Provided targeted peer support and resources to students tackling computer science assignments, offering one-on-
            one guidance and clarifying complex topics to boost understanding and confidence.</li>
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
              Supervised a team of 15 associates, streamlining front-end operations and consistently surpassing service goals
and metrics.
            </li>
            <li>
              Handled order issues, reducing processing delays by 40%.
            </li>
            <li>
            Achieved the district’s highest customer satisfaction rating by maintaining the largest share of 100% satisfaction
            surveys.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
