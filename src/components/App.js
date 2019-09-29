import React, { Fragment } from 'react';
import Header from './Header';
import Intro from './Intro';
import Gallery from './Gallery';


const App = () => {
  return (
    <Fragment>
       <Header/>
       <Intro/>
       <Gallery/>
    </Fragment>
  ) 
};

export default App;