import React from "react";
import {
  Navbar,
  About,
  
  Projects,
  Home,
  Footer,
  Skills,
  Profile
} from "../index";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <Home />
      <div id="aboutme">
        <h2 >About ME</h2>
      </div>
      <About />
      <div id="skills">
       </div>
        <Skills />



        <div className="projects" id="projects">
        
        </div>
          <Projects />

        

        <div id="profile">
          
        </div>
        <Profile/>

        <Footer />
     
    </>
  );
};

export default Portfolio;
