import React from "react";
import "./About.css";
import pic from '../images/pic.jpeg'
const About = () => {
  return (
    <div className="Intro"  data-aos="fade-up"  data-aos-delay="1000"
    >
  
      <div className="effect">
        <div className="about"  >
       
          <p style={{marginTop:'2px'}}>
          I am a B.Tech graduate in CSE (AI & ML) and currently pursuing an M.Eng. in Computer Vision and Artificial Intelligence at the University of Limerick. With a strong foundation in AI, I am passionate about full-stack web development using the MERN stack and various programming languages. A quick learner, I eagerly tackle new challenges.
           
          </p>
        </div>
        <div className="picture">
          <img src={pic} alt="Error" />
        </div>
      </div>
    </div>
  );
};

export default About;
