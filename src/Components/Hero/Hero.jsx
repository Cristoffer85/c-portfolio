import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="CO-profile img" title="CO"/>
        <h1><span>I'm Cristoffer Östberg,</span> developer based in Sweden.</h1>
        <p>I am a developer with experience in primarily Java, C#.NET, AWS and Angular and React. I'm passionate about building functional, scalable and efficient systems in every end. Since im mainly backend - this portfolio mainly CoPilot helped alot creating.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <Link to="/Pages/Resume/Resume" className="hero-link">
                <div className="hero-resume">Resumes and Certifications [PDF]</div>
            </Link>
        </div>
    </div>   
  )
}

export default Hero