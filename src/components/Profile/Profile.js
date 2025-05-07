import React, { Fragment,useRef } from 'react';
import './Profile.css';
import emailjs from '@emailjs/browser';
import {MdAlternateEmail} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {HiOutlineMailOpen} from "react-icons/hi";
import {AiFillGithub, AiFillLinkedin, } from "react-icons/ai";
import {BsFacebook, BsInstagram,BsFillArrowUpSquareFill} from "react-icons/bs";
import { FormControl } from '@mui/material';
import {FiMail, FiPhoneCall} from "react-icons/fi";
import { useForm, ValidationError } from '@formspree/react';
import { Slide } from 'react-awesome-reveal';
const Profile = () => {
    const form=useRef();
     const [state, handleSubmit] = useForm("xeqdorro");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const ScrollHandler = () => {
        window.scroll({
            top: 0,
            behavior : "smooth"
        })
    }
        

      const SendEmail =(e)=>{
        e.preventDefault();

    emailjs.sendForm(process.env.React_App_SERVICE_ID, process.env.React_App_TEMPLATE_ID, form.current, process.env.React_App_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    const refresh=()=>{
        
    }

    
  return (
   <Fragment className='Profile1'>
     
        <Fragment className='profile3'>
    

        

            <Slide><h2 id='p'>Profile</h2></Slide>
                    <div className='right'>
                        <div className="set">


                        <Slide>
                <div className="links">
                    <h2>Contact me Directly:</h2>
                    <div >
                        <span><FiPhoneCall/></span>
                        <a href="tel:+918178568527">+353 894124471</a>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen/></span>
                        <a href="mailto:abhik.tech8261@gmail.com">abhik.tech8261@gmail.com</a>
                    </div>
                </div>
                </Slide>
                <Slide>
                    <div className="profile2">
                        <h2>Check my Profiles:</h2>
                        <div className="icons">
                            <span><a href="https://github.com/Abhik8261" target="_blank"><AiFillGithub/></a></span>
                            <span><a href="https://www.facebook.com/abhinav.kumar.756859/" target="_blank"><BsFacebook/></a></span>
                            <span><a href="https://www.instagram.com/abhik.8261/" target="_blank"><BsInstagram/></a></span>
                            <span><a href="https://www.linkedin.com/in/abhinav-kumar-799725228/" target="_blank"><AiFillLinkedin/></a></span>
                        </div>
                    </div>
                    </Slide>

                        </div>
           

                <Slide>
                    
                    <FormControl >
        
                    <form ref={form} onSubmit={SendEmail} >
                    <Slide ><h2 id='contact' style={{color:'white' }} >Contact <span style={{color:'red'}}>Me</span></h2></Slide>
                    <div className="name">
                        <div><CgProfile style={{color:'white'}}/></div>
                         <input 
                        id='name' name='user_name'
                        type="text" placeholder='Fullname...' />
                    </div>
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        
                    />
                    <div className="email">
                        <div><MdAlternateEmail style={{color:'white'}}/></div>
                        <input 
                        id="email" name='user_email'
                        type="email" placeholder='Email...' />
                    </div>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                       
                    />
                    <div className="message">
                        <div className='messageIcon'><FiMail style={{color:'white'}}/></div>
                        <textarea
                        id='message' name='message'
                        cols="30" rows="10" placeholder='Message...' ></textarea>
                    </div>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                       
                    />
                    <button type='submit' value='Send' onClick={()=>{alert('Form is submitted')}} >Submit</button>
                </form>
                    </FormControl>
                </Slide>
                    <BsFillArrowUpSquareFill className='scroll' onClick={ScrollHandler}/>
                    </div>
        
        </Fragment>
   </Fragment>
  )
}

export default Profile