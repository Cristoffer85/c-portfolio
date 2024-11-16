import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.png';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';                     // switched to use toastify for this instead of alert, so much nicer looking and cleaner
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Ghostbuster from '../../assets/Ghostbuster.png';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4b8b60a9-65e1-48ec-ab19-a2328c8186c6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            event.target.reset();
            toast.success("Message successfully sent!");
        } else {
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <div id='contact' className="contact">

            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                progressClassName="progressbar-success" 
            />

            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk!</h1>
                    <p>Have one project or several in mind? I'd love to hear about it.</p>
                    <p>Drop me a message and I'll get back to you as soon as possible.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>cristoffer.ostberg@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+46730453309</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Gothenburg, Sweden</p>
                        </div>
                        <div className="contact-detail contact-detail-link">
                            <FaLinkedin /> <a href="https://www.linkedin.com/in/cö1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="contact-detail contact-detail-link">
                            <FaGithub /> <a href="https://github.com/Cristoffer85" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name='email' />
                    <label htmlFor="">Write your message here!</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" />
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
            <div className="contact-bottom-image">
                <img src={Ghostbuster} alt="Ghostbuster 3D-print+sewing" title="Yes, i 3D-print and sew just a little bit too!"/>
            </div>
        </div>
    );
}

export default Contact;