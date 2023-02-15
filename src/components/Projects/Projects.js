import React from 'react'
import './Projects.css'
import Slidercom from './Slidercom'
import {Flip} from 'react-awesome-reveal';
const Projects = () => {
  
  return (
    <div className='con'  data-aos="flip-up"   data-aos-delay="2000">
      
    <Flip bottom><h2 style={{fontSize:'1.9rem'}}>Recent <span style={{color:'red'}}>Projects</span></h2></Flip>
    <p className='para'>My recent projects built using HTML,CSS,Node,React,mongodb etc. I implemented various features,including authentication ,routing and database,to provide a seamless user experience.</p>
    <Slidercom className='slider' />
    </div>
  )
}

export default Projects