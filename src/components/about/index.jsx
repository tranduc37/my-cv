import React from 'react';
import './index.css';
import avatar from '../../assets/images/avatar.jpg'
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div id="about" className="about">
      <div className="about_container">
        <h1 className="about_name">DUC NGUYEN TRAN</h1>
        <h2>UI / UX Designer & Developer</h2>
        <div className="about_image">
          <img src={avatar} alt=""/>
        </div>
        <p className="about_text">
          Hi there! <br />
          I am  Duc Nguyen Tran , a passionate programmer and a learner, born and grow up in VietNam.
          At present, I am a web developer with ReactJS, Redux, ContextAPI, Bootstrap and Material-UI... <br />
          I graduated Electronics and Telecommunication at Vietnam Aviation Academy, 2020.
          I have learned valuable professional skills such as web application development, data management, and web design... <br />
          I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
        </p>
        <Link className="btn" to="https://www.topcv.vn/quan-ly-cv">GET IN TOUCH</Link>
      </div>
    </div>
  )
}
