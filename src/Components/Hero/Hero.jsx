import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Cristoffer Östberg,</span> backend developer based in Sweden.</h1>
        <p>I am a backend developer with experience in primarily Java, C#.NET and Python. In frontend React with both js and ts. I'm passionate about building visually appealing, scalable and efficient systems in every end.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>   
  )
}

export default Hero