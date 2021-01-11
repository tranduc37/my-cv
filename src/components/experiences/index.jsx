import React from 'react';
import './index.css'
import background from '../../assets/images/undraw_Work_chat_re_qes4.svg';

export default () => {
  return (
    <div className="experiences" id="experiences">
      <div className="experiences_container">
        <header className="title">Experiences</header>
        <section>
          <div className="experiences_image">
            <img src={background} alt=""/>
          </div>
          <div className="experiences_content">
            <div className="experiences_content--title">
              <h3>WEB DEVELOPER</h3>
              <p><strong>Techology: </strong>Html5, Css3, Sass, Javascript, ReactJS, Redux, ContextAPI...</p>
              <p><strong>Duration: </strong>DEC 2019 - Present</p>
            </div>
            <div className="experiences_content--main">
              <ul className="experiences_list">
                <li className="experiences_item">
                  <p><strong>Developed & enhanced</strong> multiple features with customizability option across web application.</p>
                </li>
                <li className="experiences_item">
                  <p><p><strong>Designing, coding, and modifying websites</strong> in Boostrap, Material-UI. Strive to create visually appealing websites with user-friendly design and clear navigation.</p></p>
                </li>
                <li className="experiences_item">
                  <p><p><strong>Learn and support</strong> marketing campaigns in adapting new content to fit existing and new digital channels.</p></p>
                </li>
                <li className="experiences_item">
                  <p><p><strong>Building and Designing</strong> websites for clients such as Shopping, My-CV, Todolist, Movies, . . .</p></p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
