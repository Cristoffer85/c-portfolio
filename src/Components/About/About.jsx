import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
        </div>
          <div className="about-right">
            <div className="about-para">
                <p>I am a junior backend developer with up to a year work experience where mostly Java, C# and Python have been used.</p>
                <p>My degree certificate is in Java where i was a very dedicated student and received among the highest degrees in class. I´ve created several projects both for school and work but also private where languages include Java, C#(.NET), Python, C++ and React (Javascript + Typescript)</p>
                <p>The education programmes major was integration, where i picked up and learned alot about API:s, Databases, Microservices, Agile teamstructure and logic in general. I love to bring scalability and efficiency (and design with just a little UX as well) to applications and bring my best to every project.</p>
                <p>Have 7+ years of consultancy experience, and come from a background regarding Pedagogy, Logistics and Security.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Java</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>C# & .NET</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"20%"}}/></div>
                <div className="about-skill"><p>React Js + Ts</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
                <h5>(0.5 years workexperience)</h5>
            </div>
            < hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            < hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS AND CLASSMATES</p>
            </div>
        </div>
    </div>
  )
}

export default About