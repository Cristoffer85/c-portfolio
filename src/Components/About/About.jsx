import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern2.png'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
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
                <p>I am a developer with up to a year work experience where mostly Java, C# and AWS have been used.</p>
                <p>My degree certificate is in Java where as a class representative was a dedicated student and received among highest degrees in class. Created several projects for both school, work and private, where languages include Java, C#(.NET), Python, C++ and React (Javascript + Typescript). Cloud technologies are mainly AWS and third-party like Render.com and Netlify.</p>
                <p>Education programmes major was integration, where i picked up and learned alot about API:s, Databases, Microservices, Agile teamstructure and logic in general. I like to bring scalability and efficiency (and design with just a little UX as well) to applications and bring my best to every project.</p>
                <p>Have 7+ years of consultancy experience, and come from a background regarding Security (degree from Swedish ministry of Civil Defense - MSB), Pedagogy and Logistics. Like clean code and collaboration - since i always want to avoid being the single-point of succes or failure.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Java</p><hr className="hr-java" /></div>
                <div className="about-skill"><p>AWS</p><hr className="hr-aws" /></div>
                <div className="about-skill"><p>C# & .NET</p><hr className="hr-csharp" /></div>
                <div className="about-skill"><p>Python</p><hr className="hr-python" /></div>
                <div className="about-skill"><p>C++</p><hr className="hr-cpp" /></div>
                <div className="about-skill"><p>Angular + React</p><hr className="hr-angular-react" /></div>
                <div className="about-skill"><p>HTML & CSS</p><hr className="hr-htmlcss" /></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
                <h5>(0.5 years work)</h5>
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