import React, { useState } from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
const Home = () => {
const [state]=useState({
  title:'Hi,',
  titlemid:"I'm",
  titleone:"Abhinav Kumar",
});



  return (

    <div className='content' style={{background:'black'}} >
      <h1>
       

        <div className="title">{state.title}</div>
        <div className="title">{state.titlemid}</div>
        <div className="title">{state.titleone}</div>
        
      <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [" Web-Developer", " Tech Enthusiast","Programmer"],
            }}/>
      </h1>

      

      

      <div className="wrapper">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
   


   

  )
}

export default Home