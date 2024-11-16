import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo2.png'
//import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a developer from Sweden with experience in primarily Java, C#.NET and React. Have various experience from both work and school.</p>
            </div>
            {/*

            Subscribe option that i dont really know right now how to implement or even if want to implement it/needed.
            
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
            
            */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© Cristoffer Östberg 2024. All rights reserved.</p>
            <div className="footer-bottom-right">
              {/* 
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              */}
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <p>Connect with me</p>
              </AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default Footer