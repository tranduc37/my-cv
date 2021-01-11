import React from 'react';
import './index.css';
import Typist from 'react-typist'

export default () => {
  return (
    <div className="banner">
      <div className="banner_Info">
        <Typist cursor={{ show:false }}>
          <Typist.Delay ms={500}/>
          <span>&lt;body&gt;</span>
        </Typist>
          <div className="banner_description">
          <Typist cursor={{ show:false }}>
          <Typist.Delay ms={1000}/>
            <span>&lt;h1&gt;</span>
            <h2>Hi <br /> I'M DUC <br /> WEB DEVELOPER.</h2>
            <span>&lt;/h1&gt;</span>
          </Typist>
          </div>
        <Typist cursor={{ show:false }}>
          <Typist.Delay ms={3800}/>
          <span>&lt;/body&gt;</span>
        </Typist>
      </div>
    </div>
  )
}
