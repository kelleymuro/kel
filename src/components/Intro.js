import React from 'react'
import './Intro.css';
import Cactus from '../assets/cactus.png';


const Intro = () => {
  return (
    <div className="intro-container">
      <h4 className="intro-content">Kelley Muro</h4>
      <img src={Cactus} alt="Icon of a cute cactus" className="intro-content cactus"/>
      <h4 className="intro-content">Web & Mobile App Developer</h4>
      <h4 className="intro-content">React, React Native, Node, Javascript, Express, MongoDB</h4>
    </div>
  );
};


export default Intro;
