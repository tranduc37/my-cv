import React from 'react';
import './index.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaConnectdevelop, FaTools, FaMobileAlt, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillAndroid, AiOutlineApple } from 'react-icons/ai';
import { SiRedux, SiBootstrap, SiAngular, SiMaterialUi, SiJquery, SiFlutter } from 'react-icons/si'

export default () => {
  return (
    <div id="skill" className="skill">
      <header className="title">Skills</header>
      <div className="main">
        <div className="set">
          <span><FaConnectdevelop /></span>
          <header>Web development</header>
          <div className="list">
            <label>HTML5</label>
            <i><AiFillHtml5 /></i>
          </div>
          <div className="list">
            <label>CSS3</label>
            <i><FaCss3Alt /></i>
          </div>
          <div className="list">
            <label>JAVASCRIPT ES6+</label>
            <i><IoLogoJavascript /></i>
          </div>
          <div className="list">
            <label>REACTJS</label>
            <i><FaReact /></i>
          </div>
          <div className="list">
            <label>REDUX, CONTEXT API</label>
            <i><SiRedux /></i>
          </div>
        </div>

        <div className="set">
          <span><FaTools /></span>
          <header>Frameword</header>
          <div className="list">
            <label>Bootstrap</label>
            <i><SiBootstrap /></i>
          </div>
          <div className="list">
            <label>Angular</label>
            <i><SiAngular /></i>
          </div>
          <div className="list">
            <label>Material-ui</label>
            <i><SiMaterialUi /></i>
          </div>
          <div className="list">
            <label>Jquery</label>
            <i><SiJquery /></i>
          </div>
        </div>

        <div className="set">
          <span><FaMobileAlt /></span>
          <header>Mobile Application</header>
          <div className="list">
            <label>React Native</label>
            <i><FaReact /></i>
          </div>
          <div className="list">
            <label>Flutter</label>
            <i><SiFlutter /></i>
          </div>
          <div className="list">
            <label>IOS</label>
            <i><AiOutlineApple /></i>
          </div>
          <div className="list">
            <label>Android</label>
            <i><AiFillAndroid /></i>
          </div>
        </div>
      </div>
    </div>
  )
}
