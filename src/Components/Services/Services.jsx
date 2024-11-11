import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.png'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  const servicesData = [
    {
        s_no: "01",
        s_name: "Backend development",
        s_desc: "Build your next server running in the background with help of APIs and both relational and documentbased databases.",
        link: "/Pages/Backend/Backend"
    },
    {
        s_no: "02",
        s_name: "Frontend development",
        s_desc: "Would you like a page similar to this one or another client? I can help with that.",
        link: "/Pages/Frontend/Frontend"
    },
    {
        s_no: "03",
        s_name: "Full stack development",
        s_desc: "If you want to go full way with both a background server securely storing your data and frontend to display it I can help with that too.",
        link: "/Pages/Fullstack/Fullstack"
    },
    {
        s_no: "04",
        s_name: "Graphics Design",
        s_desc: "Believe it or not my first major orientation here in life starting at just 6 years old was actually aesthetical. So I´m actually not terrible at this as well.",
        link: "/Pages/GraphDesign/GraphDesign"
    },
    {
        s_no: "05",
        s_name: "Game development",
        s_desc: "What are you saying? Have you (almost) completed 2 games as well, one in Java and one in C++? Atleast i know the basics.",
        link: "/Pages/GameDev/GameDev"
    },
    {
        s_no: "06",
        s_name: "Be a real good pal!",
        s_desc: "Or if you just want a real good friend here you got me! Connect with me (in the near future you can also hit me up on ByteBook! - Ill announce when its up) The only requirement is that you become my good pal too.",
        link: "/Pages/Friend/Friend"
    },
  ];

  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="services-container">
           {servicesData.map((service, index) => {
            return (
              <Link to={service.link} key={index} className="services-link">
                <div className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt=""/>
                    </div>
                </div>
              </Link>
            )
           })}
        </div>
    </div>
  )
}

export default Services