// src/pages/Home.js

import React from 'react';
import "./Home.css"
import MatrixBackground from "./MatrixBackground"; 

function Home() {
  return (
    <div className="home-page" style={{ position: "relative", zIndex: -1, color: "#fff" }}>
      <MatrixBackground />
      <h1 className="welcome" >Welcome to My Personal Website</h1>
      <img className="home-profile-photo"
          src="/profileImage.jpg"
          alt="Profile"
          
        />
      <h2 className="bio">
        Hello! I'm Rashid, a passionate developer based in Minneapolis, MN. Explore my background, skills, experience, and projects through the navigation above.
      </h2>
      
    </div>
  );
}

export default Home;
