import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Pages/Subpages.css';
import x from '../../assets/x.ico';
import Githubrepomain from '../../assets/Githubrepomain.png';
import { FaGithub } from 'react-icons/fa';
import ByteBook from '../../assets/ByteBook.png'
import Flakeville from '../../assets/Flakeville.png'
import C from '../../assets/C.png'
import HoneyCombOdyssey from '../../assets/HoneyCombOdyssey.png'
import Logodesign from '../../assets/Logodesign.png'
import LateraRaceTracer from '../../assets/LateraRaceTracer.png'

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

        <img src={Githubrepomain} alt="" />

        <div className="contact-detail contact-detail-link">
            <FaGithub /> <a href="https://github.com/Cristoffer85" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <p>This is my portfolio page, where you above can view a small screenshot of the repository mainpage on Github and also a link to it.</p>
        <h3>Listed below here are the different projects i have been working on for the last 2+ years:</h3>
        <hr></hr>

        <h3 id="ByteBook">ByteBook</h3>
        <p>A social media application for developers. Helping solve problems and just connect.</p>
        <img src={ByteBook} alt="" title="ByteBook"/>
        <h4 className="tech">TECHNOLOGIES USED: C# .NET(8), React</h4>
        <hr></hr>

        <h3 id="FlakeVille">Flakeville</h3>
        <p>A ski resort web application for both owners, employees and users. complete with IAM security and webshop.</p>
        <img src={Flakeville} alt="" title="Flakeville"/>
        <h4 className="tech">TECHNOLOGIES USED: Java (Spring Boot), React, MongoDB, Azure</h4>
        <hr></hr>

        <h3 id="CO">CO</h3>
        <p>This portfolio web application. Built completely as a pure frontend application.</p>
        <img src={C} alt="" title="CO"/>
        <h4 className="tech">TECHNOLOGIES USED: React (Vite), Netlify</h4>
        <hr></hr>

        <h3 id="HoneyComb-Odyssey">HoneyComb Odyssey</h3>
        <p>A 2D RPG game buit purely in Java Swing. The first complete game i finished during private time during the first year of education.</p>
        <img src={HoneyCombOdyssey} alt="" title="HoneyComb Odyssey"/>
        <h4 className="tech">TECHNOLOGIES USED: Java (Swing)</h4>
        <hr></hr>

        <h3 id="Logo-design-GIMP">Logo Design</h3>
        <p>Designing Various Logo:s and content in GIMP.</p>
        <img src={Logodesign} alt="" title="HoneyComb Odyssey"/>
        <h4 className="tech">TECHNOLOGIES USED: GIMP</h4>
        <hr></hr>

        <h3 id="Latera-Race-Tracer">Latera Race Tracer</h3>
        <p>A desktop application for timing competitive RC-racing cars on a track with help of transponders and sensors. Built completely in Python and exciting project.</p>
        <img src={LateraRaceTracer} alt="" title="Latera Race Tracer"/>
        <h4 className="tech">TECHNOLOGIES USED: Python (Kivy)</h4>
        <hr></hr>

        <h4>Sample of Projects without a screenshot as of this moment, listed below:</h4>
        <ul className="dotted-list">
          <li>
            <h3 id="Who slept the longest on christmas?">Who slept the longest on christmas?</h3>
            <p>A terminal application with full IAM tracking a users sleep schedule last christmas. Editable by admin, of course.</p>
            <h5>Main technologies: Java, Spring Boot, MongoDB</h5>
          </li>

          <li>
            <h3 id="Anectarchy">Anectarchy</h3>
            <p>The second game currently in development.</p>
            <h5>Main technologies: C++, SFML</h5>
          </li>

          <li>
            <h3 id="ProblemSolvers E-store">ProblemSolvers E-store</h3>
            <p>A group project in school creating our very first fullstack E-commerce application. Very dear project and group.</p>
            <h5>Main technologies: Java, Spring Boot, Javascript and Typescript</h5>
          </li>

          <li>
            <h3 id="Socket Server-Client Play">Socket Server-Client Play</h3>
            <p>Individual project creating socketbased communication between multiple clients (a chat) first one done with chats and very interesting. Start a chat-server in terminal and users can join.</p>
            <h5>Main technologies: Java</h5>
          </li>

          <li>
            <h3 id="Apache Kafka BumbiBear App">Apache Kafka BumbiBear App</h3>
            <p>Individual project creating a microservice with help of Apache Kafka. Save and view specific parameters of a BumbiBear through a Kafka Broker.</p>
            <h5>Main technologies: Java, Apache Kafka, MySQL, MongoDB, local storage to .txt, JUnit, Mockito</h5>
          </li>

          <li>
            <h3 id="W40K CRUD">W40K CRUD</h3>
            <p>My first project implementing CRUD. Since i in the background kind of like Warhammer as well i only found this fitting to make a starter project of.</p>
            <h5>Main technologies: Java</h5>
          </li>

          <li>
            <h3 id="Terminal Mayhem">Terminal Mayhem</h3>
            <p>One of our first Group projects in school where we were supposed to create our own game. Built completely in terminal and features an RPG game following a character taking on monsters in an abnormally large airport terminal.</p>
            <h5>Main technologies: Java</h5>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Portfolio;