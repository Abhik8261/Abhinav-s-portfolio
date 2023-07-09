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
    img:'https://res.cloudinary.com/dqigf7rd4/image/upload/v1688897714/todolist_w9tcmh.png',
    disc:"I developed a feature-rich solution that offers seamless task management. The application includes essential features such as marking tasks as done, editing existing tasks, and managing active tasks. By leveraging the power of Redux, I ensured efficient state management and smooth data flow throughout the application.",
    demo:'https://todolistmernapp.netlify.app',
   },
   {

     img:'https://res.cloudinary.com/dqigf7rd4/image/upload/v1676795828/websites%20images/Screenshot_2023-02-19_140609_ponxw8.png',
     disc:'X-Crypto is a ReactJS project that offers users the ability to view the top 100 cryptocurrency exchanges and over 25,000 coins, all in a seamless and user-friendly manner. The project is further enhanced by the API integration using Axios, which provides real-time data. Additionally, users can choose between a light and dark theme, allowing for a personalized experience.',
     demo:'https://x-cryptoinfo.netlify.app/'
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