import React from 'react'
import Slider from 'react-slick';
import Project from './Project.js';
import './Projects.css'
let data = [
    {
        img : "https://res.cloudinary.com/dqigf7rd4/image/upload/v1676041551/websites%20images/utube-clone_oplgtq.png",
        disc : "This project is a clone of youtube, it uses React Js,Rapid API,MUI and consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!",
        demo: "https://youtube-clone-abhi.netlify.app/ "
    },
    {
        img : "https://res.cloudinary.com/dqigf7rd4/image/upload/v1676041552/websites%20images/ecommerce_btiexy.png",
        disc : "This project based on MERN stack the key features of this project are one can easily add products in their cart and can buy them 24X7. It also consist of admin dashboard where the admin can add or remove products",
        demo: "https://ecommercewebsite-8rix.onrender.com/ "
    },
    {
        img : "https://res.cloudinary.com/dqigf7rd4/image/upload/v1676041550/websites%20images/textutlis_amu9fk.png",
        disc : "TextUtils is a project which counts the number of characters,words and the spaces in between that we enter in the given box and also tells us the total time taken in writing thus it helps us in improving our typing",
        demo:"https://textutlis-wordcounter.netlify.app"
    },
   {
    img:'https://res.cloudinary.com/dqigf7rd4/image/upload/v1676396712/websites%20images/Screenshot_2023-02-14_231401_o22bbv.png',
    disc:"Spotify is a project which is the music website where user can listen the music and this website has the features like play/pause and change the music etc..",
    demo:'https://abhik8261.github.io/spotify-clone/'
   }
    
];
const Slidercom = () => {

    var settings = {
        className: "center",
      centerMode: true,
      
     
        dots: true,
        infinite: true,
        
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:true,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: true,
              speed: 4000,
              autoplaySpeed: 6000,
              pauseOnHover: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode: false,
              speed: 4000,
              autoplaySpeed: 6000,
              pauseOnHover: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              speed: 4000,
              autoplaySpeed: 6000,
              pauseOnHover: true,
            }
          }
        ]
    };
let sliderProject='';


sliderProject=data.map((item,i,demo)=>(
    <Project item={item} key={i} demo={demo}/>
))

  return (
    

   
< >

    <Slider {...settings}>
     
{ sliderProject}
    </Slider>
    

</>
    
  )
}

export default Slidercom