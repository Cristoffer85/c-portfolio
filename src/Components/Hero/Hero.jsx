import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Cristoffer Östberg,</span> backend developer based in Sweden.</h1>
        <p>I am a backend developer with experience in primarily Java, C#.NET and Python. And also alot of React (both .js and .ts) and HTML and CSS. I'm passionate about building scalable and efficient systems in both ends.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>   
  )
}

export default Hero