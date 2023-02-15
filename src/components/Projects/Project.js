import React from 'react'
import './Project.css'

const Project = (props) => {
    const{img,disc,demo}=props.item;
  return (
   <div className='pr  proj'>

<img id='img' src={img} alt="Project-img" />
    <div className="disc">
        <h2 style={{fontSize:'1rem'}}>Description</h2>
        <p id='dis' >{disc}<a style={{color:'red',fontSize:'.8rem'}} href={demo} target='_blank'>demo</a></p>
        
    </div>
   </div>
  )
}

export default Project