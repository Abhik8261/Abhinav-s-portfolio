
import React from 'react'
import { Slide,Fade } from 'react-awesome-reveal';
import Slider from 'react-slick'
import './Skill.css'
import C from '../images/C.png'
import Ht from '../images/download (1).png'
import Cplus from '../images/c++.png'
import Cs from '../images/css3.png'
import Ex from '../images/express.png'
import Git from '../images/Github.png'
import JS from '../images/js.png'
import Md from '../images/mongo db.png'
import Mui from '../images/MUI.png'
import Nod from '../images/nodejs.png'
import Re from '../images/React.png'
import R from '../images/redux.png'
import B from '../images/Bootstrap .png'
const Skill = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   
 <div className="skill" data-aos="fade-up"   data-aos-delay="1000"   >
    <div>
      <Slide >
       <h2 style={{fontSize:'8vh',color:"whitesmoke"}}> Skills... </h2>

      </Slide>
        <Slider {...settings}>
          
          <div className='skillpr skill-img'>
            <img src={C} alt="" />
            
          </div>
         
          <div className='skill-img skillpr'>
            <img src={Cplus} alt=""  />
          </div>
          <div className='skill-img skillpr'>
            <img src={Ht} alt="" />
          </div>
          <div className='skill-img skillpr'>
           <img src={Cs} alt="" />
          </div>
          <div className='skill-img skillpr'>
          <img src={B} alt="" />
          </div>
          <div className='skill-img skillpr'>
          <img src={Git} alt="" />
          </div>
          <div className='skill-img skillpr'>
            <img src={JS} alt="" />
          </div >
          <div className='skill-img skillpr'>
           <img src={Mui} alt="" />
          </div>
          <div className='skill-img skillpr'>
           <img src={Nod} alt="" />
          </div>
          <div className='skill-img skillpr'>
           <img src={Re} alt="" />
          </div>
          <div className='skill-img skillpr'>
           <img src={R} alt="" />
          </div >
          <div  className='skill-img skillpr'>
           <img src={Md} alt="" />
          </div >
          <div className='skill-img skillpr' >
           <img src={Ex} alt="" />
          </div>
        </Slider>
      </div>
   </div>
   
   
  )
}

export default Skill