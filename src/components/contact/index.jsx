import React from 'react';
import './index.css';
import { FaMobileAlt, FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'


export default () => {
  return (
    <div className="contact" id="contact">
      <header className="title">Contact</header>
      <div className="contact_content">
        <p>
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hello, 
          I will try my best to get back to you as soon as possible!
        </p>
      </div>
      <div className="contact_main">
        <div className="contact_icon">
          <FaMobileAlt />
          <span>0967 543 385</span>
        </div>
        <div className="contact_icon">
          <SiGmail />
          <span>Nguyentranducvaa@gmail.com</span>
        </div>
        <div className="contact_icon">
          <FaInstagramSquare />
          <span>duc.develop</span>
        </div>
      </div>
    </div>
  )
}
