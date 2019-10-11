import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Intro from './Intro';
import Gallery from './Gallery';
import './App.css'
import Light from '../assets/light.png';
import Dark from '../assets/dark.png';


const App = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode())
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode])

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();
    // If mode was saved -> dark / light
    if (isReturningUser) {
      return savedMode;
      // If no saved value check pref color scheme
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }

  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }


  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="toggleContainer">
        <button className="setMode" onClick={() => setDarkMode(prevMode => !prevMode)}><img src={darkMode ? Dark : Light}></img> </button>
       <Header/>
       </div>
       <Intro/>
       <Gallery/>
    </div>
  ) 
};

export default App;