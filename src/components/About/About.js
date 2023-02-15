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
          I am a current B.Tech student pursuing CSE(AI&ML) with a passion for full-stack web development. I have experience working with the MERN stack and a variety of programming languages. As a quick learner, I enjoy taking on new challenges and projects to expand my skillset. 
           
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
