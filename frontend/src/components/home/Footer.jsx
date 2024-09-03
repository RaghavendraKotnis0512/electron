import React from 'react';
import './Footer.css';
import SendIcon from '@mui/icons-material/Send';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='footer'>
      <div className='subscribe'>
        <p className='sub'>Subscribe Newsletter</p>
        <button className='email'>Email Address <SendIcon/></button>
        <div className='call'>
          <HeadphonesIcon sx={{ fontSize: 40 }} /> {/* Adjust the fontSize as needed */}
          <p className='contact'>Call us 24/7: (+91)012345</p>
        </div>
      </div>
      <div className='main_footer'>
      <div className='footer_title'>
        <p style={{fontSize:'30px'}}>Electron</p>
        <div className='icon'>
        <GoogleIcon/>
        <FacebookIcon/>
        <WhatsAppIcon/></div>
      </div>
        <div className='final_product'>
        <p>Final Product</p>
        <ul>
            <li>Television</li>
            <li>Hair straighteners</li>
            <li>Mobile phones</li>
<li>Laptops</li>
<li>Gaming consoles</li>
<li>Smart home devices</li>
        </ul>
        </div>
        <div className='about_us'>
        <p>About Us</p>
        <ul>
            <li>Our Team</li>
            <li>History</li>
            <li>Mission</li>
            <li>Vision</li>
<li>Values</li>
<li>Achievements</li>
          </ul>
        </div>
        <div className='get_help'>
        <p>Get Help</p>
        <ul>
            <li>Contact Support</li>
            <li>FAQs</li>
            <li>Community</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Community Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
