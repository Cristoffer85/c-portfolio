import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Portfolio/Portfolio.css';

import x from '../../assets/x.ico';
import Githubrepomain from '../../assets/Githubrepomain.png';

import ByteBook from '../../assets/ByteBook.png'
import Flakeville from '../../assets/Flakeville.png'
import C from '../../assets/C.png'
import HoneyCombOdyssey from '../../assets/HoneyCombOdyssey.png'
import Logodesign from '../../assets/Logodesign.png'
import LateraRaceTracer from '../../assets/LateraRaceTracer.png'
import SantaSelector from '../../assets/SantaSelector.png'

import { FaGithub } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";

const Portfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { headerId, scrollToTop } = location.state || {};

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'work', instant: true } });
  };

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (headerId) {
      const element = document.getElementById(headerId);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    }
  }, [headerId, scrollToTop]);

  return (
    <div className="subpage-container">
      <img src={x} alt="Back" className="back-icon" onClick={handleBackClick} />
      <div className="content-grid">
        <h1>Portfolio</h1>
        <p className="both-columns">My portfolio page - where you can view a screenshot from the repository mainpage on Github, and also a link to it.</p>
        <img src={Githubrepomain} alt="" />

        <div className="right-column link-container">
            <FaGithub /> <a href="https://github.com/Cristoffer85" target="_blank" rel="noopener noreferrer">GITHUB MAIN</a>
        </div>
        
        <div className="blank-row both-columns"></div>
        <h3 className="left-column">Projects listed:</h3>
        <hr className="both-columns"></hr>

          <h3 id="CO" className="left-column">CO</h3>
          <p className="both-columns">This portfolio web application. Built completely as a pure frontend application.</p>
          <img className="left-column" src={C} alt="" title="CO"/>
          <div className="right-column link-container">
            <h2>TECHNOLOGIES USED:</h2>
            <p>React (Vite), JavaScript, Netlify</p>
                <br /><br /><p>Github repo is private, but feel free to ask for access through the contact form.</p><br />
                <IoHomeOutline /> <a href="https://co-po.netlify.app/" target="_blank" rel="noopener noreferrer">Co Portfolio</a>
              </div>
          <hr className="both-columns"></hr>

          <h3 id="ByteBook" className="left-column">ByteBook</h3>
          <p className="both-columns">A social media application for developers. Helping solve problems and just connect.</p>
          <img className="left-column" src={ByteBook} alt="" title="ByteBook"/>
            <div className="right-column link-container">
            <h2>TECHNOLOGIES USED:</h2>
              <p>C# .NET(8), React, TypeScript</p>
              <br /><br /><p>Github repo is private, but feel free to ask for access through the contact form.</p><br />
              <p>Undeployed - Currently in development</p>
            </div>
          <hr className="both-columns"></hr>

          <h3 id="Santa-Selector" className="left-column">Santa Selector</h3>
          <p className="both-columns">A festive in-between development of a duet mode Santa Selector app. A Simple and Tournament modestyle lets you decide who will at last be this Christmas Santa.</p>
          <img className="left-column" src={SantaSelector} alt="" title="Santa Selector"/>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>React, TypeScript, Netlify</p>
              <br /><br /><p>Github repo is private, but feel free to ask for access through the contact form.</p><br />
              <IoHomeOutline /> <a href="https://santaselector.netlify.app/" target="_blank" rel="noopener noreferrer">Santa Selector</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 id="Logo-design-GIMP" className="left-column">FlakeVille</h3>
          <p className="both-columns">A ski resort web application for both owners, employees and users. complete with IAM security and webshop.</p>
          <img className="left-column" src={Flakeville} alt="" title="Flakeville"/>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java (Spring Boot), React, MongoDB, Azure</p>
              <br /><br /><FiGithub /> <a href="https://github.com/Cristoffer85/Flakeville-server" target="_blank" rel="noopener noreferrer">Github link - Server</a><br />
              <FiGithub /> <a href="https://github.com/Cristoffer85/Flakeville-client" target="_blank" rel="noopener noreferrer">Github link - Client</a><br /><br />
              <IoHomeOutline /> <a href="https://flakeville.netlify.app/" target="_blank" rel="noopener noreferrer">FlakeVille</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 id="HoneyComb-Odyssey" className="left-column">HoneyComb Odyssey</h3>
          <p className="both-columns">A 2D RPG game built purely in Java Swing. The first complete game I finished during private time during the first year of education.</p>
          <img className="left-column" src={HoneyCombOdyssey} alt="" title="HoneyComb Odyssey"/>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED: </h2>
              <p>Java (Swing)</p>
              <br /><br /><p>Github repo is private, but feel free to ask for access through the contact form.</p>
            </div>
          <hr className="both-columns"></hr>

          <h3 id="Logo-design-GIMP" className="left-column">Logo Design</h3>
          <p className="both-columns">Designing Various Logos and content in GIMP.</p>
          <img className="left-column" src={Logodesign} alt="" title="Logo Design"/>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>GIMP</p>
            </div>
          <hr className="both-columns"></hr>

          <h3 id="Latera-Race-Tracer" className="left-column">Latera Race Tracer</h3>
          <p className="both-columns">A desktop application for timing competitive RC-racing cars on a track with help of transponders and sensors. Built completely in Python and exciting project.</p>
          <img className="left-column" src={LateraRaceTracer} alt="" title="Latera Race Tracer"/>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
                <p>Python (Kivy)</p>
                <br /><br /><FiGithub /> <a href="https://github.com/Cristoffer85/LRA" target="_blank" rel="noopener noreferrer">Github - Latera Race Tracer</a>
              </div>
  
          <div className="blank-row both-columns"></div>

        <h4 className="both-columns">Projects without a screenshot (as of this moment) listed:</h4>
          <hr className="both-columns"></hr>
          <h3 className="left-column">Who slept the longest on christmas?</h3>
          <p className="left-column">A terminal application with full IAM tracking a users sleep schedule last christmas. Editable by admin, of course.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java, Spring Boot, MongoDB</p>
              <br /><FiGithub /> <a href="https://github.com/Cristoffer85/WhoSleptTheLongestOnChristmas" target="_blank" rel="noopener noreferrer">Github - Who slept the longest on christmas?</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 className="left-column">Anectarchy</h3>
          <p className="left-column">The second game currently in development.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>C++, SFML</p>
              <br /><p>Github repo is private, but feel free to ask for access through the contact form.</p>
            </div>
          <hr className="both-columns"></hr>

          <h3 className="left-column">ProblemSolvers E-store</h3>
          <p className="left-column">A group project in school creating our very first fullstack E-commerce application. Very dear project and group.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java, Spring Boot, Javascript and Typescript</p>
              <br /><FiGithub /> <a href="https://github.com/Cristoffer85/Problemlosarna_E-Store" target="_blank" rel="noopener noreferrer">Github - ProblemSolvers E-store</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 className="left-column">Socket Server-Client Play</h3>
          <p className="left-column">Individual project creating socketbased communication between multiple clients (a chat) first one done with chats and very interesting. Start a chat-server in terminal and users can join.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java</p>
              <br /><FiGithub /> <a href="https://github.com/Cristoffer85/SocketServerClientPlay" target="_blank" rel="noopener noreferrer">Github - Socket Server-Client Play</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 className="left-column">Apache Kafka BumbiBear App</h3>
          <p className="left-column">Individual project creating a microservice with help of Apache Kafka. Save and view specific parameters of a BumbiBear through a Kafka Broker.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java, Apache Kafka, MySQL, MongoDB, local storage to .txt, JUnit, Mockito</p>
              <br /><FiGithub /> <a href="https://github.com/Cristoffer85/ApacheKafkaBumbiBearApp" target="_blank" rel="noopener noreferrer">Github - Apache Kafka BumbiBear App</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 className="left-column">W40K CRUD</h3>
          <p className="left-column">My first project implementing CRUD. Since i in the background kind of like Warhammer as well i only found this fitting to make a starter project of.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java</p>
              <br /><FiGithub /> <a href="https://github.com/Cristoffer85/W40KCRUD-UTM3" target="_blank" rel="noopener noreferrer">Github - W40K CRUD</a>
            </div>
          <hr className="both-columns"></hr>

          <h3 className="left-column">Terminal Mayhem</h3>
          <p className="left-column">One of our first Group projects in school where we were supposed to create our own game. Built completely in terminal and features an RPG game following a character taking on monsters in an abnormally large airport terminal.</p>
            <div className="right-column link-container">
              <h2>TECHNOLOGIES USED:</h2>
              <p>Java</p>
              <br /><FiGithub /> <a href="https://github.com/Cristoffer85/Terminal_Mayhem" target="_blank" rel="noopener noreferrer">Github - Terminal Mayhem</a>
            </div>
          <hr className="both-columns"></hr>
      </div>
    </div>
  );
};

export default Portfolio;